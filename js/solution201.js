const compress = function (str) {
  const strCheck = JSON.stringify(str.match(/(.)\1*/g).map(el => [el.length, el[0]]))
  return strCheck.length < str.length ? strCheck : str
}

const decompress = function (c) {
  return c.includes('[') ? JSON.parse(c).map(el => el[1].repeat(el[0])).join('') : c
}
