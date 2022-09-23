const isArray = Array.isArray
const isObject = (val) =>
  val !== null && typeof val === 'object'

function clone(v) {
  if (isArray(v)) {
    return v.map(clone)
  } else if (isObject(v)) {
    const res = {}
    for (const key in v) {
      res[key] = clone(v[key])
    }
    return res
  } else {
    return v
  }
}
module.exports = {
  clone
}
