function parseURL(strg) {
  const url = new URL(strg);
  let result = url.hostname.split(".")[0];
  if (result === "www") {
    result = url.hostname.split(".")[1];
  }
  console.log(result);
}
parseURL("https://www.cnet.com");
parseURL("http://www.zombie-bites.com");
parseURL("http://github.com/carbonfive/raygun");
