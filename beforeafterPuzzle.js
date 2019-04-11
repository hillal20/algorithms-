function generate_phrases(phrases) {
  if (phrases.length === 0) {
    return;
  }
  let result = [];
  let element1 = "";
  let element2 = "";

  for (let i = 0; i < phrases.length; i++) {
    if (typeof phrases[i] === "string") {
      element1 = phrases[i].split(" ");
    }

    for (let j = 0; j < phrases.length; j++) {
      if (typeof phrases[j] === "string") {
        element2 = phrases[j].split(" ");
      }

      if (
        element2[element2.length - 1] === element1[0] &&
        element1.length > 1 &&
        element1.length > 1
      ) {
        result.push([...element2, ...element1.slice(1)].join(" "));
      }
    }
  }

  return result;
}
generate_phrases(
  (input = [
    [],
    "mission statement",
    "a quick bite to eat",
    "a chip off the old block",
    "chocolate bar",
    "mission impossible",
    "a man on a mission",
    "block party",
    "eat my words",
    "bar of soap"
  ])
);
