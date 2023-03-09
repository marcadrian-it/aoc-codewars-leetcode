function last(x) {
    const arr = x.split(' ');
    const sorted = arr.sort((a, b) => {
      const lastA = a.slice(-1);
      const lastB = b.slice(-1);
      if (lastA !== lastB) {
        return lastA > lastB ? 1 : -1;
      }
      // if last letters are the same, compare by original index
      return arr.indexOf(a) > arr.indexOf(b) ? 1 : -1;
    });
    console.log(sorted);
    return sorted;
  }