function numberOfPairs(gloves) {
  const count_dict = gloves.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let total=0
  for (let prop in count_dict) {
  if (count_dict.hasOwnProperty(prop)) {
    const value = count_dict[prop];
    const countTwos = Math.floor(value / 2);
    total+=countTwos
    }
}
  return total
  }