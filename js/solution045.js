function assembleString(array) {
  if (array.length === 0) {
    return ''
  }
  const originalLength = array[0].length
  let result = ''
  for (let i = 0; i < originalLength; i++) {
    let nonAsteriskChar = null
    for (const str of array) {
      if (str[i] !== '*') {
        if (nonAsteriskChar === null) {
          nonAsteriskChar = str[i]
        } else if (nonAsteriskChar !== str[i]) {
          nonAsteriskChar = '#'
          break
        }
      }
    }
    result += nonAsteriskChar === null ? '#' : nonAsteriskChar
  }
  return result
}
