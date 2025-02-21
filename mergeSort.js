function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const leftArray = arr.slice(0, arr.length);
  const rightArray = arr.slice(arr.length, -1);

  const tmp = [];
  const i = 0;
  const j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray.length === i) tmp = tmp.concat(rightArray);
    if (rightArray.length === j) tmp = tmp.concat(leftArray);
    if (leftArray[i] > rightArray[j]) {
      tmp.push(rightArray[j]);
      j++;
    } else if (leftArray[i] < rightArray[j]) {
      tmp.push(leftArray[i]);
      i++;
    }
  }
  const sortedArr = mergeSort(tmp);

  return sortedArr;
}
