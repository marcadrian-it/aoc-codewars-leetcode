function titleCase(title, minorWords) {
    let words = title.toLowerCase().split(' ');
    let result = '';
    if (minorWords !== undefined) {
      minorWords = minorWords.toLowerCase().split(' ');
    }
  
    for (let i = 0; i < words.length; i++) {
      // Capitalized if fulfills the requirements in other case the word will stay lowercased
        
      if (i === 0 || !minorWords || !minorWords.includes(words[i])) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
      }
      result += words[i] + ' ';
    }
    return result.trim();
  }