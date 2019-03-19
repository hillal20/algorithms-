const reg1 = /[^cbak]/g; // match everything except the letters a,b,c,d and k
const reg2 = /[a-z]/g; // match any character from a to z
const reg3 = /[a-z]/gi; // g means global, i case insensitive ( M or m )
const reg4 = /[0-9]+/g; // + means 1 or more times
const reg5 = /[0-9]{11}/g; // {11} repeated 11 times
const reg6 = /[a-z]{6,11}/g; // words of 6 letters till words of 11 letters
const reg6 = /[a-z]{6,}/g; // words of 6 letters till infinity
