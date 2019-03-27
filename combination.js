let string = "alfo";

let arr = string.split("");
console.log(arr);

const pro = arr => {
  const result = [];
  let combination;

  const helper = (str, newArr) => {
    for (let i = 0; i < newArr.length; i++) {
      combination = str + newArr[i];
      result.push(combination);
      helper(combination, newArr.slice(i + 1));
    }
  };

  helper("", arr);
  return result;
};

console.log(pro(arr));

let string = "alfo";

const combination = string => {
  string = string.split("");
  const result = [];
  let combination;

  const helper = (str, string) => {
    for (let i = 0; i < string.length; i++) {
      combination = str + string[i];
      result.push(combination);
      helper(combination, string.slice(i + 1));
    }
  };
  helper("", string);
  return result;
};
combination(string);
