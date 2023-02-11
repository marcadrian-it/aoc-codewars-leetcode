function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}