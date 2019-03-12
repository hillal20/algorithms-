//The string "PAYPALISHIRING" is written in a zigzag pattern
var convert = (s, numRows) => {
  let sArr = s.split("");
  let result = "";
  console.log(sArr);
  for (let j = 0; j < numRows; j++) {
    for (let i = j; i < sArr.length; j % 2 === 0 ? (i = i + 4) : (i = i + 2)) {
      result += sArr[i];
    }
  }

  // for(let i = 0; i < sArr.length; i = i+4){
  //    result += (sArr[i]);
  // }
  // for(let i = 1; i < sArr.length; i = i+2){
  //    result+= (sArr[i]);
  // }
  //  for(let i = 2; i < sArr.length; i = i+4){
  //    result += (sArr[i])
  // }

  return result;
};
