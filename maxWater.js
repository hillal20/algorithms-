var maxArea = function(arr) {
  let n = arr.length;
  let lines = [];
  let ln = 0;
  let maxln = 0;
  let maxlenCor;
  let wt = 0;
  for (let i = 0; i < n; i++) {
    lines.push({ startPoint: [i, 0], endPoint: [i, arr[i]] });
  }
  console.log(lines);

  lines.forEach(e => {
    len = Math.sqrt(
      Math.pow(e.endPoint[0] - e.startPoint[0], 2) +
        Math.pow(e.endPoint[1] - e.startPoint[1], 2)
    );
    console.log(len);
    if (maxln < len) {
      maxln = len;
      maxlenCor = [maxln, e];
    }
  });

  console.log(maxlenCor);
};
maxArea([6, 3, 5, 7, 8, 9, 4, 3, 2]);
