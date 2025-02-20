function fibs(sequenceLength) {
  const fibArray = [];
  for (let i = 0; i < sequenceLength; i++) {
    if (i < 2) fibArray.push(i);
    else fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

// function fibs(sequenceLength) {
//   if (sequenceLength < 2) {
//     return sequenceLength;
//   }
//   return fibs(sequenceLength - 1) + fibs(sequenceLength - 2);
// }

console.log('Fib: ', fibs(8));
