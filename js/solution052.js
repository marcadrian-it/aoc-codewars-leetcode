function keepOrder(ary, val) {
    return ary.concat(Infinity).findIndex(n=>n>=val);
  }