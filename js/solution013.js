function findOdd(A) {
  
  //make a dictionary of frequency of each number 
  // acc - placeholder for an object to which we add properties and values
  // curr - current value added from an array A
  const obj = A.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;}, {});
  
  // we turn object into arrays of key value pairs and iterate over them in search of an odd value
  for (const [key, value] of Object.entries(obj)) {
  if (value % 2 !== 0) {
    return Number(key)
  }
}
}