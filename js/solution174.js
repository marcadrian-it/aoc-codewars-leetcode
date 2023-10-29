function isLeapYear(year) {
  let isLeap = false;
  if (year % 400 === 0) {
    isLeap = true;

    return isLeap;
  }
  if (year % 100 === 0) {
    isLeap = false;

    return isLeap;
  }
  if (year % 4 === 0) {
    isLeap = true;

    return isLeap;
  }

  return isLeap;
}
