// assign your RegExp to REGEXP
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

function doTest(string, expected) {
  const actual = REGEXP.test(string);
  const log = `"${string}" is${expected ? "" : " not"} a valid password\n`;
  strictEqual(actual, expected, log);
}
