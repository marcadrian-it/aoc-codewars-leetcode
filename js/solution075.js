// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function dup(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const letters = arr[i].split("");
    result.push(
      letters
        .filter((letter, index) => {
          if (index === 0) {
            return letter;
          } else if (letters[index] !== letters[index - 1]) {
            return letter;
          }
        })
        .join("")
    );
  }
  console.log(result);
  return result;
}

dup(["abracadabra", "allottee", "assessee"]);
dup(["kelless", "keenness"]);
dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]);
dup(["abracadabra", "allottee", "assessee"]);
dup(["kelless", "keenness"]);
