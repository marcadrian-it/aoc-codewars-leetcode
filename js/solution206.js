const f=a=>[...a].map(e=>a.indexOf(e)).join`,`;
const isomorph = (a, b) => f(a) == f(b);
