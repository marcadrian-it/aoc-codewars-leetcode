function distribute(nodes, workload){
  var works = new Array(workload).fill(0).map((v,i) => i);
  
  return new Array(nodes).fill(0).map((v,i) => works.splice(0,Math.ceil(works.length / (nodes - i))));
}
