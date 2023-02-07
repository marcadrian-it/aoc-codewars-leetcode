function createPhoneNumber(numbers){
    const directional = numbers.slice(0,3).join('')
    const rest = numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('')
    return `(${directional}) ${rest}`
  }