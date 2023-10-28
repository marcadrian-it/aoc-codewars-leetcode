function bubblesortOnce(arr) {
  const a =[...arr]
  
  for(let i=0;i<a.length-1;i++){
    console.log(a[i],'+',a[i+1]) 
    if(a[i]>a[i+1]){
      const tmp = a[i+1]
      a[i+1] = a[i]
      a[i] = tmp;
    }
  }
  
  return a
}
