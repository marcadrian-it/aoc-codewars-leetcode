Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
  let combine = new Set(this.concat(a))
  
  return combine.size == this.length ;
} } );
