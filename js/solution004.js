function toNumberArray(stringarray){
    //P: array of strings with numbers inside
    //R: array of ints and floated values
      
    // Map each element as either Int or Floated value 
     let newArray = stringarray.map(element=>{
      if (Number(element) % 1 === 0){
        return parseInt(element)}
      else if (Number(element) % 1 !== 0){
        return parseFloat(element)
      }
    })
     return newArray  
    }
    
    //E:
    console.log(toNumberArray(['1','2','3']))
    console.log(toNumberArray(['1.34','2.34','3.34']))