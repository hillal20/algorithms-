var maxArea = function(arr) {
  let n = arr.length;
  let lines = [];
  let ln = 0;
  let ln2 = 0;
  let minln = 0;
  let diff = Math.pow(10);
  let maxln = 0;
  let maxlenCor;
  let maxWtCor;
  let wt = 0;
  let maxWt = 0;
  for (let i = 0; i < n; i++) {
    lines.push({ startPoint: [i, 0], endPoint: [i, arr[i]] });
  }
  //console.log(lines);

  for (let i = 0; i < lines.length; i++) {
    len = Math.sqrt(
      Math.pow(lines[i].endPoint[0] - lines[i].startPoint[0], 2) +
        Math.pow(lines[i].endPoint[1] - lines[i].startPoint[1], 2)
    );
    // console.log(len);
    if (maxln < len) {
      maxln = len;
      maxlenCor = [maxln, lines[i]];
    }

    for (let j = i + 1; j < lines.length; j++) {
      len2 = Math.sqrt(
        Math.pow(lines[j].endPoint[0] - lines[j].startPoint[0], 2) +
          Math.pow(lines[j].endPoint[1] - lines[j].startPoint[1], 2)
      );
      minln = Math.min(len, len2);
      //  console.log('minln ===> ', minln)
      wt = minln * (lines[j].startPoint[0] - lines[i].startPoint[0]);
      //console.log("wt ==> ", wt);
      if (maxWt < wt) {
        maxWt = wt;
        maxWtCor = [maxWt, lines[i], lines[j]];
      }
    }
  }

  // console.log(maxlenCor);
  // console.log("maxWt", maxWt);
  // console.log("maxWt", maxWtCor);
  return maxWt;
};
maxArea([1, 3, 5, 7, 8, 9, 4, 3, 2]);
