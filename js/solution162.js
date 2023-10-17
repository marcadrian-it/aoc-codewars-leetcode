const distancesFromAverage = arr => {
  let avg = arr.reduce((s, v) => s + v) / arr.length;
  return arr.map(v => +(avg - v).toFixed(2));
};
