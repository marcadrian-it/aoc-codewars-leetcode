function toCamelCase(str) {
    // Split the input string into an array of words, separated by either - or _ // This allows us to process each word individually.
    let words = str.split(/[-_]/);
    
    
    // We start from the second word, because the first word should remain unchanged
    for (let i = 1; i < words.length; i++) {
    // Capitalize the first letter of the current word
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  }
  