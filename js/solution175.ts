// Combining Arrays Without Duplicates
// Given two or more arrays, write a function that combines their elements into one array without any repetition

// function deduplicateArrays(...arrays: number[][]): number[] {
//     let combined = arrays.reduce((acc, val) => acc.concat(val), []);
//     let unique = [...new Set(combined)];
//     return unique;
// }


function deduplicateArrays(...arrays: number[][]): number[] {
    let jointArray: number[] = [];
  console.log(arrays)
    arrays.forEach(array => jointArray = [...jointArray, ...array]);
    let uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index);
    return uniqueArray;
}





console.log(deduplicateArrays([1,2,3],[2,3,4],[3,2,1,4,5]))
