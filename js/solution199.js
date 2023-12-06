function stringReverse(str) {
  return [...str].reduce((acc, char) => 
    char + acc, "");
}


console.log(stringReverse('bright'))
