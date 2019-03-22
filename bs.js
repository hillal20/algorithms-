const array = [1, 6];
const bs = (l, h, key, arr) => {
  arr.sort();
  console.log(arr.length);
  console.log(key);
  console.log(l);
  console.log(h);

  const middle = Math.floor((l + h) / 2);

  if (arr.length === 1) {
    if (arr[0] === key) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log(" ===>length > 1");

    if (arr[middle] === key) {
      return true;
    }

    if (arr[middle] > key) {
      bs(l, middle - 1, key, arr);
    }
    //  else if ( arr[middle] < key ){
    //      bs(middle +1 , h , key , arr)
    // }
  }

  return false;
};
bs(0, array.length - 1, 3, array);
s;
