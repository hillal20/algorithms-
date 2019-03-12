const str = "bili";
let x = "";
let maxLenght = 0;

var longestPalindrome = function(s) {
  let x = "";
  let maxLenght = 0;
  let y = "nothing";

  for (let i = 0; i < s.length; i++) {
    x = s[i];
    for (let j = i + 1; j < s.length; j++) {
      x += s[j];
      if (
        x ===
        x
          .split("")
          .reverse()
          .join("")
      ) {
        if (maxLenght < x.length) {
          maxLenght = x.length;
          x.length === maxLenght ? (y = x) : null;
        }
      }
    }
  }

  return y;
};
longestPalindrome(str);

// let b = "hilal"
// console.log(b.split("").reverse().join('').toString())
