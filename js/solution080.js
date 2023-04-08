// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxChar(strng){
  const map = {};
  for(let i=0;i<strng.length;i++){
    if(!map[strng[i]]){
      map[strng[i]] = 1;  
  }
    else{
      map[strng[i]] += 1;
    }
  }
  return Math.max(...Object.values(map)); 
}

console.log(maxChar("Hello World!"))