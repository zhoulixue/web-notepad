function getType(p) {
  return Object.prototype.toString.call(p).slice(-7, -1);
}

function objReplace(source, target) {
  Object.keys(target).forEach((key) => {
    if (getType(source[key]) === 'Object' && getType(target[key]) === 'Object') {
      objReplace(source[key], target[key])
    } else {
      source[key] = target[key];
    }
  })
  return source;
}
// 1. 
const source1 = {
  // a: 1,
  // b: 2,
  // c: {
  //   c1: 'c1',
  //   c2: 'c2',
  // }
  cre_ref_pg: {
    pgid: 'page_shop_list_h5',
  },
  ref_ele: { eid: 'shop_goods_card' },
}
const target1 = {
  // a: 'a1',
  // d: 'd1',
  // c: 'c'
  cre_ref_pg: {
    ztid: 123
  },
}

const target2 = {
  a: 'a1',
  d: 'd1',
  c: {
    c4: 'c4',
    c2: {
      xx: 'xx'
    }
  }
}

console.log(objReplace(source1, target1));
