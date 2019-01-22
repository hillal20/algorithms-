let arr = [1, 9, 3, 8, 4, 2, 7];

const BS = (l, h, arr, key) => {
  const sArr = arr.sort((a, b) => {
    return a > b;
  });

  let middle = Math.floor((l + h + 1) / 2);

  if (l === h) {
    // there is only one element in the arr
    if (sArr[h] === key) {
      return true;
    }
  } else {
    // multiple elements in the array
    if (sArr[middle] === key) {
      return true;
    }
    if (sArr[middle] > key) {
      return BS(l, middle - 1, sArr, key);
    }
    if (sArr[middle] < key) {
      return BS(middle + 1, h, sArr, key);
    }
  }
  return false;
};
BS(0, arr.length, arr, 9);
