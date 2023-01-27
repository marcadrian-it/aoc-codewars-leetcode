function digPow(n, p) {
    let sum = 0;
    let k = 0;
    
    // Convert the integer n to a string to access each digit
    let nStr = n.toString();
    
    for (let i = 0; i < nStr.length; i++) {
        let currentDigit = parseInt(nStr[i]);
        // Add the current digit raised to the power of p+i to the sum
        sum += Math.pow(currentDigit, p + i);
    }
    k = sum/n
  if (Number.isInteger(k)) {
        return k;
    } else {
        return -1;
    }
}