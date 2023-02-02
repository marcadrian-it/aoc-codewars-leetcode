function findDifference(a, b) {
  const vol1 = a.reduce((acc,part)=>acc*part,1)
  const vol2 = b.reduce((acc,part)=>acc*part,1)
  const diff = Math.abs(vol1 - vol2)
  return diff
}