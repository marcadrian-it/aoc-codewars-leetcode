const number = function(busStops){
  let peopleCount = 0
  for(let arr of busStops){
    peopleCount = peopleCount + arr[0] - arr[1]
  }
  return peopleCount
}