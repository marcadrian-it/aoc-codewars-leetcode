function hello(name) {
    if(name === undefined || name === ""){
      return 'Hello, World!';   
    }else{
      name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
      return `Hello, ${name}!`
    }
   
  }