let int = 123;
console.log(
  int
    .toString()
    .split("")
    .reverse()
    .join("")
);
let int = 123;
console.log(
  int
    .toString()
    .split("")
    .reverse()
    .join("")
);
let int = 123;
console.log(
  int
    .toString()
    .split("")
    .reverse()
    .join("")
);

const fn = y => {
  console.log(isNaN(y.split("")[0]));
  let x = y;
  x = x.match(/[-]?[+]?[0-9]/g);

  if (x === null || x.length === 0) {
    return 0;
  }

  if (y.split("")[0] !== "-") {
    return y.replace("-", "").trim();
  }
  return x.join("");
};
fn("w-42");
