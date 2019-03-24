const array = [1, 6, 3];
const bs = (l, h, key, arr) => {
  arr.sort();

  if (l === h) {
    if (arr[l] === key) {
      return true;
    } else {
      return false;
    }
  } else {
    let middle = Math.floor((l + h) / 2);

    if (arr[middle] === key) {
      return true;
    }

    if (arr[middle] > key) {
      bs(l, middle - 1, key, arr);
    }
    if (arr[middle] < key) {
      bs(middle + 1, h, key, arr);
    }
  }

  return false;
};
bs(0, array.length - 1, 3, array);
