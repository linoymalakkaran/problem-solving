class Node {
  constructor(value, node) {
    this.value = value;
    this.Node = node;
  }
}

const nthFromLast = (numberOfElemets, numToFind) => {
  if (!numberOfElemets) {
    return null;
  }
  let head = null;
  let current = null;
  for (let i = 1; i <= numberOfElemets; i++) {
    current = new Node(i, current);
  }
  head = current;
  const itemPosition = nthNodePosition(head, numToFind);
  //   console.log(head);
  return itemPosition;
};

const nthFromLastReverse = (numberOfElemets, numToFind) => {
  if (!numberOfElemets) {
    return null;
  }
  let head = null;
  let current = null;
  for (let i = numberOfElemets; i > 0; i--) {
    current = new Node(i, current);
  }
  head = current;
  //   console.log(head);
  const itemPosition = nthNodePosition(head, numToFind);
  return itemPosition;
};

function nthNodePosition(head, numToFind) {
  let nodePosition = null;
  let isItemFound = false;

  while (head.Node != null) {
    if (isItemFound) {
      nodePosition++;
      head = head.Node;
      continue;
    }
    if (head.Node.value == numToFind) {
      isItemFound = true;
      nodePosition = 1;
    }
    head = head.Node;
  }
  return nodePosition;
}

module.exports = { nthFromLastReverse, nthFromLast };
