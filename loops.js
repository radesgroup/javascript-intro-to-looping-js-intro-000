function forLoop(array){
  for (let i = 0; i < 25; i++)
  {

  array.push( `I am ${i} strange loop${i === 1 ? '' : 's'}.`);

  }
  return array;
}
forLoop()

function whileLoop(n){

  while (n > 0) {
    console.log(n);
   n--;
  }

return "done";
}
whileLoop(6)
