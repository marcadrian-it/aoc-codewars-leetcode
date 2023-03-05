function mergeStrings(first, second) {
    // If the strings are identical, no need to merge
    if (first === second) {
      return first;
    }
  
    // Find the overlap between the two strings
    let overlap = "";
    for (let i = 1; i <= second.length; i++) {
      if (first.endsWith(second.slice(0, i))) {
        overlap = second.slice(0, i);
      }
    }
  
    // Concatenate the strings, excluding the overlapping part from the second string
    return first + second.slice(overlap.length);
  }