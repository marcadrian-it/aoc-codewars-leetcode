function bouncingBall(h,  bounce,  window) {
  if(bounce>=1||bounce<0||window>=h){
    return -1
  }
  let seen=0
  while(h>window){
    if(h>window&&h*bounce>window){
      seen+=2
    }
    else if(h>window){
      seen++
    }
    h=h*bounce
  }
  return seen
}