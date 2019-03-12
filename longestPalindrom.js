const str = "billalljsk";
let x = "";
let result = [];
let reverse = [];
var longestPalindrome = function(str) {
  for (let i = 0; i < str.length; i++) {
    x += str[i];
    // if( x === x.split('').reverse().join('')){
    //
    //      result.push(x)
    // }
  }

  return result;
};
longestPalindrome(str);

// let b = "hilal"
// console.log(b.split("").reverse().join('').toString())
