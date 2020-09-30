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

  for (n;n >= 0;--n) {
    console.log(n);

  }
console.log('done');
return n;
}
whileLoop(4)
