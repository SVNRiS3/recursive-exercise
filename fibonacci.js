function fibs(sequenceLength) {
  if (sequenceLength < 2) {
    return sequenceLength;
  }
  return fibs(sequenceLength - 1) + fibs(sequenceLength - 2);
}

console.log(fibs(7));
