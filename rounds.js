// const pro = rounds => {
//   const result = [];
//   let combination;
//   let possibilities = ["r", "s", "z"];

//   const helper = (str, rounds) => {
//     if (rounds === 0) {
//       result.push(str);
//       return;
//     }

//     for (let i = 0; i < possibilities.length; i++) {
//       combination = str + possibilities[i];
//       helper(combination, rounds - 1);
//     }
//   };

//   helper("", rounds);
//   return result;
// };

// console.log(pro(3));

const probabilities = rounds => {
  let input = ["r", "x", "z"];
  let result = [];
  let combination = "";

  const helper = (str, rounds) => {
    if (rounds === 0) {
      result.push(str);
      return;
    }

    for (let i = 0; i < input.length; i++) {
      combination = str + input[i];
      helper(combination, rounds - 1);
    }
  };

  helper("", rounds);
  return result;
};
probabilities(3);

const probabilities = rounds => {
  let input = ["r", "x", "z"];
  let result = [];
  let combination = "";

  const helper = (str, rounds) => {
    if (rounds === 0) {
      result.push(str);
      return;
    }

    for (let i = 0; i < input.length; i++) {
      combination = str + input[i];
      helper(combination, rounds - 1);
    }
  };

  helper("", rounds);
  return result;
};
probabilities(3);
const probabilities = rounds => {
  let input = ["r", "x", "z"];
  let result = [];
  let combination = "";

  const helper = (str, rounds) => {
    if (rounds === 0) {
      result.push(str);
      return;
    }

    for (let i = 0; i < input.length; i++) {
      combination = str + input[i];
      helper(combination, rounds - 1);
    }
  };

  helper("", rounds);
  return result;
};
probabilities(3);

const probabilities = rounds => {
  let input = ["r", "x", "z"];
  let result = [];
  let combination = "";

  const helper = (str, rounds) => {
    if (rounds === 0) {
      result.push(str);
      return;
    }

    for (let i = 0; i < input.length; i++) {
      combination = str + input[i];
      helper(combination, rounds - 1);
    }
  };

  helper("", rounds);
  return result;
};
probabilities(3);
