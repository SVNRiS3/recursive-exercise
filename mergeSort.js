function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  };

  const leftArray = arr.slice(0, arr.length);
  const rightArray = arr.slice(arr.length, -1);
  const tmp = [];

  for (itemLeft, indexLeft in leftArray) {
    for (itemRight, indexRight in rightArray) {
      if (leftArray.length === 0) tmp = tmp.concat(rightArray);
      if (rightArray.length === 0) tmp = tmp.concat(leftArray);
      if (item > rightArray[0]) {
        //todo
      }
    };
  };
  const sortedArr = mergeSort(tmp);

  return sortedArr;
}