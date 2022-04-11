const array_rotation = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  let i = 0;
  let j = 0;
  let isRotation = true;
  let firstElementFound = false;
  while (i < arr1.length) {
    if (!firstElementFound) {
      if (arr1[i] == arr2[j]) {
        firstElementFound = true;
        continue;
      } else {
        j++;
        continue;
      }
    }

    if (j > arr2.length-1) {
      j = 0;
      continue;
    }

    if (arr1[i] == arr2[j]) {
      i++;
      j++;
    } else {
      isRotation = false;
      break;
    }
  }
  return isRotation;
};

module.exports = array_rotation;
