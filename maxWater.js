var maxArea = function(arr) {
  let n = arr.length;
  let lines = [];
  for (let i = 0; i < n; i++) {
    lines.push({ startPoint: [i, 0], endPoint: [i, arr[i]] });
  }
  console.log(lines);
  // a(y=max, x = 0 ) b (y=0 , x )
};
maxArea([6, 3, 5, 7, 8, 9, 4, 3, 2]);
