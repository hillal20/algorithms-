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
