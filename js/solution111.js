function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const isNotExpired =
    new Date(currentDate) <= new Date(expirationDate) ? true : false;
  return enteredCode === correctCode && isNotExpired;
}
