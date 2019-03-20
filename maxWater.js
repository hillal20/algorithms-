var maxArea = function(arr) {
  let n = arr.length;
  let lines = [];
  let ln = 0;
  let ln2 = 0;
  let diff = Math.pow(10);
  let maxln = 0;
  let maxlenCor;
  let wt = 0;
  for (let i = 0; i < n; i++) {
    lines.push({ startPoint: [i, 0], endPoint: [i, arr[i]] });
  }
  console.log(lines);

  for (let i = 0; i < lines.length; i++) {
    len = Math.sqrt(
      Math.pow(lines[i].endPoint[0] - lines[i].startPoint[0], 2) +
        Math.pow(lines[i].endPoint[1] - lines[i].startPoint[1], 2)
    );
    console.log(len);
    if (maxln < len) {
      maxln = len;
      maxlenCor = [maxln, lines[i]];
    }

    for (let j = i + 1; j < lines.length; j++) {
      len2 = Math.sqrt(
        Math.pow(lines[j].endPoint[0] - lines[j].startPoint[0], 2) +
          Math.pow(lines[j].endPoint[1] - lines[j].startPoint[1], 2)
      );
    }
  }

  console.log(maxlenCor);
};
maxArea([6, 3, 5, 7, 8, 9, 4, 3, 2]);
