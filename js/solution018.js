const number=function(array){
    if(!array){
      return []
    }else{
    return array.map((element,index)=>`${index+1}: ${element}`)  
    }
  }