function capitalize(s){
    const oddCapitalized = s.split('').map((letter,index)=>{
        if(index%2===0){
        return letter
        }else{
        return letter.toUpperCase()
        }
    
  })
    .join('')
    
    const evenCapitalized = s.split('').map((letter,index)=>{
        if(index%2===0){
        return letter.toUpperCase()
        }else{
        return letter
        }
    
  })
    .join('')
  return [evenCapitalized,oddCapitalized];
};