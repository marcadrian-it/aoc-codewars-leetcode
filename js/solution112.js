function adjacentElementsProduct(array) {
  let maximum = -Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] !== undefined) {
      const adjecentProduct = array[i] * array[i + 1];
      adjecentProduct > maximum ? (maximum = adjecentProduct) : null;
    }
  }
  return maximum;
}
