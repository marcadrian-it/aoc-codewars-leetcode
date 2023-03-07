function sumOfMinimums(arr) {
    let count_min = 0
    for (let n_arr of arr){   
      const minimum = Number(Math.min.apply(Math, n_arr))
      count_min+=minimum
    }
    
    return count_min
  }