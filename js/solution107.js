function switcheroo(x) {
  const splitString = x.split("");

  return splitString
    .map((letter) => (letter === "a" ? "b" : letter === "b" ? "a" : "c"))
    .join("");
}
