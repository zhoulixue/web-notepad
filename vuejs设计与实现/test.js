const set = new Set([1])
const newSet = new Set(set)

newSet.forEach(item => {
  set.delete(1)
  set.add(1)
  console.log('mm')
})