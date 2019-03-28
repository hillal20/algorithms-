let array = ["a", "b", "c"];

const telefone = string => {
  const result = [];
  let combination;

  const helper = (str, rounds) => {
    if (rounds === 0) {
      return;
    }

    for (let i = 0; i < array.length; i++) {
      combination = str + array[i];
      result.push(combination);
      helper(combination, rounds - 1);
    }
  };
  helper("", 3);

  return result.filter(e => {
    return e.length === 3;
  });
};
telefone(array);
