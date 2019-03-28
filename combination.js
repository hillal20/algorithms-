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
