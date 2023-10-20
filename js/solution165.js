// params  = array of numbers
// we return values which are even



function noOdds( values ){
    return values.filter(value => value % 2 === 0);
}


console.log(noOdds([5,3,2]))
console.log(noOdds([4,1,1]))
console.log(noOdds([6,6,6]))
