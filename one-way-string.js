const oneWayString = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    if (arr1.length - arr2.length > 1) {
      return false;
    }
    return getCharObjectCount(arr1, arr2, arr1.length);
  } else {
    if (arr2.length - arr1.length > 1) {
      return false;
    }
    return getCharObjectCount(arr1, arr2, arr2.length);
  }
};

function getCharObjectCount(s1, s2, len) {
  let i = 0;
  let countDiff = 0;
  while (i < len) {
    if (s1[i + countDiff] == s2[i]) {
      i += 1;
    } else {
      countDiff += 1;
    }
    if (countDiff > 1) {
      return false;
    }
  }
  return true;
}

// function getCharObjectCount(arr1, arr2, len) {
//   const charObject = {};
//   for (let i = 0; i < len; i++) {
//     if (arr1[i]) {
//       charObject[arr1[i]] = charObject[arr1[i]] ? charObject[arr1[i]] + 1 : 1;
//     }
//     if (arr2[i]) {
//       charObject[arr2[i]] = charObject[arr2[i]] ? charObject[arr2[i]] + 1 : 1;
//     }
//   }
//   let uniqueCharsCount = 0;
//   for (let key in charObject) {
//     if (charObject[key] % 2 != 0) {
//       arr1 = arr1.replace(key, "");
//       arr2 = arr2.replace(key, "");
//       uniqueCharsCount++;
//     }
//   }

//   return arr1 === arr2 && uniqueCharsCount <= 2;
// }

module.exports = oneWayString;
