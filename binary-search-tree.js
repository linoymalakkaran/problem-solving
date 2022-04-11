class TreeNode {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

const isBinarySearchTreeOrNot = () => {
  //   let mapping1 = {};
  //   let childrenA = [1, 2];
  //   let childrenB = [3, 4];
  //   let childrenC = [5, 6];
  //   mapping1["0"] = childrenA;
  //   mapping1["1"] = childrenB;
  //   mapping1["2"] = childrenC;

  // let head1 = createTree(mapping1, 0);
  // return isBstHelper(head1, null, null);

  let mapping3 = {};
  let childrenG = [1, 5];
  let childrenH = [0, 2];
  let childrenI = [4, 6];
  mapping3[3] = childrenG;
  mapping3[1] = childrenH;
  mapping3[5] = childrenI;

  let head3 = createTree(mapping3, 3);

  return isBstHelper(head3, null, null);
};

function isBstHelper(node, lowerLim, upperLim) {
  if (lowerLim != null && node.value < lowerLim) return false;
  if (upperLim != null && upperLim < node.value) return false;
  let isLeftBST = true;
  let isRightBST = true;
  if (node.leftChild != null) {
    isLeftBST = isBstHelper(node.leftChild, lowerLim, node.value);
  }
  if (isLeftBST && node.rightChild != null) {
    isRightBST = isBstHelper(node.rightChild, node.value, upperLim);
  }
  return isLeftBST && isRightBST;
}

// function isBinarySearchTree(head, isBinarySearchTree = true) {
//   if (head == null) return false;
//   if (!isBinarySearchTree) return false;
//   if (head.leftChild == null) return true;
//   if (head.rightChild == null) return true;

//   if (head.value > head.leftChild.value) {
//     isBinarySearchTree = false;
//     return false;
//   }
//   if (head.value > head.rightChild.value) {
//     isBinarySearchTree = false;
//     return false;
//   }

//   isBinarySearchTree = isBinarySearchTree(head.leftChild, isBinarySearchTree);
//   isBinarySearchTree = isBinarySearchTree(head.leftChild, isBinarySearchTree);
// }

function createTree(mapping, headValue) {
  let head = new TreeNode(headValue, null, null);
  let nodes = {};
  nodes[headValue] = head;
  for (let key in mapping) {
    let value = mapping[key];
    let leftChild = new TreeNode(value[0], null, null);
    let rightChild = new TreeNode(value[1], null, null);
    nodes[value[0]] = leftChild;
    nodes[value[1]] = rightChild;
  }
  for (let key in mapping) {
    let value = mapping[key];
    nodes[key].leftChild = nodes[value[0]];
    nodes[key].rightChild = nodes[value[1]];
  }
  return head;
}

module.exports = isBinarySearchTreeOrNot;
