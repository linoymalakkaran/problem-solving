// const common_elements = (arr1, arr2) => {
//   if (arr1.length === 0 || arr2.length === 0) {
//     return [];
//   }
//   const common_elements = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         common_elements.push(arr1[i]);
//         break;
//       }
//     }
//   }
//   return common_elements;
// };

const common_elements = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }
  const common_elements = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length) {
    if (arr1[i] === arr2[j]) {
      common_elements.push(arr1[i]);
      i++;
      j++;
    } else {
      if (j < arr2.length) {
        j++;
      } else {
        j = 0;
        i++;
      }
    }
  }

  return common_elements;
};

module.exports = common_elements;
