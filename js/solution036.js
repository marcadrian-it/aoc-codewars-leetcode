function validParentheses(parens) {
    let counter = 0;
    
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
        counter++;
      } else if (parens[i] === ')') {
        counter--;
        if (counter < 0) {
          return false;
        }
      } else {
        // invalid character, return false
        return false;
      }
    }
    
    // check if counter is zero
    return counter === 0;
  }