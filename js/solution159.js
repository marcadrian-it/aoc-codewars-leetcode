function isPalindrome(num){
  return (num>10 && num == num.toString().split("").reverse().join(""))? true : false;
}
function palindrome(num) {
  if(!Number.isInteger(num) || num<0) return 'Not valid';
  for(i=0; 1==1; i++){
    if(isPalindrome(num+i)) return num+i;
    if(isPalindrome(num-i)) return num-i;
  }
}
