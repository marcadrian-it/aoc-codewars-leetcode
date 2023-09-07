const multiFilter =
  (...funcs) =>
  (x) =>
    funcs.every((f) => f(x));
