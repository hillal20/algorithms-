/**Given a string, find the length of the longest substring
 * without repeating characters. */

var lengthOfLongestSubstring = function(s) {
  let arr = "";
  let newarr = [];
  let x = 0;
  for (let i = 0; i < s.length; i++) {
    arr += s[i];

    for (j = i + 1; j < s.length; j++) {
      if (arr.split("").indexOf(s[j]) < 0) {
        arr += s[j];
      }
      newarr.push(arr);
    }
    arr = "";
  }

  newarr.forEach(e => {
    if (e.length > x) {
      x = e.length;
    }
  });
  return x;
};
console.log(lengthOfLongestSubstring("abcbghjkl"));
