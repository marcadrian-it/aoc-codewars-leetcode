const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    else if (count === 0) {
      return "0=0";
    }
    let str = "";
    let sum = 0;
    for (let i = 0; i < count + 1; i++) {
      str += `${i}`;
      sum += i;
      if (i !== count) {
        str += "+";
      }
    }
    return `${str} = ${sum}`;
  };

  return SequenceSum;
})();
