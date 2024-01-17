function reverseStr(str: string): string {
  return [...str].reduce((acc, char) => char + acc, "");
}

console.log(reverseStr("baobab"));
