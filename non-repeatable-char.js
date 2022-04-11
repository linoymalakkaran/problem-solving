const non_repeatable_char = (str) => {
  const characterCountObj = {};
  const nonRepeatableChars = [];
  for (let i = 0; i < str.length; i++) {
    characterCountObj[str[i]] = characterCountObj[str[i]]
      ? characterCountObj[str[i]] + 1
      : 1;
    if (characterCountObj[str[i]] == 1) {
      nonRepeatableChars.push(str[i]);
    } else {
      const index = nonRepeatableChars.indexOf(str[i]);
      if (index !== -1) {
        nonRepeatableChars.splice(index, 1);
      }
    }
  }
  return nonRepeatableChars[0] ? nonRepeatableChars[0] : null;
};

module.exports = non_repeatable_char;