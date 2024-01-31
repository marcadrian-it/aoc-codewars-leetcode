function camelCase(text: string): string {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1))
    .join("");
}
