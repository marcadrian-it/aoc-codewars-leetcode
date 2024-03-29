function moveElement(duration, element, distance) {
  const start = performance.now();

  function move(currentTime) {
    const elapsedTime = currentTime - start;
    const progress = elapsed / duration;
    const amountToMove = progress * distance;

    element.style.transform = `translateX(${ amountToMove }px)`;

    if( amountToMove < distance){
      requestAnimationFrame(move);
    }
  }

  requestAnimationFrame(move);

}
