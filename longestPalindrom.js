const str = "billalljsk";
let x = "";
let result = [];
let maxLenght = 0;

var longestPalindrome = function(str) {
  for (let i = 0; i < str.length; i++) {
    x = str[i];
    for (let j = i + 1; j < str.length; j++) {
      x += str[j];
      if (
        x ===
        x
          .split("")
          .reverse()
          .join("")
      ) {
        if (maxLenght < x.length) {
          maxLenght = x.length;
        }
      }
    }
  }

  return maxLenght;
};
longestPalindrome(str);
