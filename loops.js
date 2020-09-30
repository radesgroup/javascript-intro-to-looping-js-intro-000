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

  while (n >= 0) {
    console.log(n);
    n--
  }
alert('done');
return n;
}
whileLoop(n)
