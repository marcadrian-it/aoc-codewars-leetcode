function parse(string) {
  return string
    .split(" -> ")
    .reverse()
    .map((val) => JSON.parse(val))
    .reduce((list, val) => new Node(val, list));
}
