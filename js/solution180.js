// Counting the vowels in a string of text

const vowels = ['a', 'e', 'i', 'o', 'u']

function countVowels(str) {
  let counter = 0;

  str.split('').forEach((element) => {
    if (vowels.includes(element)) {
      counter++
    }
  })

  return counter
}

console.log(countVowels('bison'))
console.log(countVowels('snake'))
console.log(countVowels('veggies'))
console.log(countVowels('meat'))

