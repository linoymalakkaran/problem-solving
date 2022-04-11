const mostFrequentItem = (arr) => {
  if (arr.length === 0) return null;
  let mostFrequentNum = null;
  let maxVal = 0;
  const occurance = {};
  for (var i = 0; i < arr.length; i++) {
    occurance[arr[i]] = occurance[arr[i]] ? occurance[arr[i]] + 1 : 1;
    if (occurance[arr[i]] > maxVal) {
        mostFrequentNum = arr[i];
        maxVal = occurance[arr[i]];
      }
  }
  return mostFrequentNum;
};

module.exports = mostFrequentItem;
