function isValidWalk(walk) {
  if (walk.length === 10) {
    const keystrokes = walk.reduce((total, curr) => {
      total[curr] = (total[curr] || 0) + 1;
      return total;
    }, {});

    if (keystrokes.n == keystrokes.s && keystrokes.w == keystrokes.e) {
      return true;
    } else return false;
  } else {
    return false;
  }
}
