const rounds = input.map(([left_shape, right_shape]) => {
  const left = SHAPES[left_shape];

  if (right_shape === "X") {
    let right = left - 1 || 3;
    return right;
  } else if (right_shape === "Y") {
    return left + 3;
  } else {
    let right = (left + 1) % 3 || 3;
    return right + 6;
  }
});

console.log(rounds.reduce((a, b) => a + b, 0));
