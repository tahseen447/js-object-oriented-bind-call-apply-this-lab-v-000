//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, name, age){
  fn(name, age);
}