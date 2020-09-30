function forLoop(array){
  for (let i = 0; i < 25; i++)
  {

  array.push( `I am ${i} strange loop${i === 1 ? '' : 's'}.`);

  }
  return array;
}
forLoop()

var n = 4;
function whileLoop(n){
let t = n;
  while (t >= 0) {
    console.log(t--);

  }
console.log('done');
return n;
}
whileLoop(4)
