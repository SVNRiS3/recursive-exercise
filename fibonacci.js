// function fibs(sequenceLength) {
//   const fibArray = [];
//   for (let i = 0; i < sequenceLength; i++) {
//     if (i < 2) fibArray.push(i);
//     else fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//   }
//   return fibArray;
// }

function fibs(sequenceLength) {
  if (sequenceLength <= 1) {
    return [0];
  } else if (sequenceLength === 2) {
    return [0, 1];
  }
  const fibArray = fibs(sequenceLength - 1);
  fibArray.push(fibArray.slice(-1)[0] + fibArray.slice(-2)[0]);
  return fibArray;
}

console.log('Fib: ', fibs(8));
