// 只是在写一个转换脚本而已，不要在意很多细节
const fs = require('fs');

Array.prototype.findIndexStart = function findIndexStart(cb, startIndex = 0) {
  let index = -1
  for (let i = startIndex; i < this.length; i++) {
    const item = this[i];
    if (cb(item)) {
      index = i;
      break;
    }
  }
  return index;
}
Array.prototype.findIndexEnd = function findIndexEnd(cb, endIndex = -1) {
  let index = -1;
  const endIndexFormat = endIndex < 0 ? (this.length + endIndex) : endIndex;
  for (let i = endIndexFormat; i >= 0; i--) {
    const item = this[i];
    if (cb(item)) {
      index = i;
      break;
    }
  }
  return index;
}

const BASIC_TYPE_MAP = {
  bool: 'boolean',
  int: 'number',
  long: 'number',
  string: 'string',
  byte: 'number',
  unsigned: 'number',
  float: 'number',
  double: 'number',
}
const INTERFACE_TYPE = [
  'vector',
  'map',
]
function getInterfaceValue(tokens) {
  let value = BASIC_TYPE_MAP[tokens];
  if (value) return value;
  const startBracketsIndex = tokens.indexOf('<');
  const name = tokens.slice(0, startBracketsIndex);
  
  if (name.trim() === 'vector') {
    value = tokens.slice(startBracketsIndex + 1, -1);
    value = BASIC_TYPE_MAP[value] || value.split('::').slice(-1).join('');
    value = `${value}[]`;
    return value;
  } else if (name.trim() === 'map') {
    const commaStartIndex = tokens.indexOf(',');
    const interKey = tokens.slice(startBracketsIndex + 1, commaStartIndex);
    const interValue = tokens.slice(commaStartIndex + 1, -1);
    value =  `{
      [prop: ${BASIC_TYPE_MAP[interKey]}]: ${getInterfaceValue(interValue)}
    }` ;
    return value;
  } else {
    return tokens.split('::').slice(-1).join('');
  }
}

function getStructRes (tokens) {
  let name;
  let value;
  const firsLetter = tokens[0];
  const lastLetter = tokens[tokens.length - 1];
  value = BASIC_TYPE_MAP[firsLetter];
  if (value) {
    name = tokens[firsLetter === 'unsigned' ? 2 : 1];
    if (name.endsWith(';')) {
      name = name.slice(0, -1);
    }
  } else if (INTERFACE_TYPE.some(x => firsLetter.startsWith(x))) {
    value = getInterfaceValue(tokens.slice(0, -1).join(''));
    name = lastLetter.slice(0, -1);
  } else {
    name = lastLetter.slice(0, -1);
    value = firsLetter.split('::').slice(-1).join('');
  }
  return {
    name,
    value,
  }
}
// function structNameFormat(name) {
//   const arr = name.split('');
//   arr[0] = arr[0].toUpperCase();
//   return arr.join('');
// }

/**
 * 
 * @param {number} startIndex 标记开始位置
 * @param {number} tokens tokens
 * @param {boolean} isBefore module struct enum 的注释在后
 */
function findNote(startIndex, tokens, isBefore) {
  let result = [];
  if (isBefore) {
    const note = tokens[startIndex - 1] || '';
    if (note.startsWith('//')) {
      result = [note];
    } else if (note.endsWith('*/')) {
      const noteEndIndex = startIndex - 1;
      const noteStartIndex = tokens.findIndexEnd(x => x.startsWith('/*'), noteEndIndex);
      result = tokens.slice(noteStartIndex, noteEndIndex + 1);
    }
  } else {
    const note = tokens[startIndex + 1];
    if (note.startsWith('//')) {
      result = [note];
    }
  }
  return result
    .map((x) => {
      let n = x;
      if (x.endsWith('*/')) {
        n = x.slice(0, -2);
      } else if (x.startsWith('/*') || x.startsWith('//')) {
        n = x.slice(2);
      }
      return n
    })
    .filter(x => x.trim())
    .map(x => `// ${x}`);
}

module.exports = function jce2ts(sourceDir, targetDir) {
  const data = fs.readFileSync(sourceDir).toString();

  // 获取token
  // const tokens = data.split(/[\n\s]+/);
  // 获取token
  let tokenRes = [];
  let tokens = data.split('\n').filter(Boolean);
  tokens.forEach(x => {
    if (x.trim()) {
      if (x.startsWith('//')) {
        tokenRes.push(x);
      } else {
        x.split('\/\/').forEach((x, i) => {
          if (i === 0) {
            tokenRes = [...tokenRes, ...x.split(/[\n\s\t]+/).filter(Boolean)]
          } else {
            tokenRes.push(`//${x}`); 
          }
        });
      }
    }
  })
  tokens = tokenRes;
  const mod = {
    type: 'module',
    name: '',
    childrens: [],
    notes: [],
  };
  // 处理 module 模块
  const moduleStartIndex = tokens.findIndex(x => x === 'module');
  const moduleNote = findNote(moduleStartIndex, tokens, true);
  const moduleName = tokens[moduleStartIndex + 1];
  
  mod.name = moduleName;
  mod.notes = moduleNote;
  
  const childrenToken = [];
  
  let startIndex = tokens.findIndexStart(x => x.endsWith('{'), moduleStartIndex) + 1;
  const endIndex = tokens.findIndexEnd(x => x === '};') - 1;
  
  while (startIndex <= endIndex) {
    const structEndIndex = tokens.findIndexStart(x => x === '};', startIndex);
    childrenToken.push(tokens.slice(startIndex, structEndIndex + 1));
    startIndex = structEndIndex + 1;
  }
  
  mod.childrens = childrenToken.map(childTokens => {
    const hitIndex = childTokens.findIndex(x => ['enum', 'struct'].includes(x));
    let notes = findNote(hitIndex, childTokens, true);
    const structName = childTokens[hitIndex + 1];
    const structType = childTokens[hitIndex];
    let propTokens = [];
    const startIndex = childTokens.findIndex(x => x ==='{');
    if (!notes.length) {
      notes = findNote(startIndex, childTokens, true);
    }
    const endIndex = childTokens.findIndex(x => x === '};');
    const splitSymbol = structType === 'enum' ? ',' : ';';
    let temp = [];
    for (let i = startIndex + 1; i < endIndex; i++) {
      const item = childTokens[i];
      if (item.startsWith('//')) {
        const pre = propTokens[propTokens.length - 1]
        pre && pre.push(item);
        temp = [];
      } else {
        temp.push(item);
        if (item.endsWith(splitSymbol)) {
          propTokens.push(temp);
          temp = []
        }
      }
    }
    const props = propTokens.map(tokens => {
      let name;
      let value;
      let require = false;
      let notes = [];
      let lastIndex = 1;
      let last = tokens[tokens.length - lastIndex];
      while (last.startsWith('//')) {
        notes.push(last);
        lastIndex += 1;
        last = tokens[tokens.length - lastIndex];
      }
      if (structType === 'enum') {
        value = last.slice(0, -1);
        name = tokens[0];
      } else {
        require = tokens[2] === 'require';
        const structRes = getStructRes(tokens.slice(2, tokens.length - notes.length));
        value = structRes.value;
        name = structRes.name;
      }
      return {
        name,
        value,
        require,
        notes,
      }
    });
    return {
      type: structType,
      name: structName,
      notes,
      props,
    }
  });
  
  const result = `
  ${mod.notes.join('\n')}
  ${mod.childrens.map(child => {
    const { type, name, notes, props } = child;
    if (type === 'enum') {
      return `${notes.join('\n')}
      declare enum ${name} {
        ${props.map(prop => `${prop.name} = ${prop.value}, ${prop.notes.join('\s')}`).join('\n')}
      }
      `
    } else {
      return `${notes.join('\n')}
      interface ${name} {
        ${props.map(prop => `${prop.name}${prop.require ? '' : '?'}: ${prop.value}; ${prop.notes.join('\s')}`).join('\n')}
      }
      `
    }
  }).join('\n')}
  `
  fs.writeFile(targetDir, result, err => {
    if (err) {
      return console.log(err)
    }
    console.log(`${sourceDir} write successful to ${targetDir}`);
  })
}