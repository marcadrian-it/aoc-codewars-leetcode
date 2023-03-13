const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

function mxdiflg(a1, a2) {

  if (a1.length === 0 || a2.length === 0) {
    return -1
  }
  a1=a1.map(s=>s.length);
  a2=a2.map(s=>s.length);
  
  const maxa1 = Math.max(...a1)
  const mina1 = Math.min(...a1)
  const maxa2 = Math.max(...a2)
  const mina2 = Math.min(...a2)
  
  return Math.max(Math.abs(maxa1 - mina2), (Math.abs(maxa2 - mina1)));
}