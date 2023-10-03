function fizzBuzz(num){
  //for loop from 1 to num 
  for(let i = 1; i <= num; i++){
    //conditional 
    //if num % 3 && num % 5 === 0 -> fizzBuzz
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzBuzz')
    }else if(i % 3 === 0){
      console.log('fizz')
    }else if( i % 5 === 0 ){
      console.log('buzz')
    }else{
      console.log(i)
    }
    //if num % 3 === 0 -> fizz
    //if num % 5 === 0 -> buzz
    //log the num
  }
}

fizzBuzz(5) //1, 2, fizz, 4, buzz
fizzBuzz(9) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
fizzBuzz(15) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
