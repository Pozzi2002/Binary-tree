const { merge } = require ("./mergeSort.js")
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }
    printTree() {
        prettyPrint(this.root)
    }
    insert(value) {
        insertFunction(this.root, value)
    }
    deleteItem(value) {
        deleteItemFunction(this.root, value)
    }
    find(value) {
       return findFunction(this.root, value)
    }
    levelOrderSimple() {
       return levelOrderSimpleFunction(this.root)
    }
    PreOrder() {
      PreOrderFunction(this.root)
    }
    InOrder() {
      InOrderFunction(this.root)
    }
    PostOrder() {
      PostOrderFunction(this.root)
    }
    height(node) {
     return heightFunction(node)
    }
    depth(node) {
      return depthFunction(node, this.root)
     }
     isBalanced() {
      return isBalancedFunction(this.root);
     }
     rebalance() {
      this.root = rebalanceFunction(this.root) 
     }
}

function buildTree(array) {
   let arr = merge([...new Set(array)]);
   let tree = binaryLogic(arr, 0, arr.length - 1)
   return new Tree(tree)
}

function binaryLogic(arr, start, end) {
  if (start > end) return null;

  let mid = start + Math.floor((end - start) / 2);

  let root = new Node(arr[mid]);

  root.left = binaryLogic(arr, start, mid - 1);
  root.right = binaryLogic(arr, mid + 1, end);

  return root
}

const prettyPrint = (root, prefix = "", isLeft = true) => {
    if (root === null) {
      return;
    }
    if (root.right !== null) {
      prettyPrint(root.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${root.data}`);
    if (root.left !== null) {
      prettyPrint(root.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

function insertFunction(root, data) {
   if (root == null) return new Node(data);
   if (data == root.data) return root;
   
   if (data < root.data) {
    root.left = insertFunction(root.left, data);
   } else if (data > root.data) {
    root.right = insertFunction(root.right, data);
   }

   return root;
}

function deleteItemFunction(root, x) {
    if (root === null) {
        return root;
    }
    if (root.data > x) {
        root.left = deleteItemFunction(root.left, x);
    } else if (root.data < x) {
        root.right = deleteItemFunction(root.right, x);
    } else {

        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }
        let leftRight = deleteItemFunctionPart(root);
        root.data = leftRight.data;
        root.right = deleteItemFunction(root.right, leftRight.data);
    }
    return root;
}

function deleteItemFunctionPart(root) {
    leftRight = root.right;
    while (leftRight !== null && leftRight.left !== null) {
        leftRight = leftRight.left;
    }
    return leftRight;
}

function findFunction(root, data) {
  if (root == null) return root;

  if (data < root.data) {
    root.left = findFunction(root.left, data);
  } else if (data > root.data) {
    root.right = findFunction(root.right, data);
  } else {
    if (data == root.data) {
        value = root
        return value
    }
  }
 return value
}

function levelOrderSimpleFunction(root) {
    if (root == null) return;
    let queque = [];
    let total = ""
    queque.push(root)
    while (queque.length > 0) {
      let test = queque.shift();
      total += test.data + ", "
        if (test.left !== null) {
          queque.push(test.left)
        }
        if (test.right !== null) {
          queque.push(test.right)
        }
    }
    return total.slice(0, -2)
}

function PreOrderFunction(root) {
  if (root == null) return root;
  console.log(root.data)
  if (root.left !== null) PreOrderFunction(root.left);
  if (root.right !== null) PreOrderFunction(root.right);
}

function InOrderFunction(root) {
  if (root == null) return root;
  if (root.left !== null) InOrderFunction(root.left);
  console.log(root.data)
  if (root.right !== null) InOrderFunction(root.right);
}

function PostOrderFunction(root) {
  if (root == null) return root;
  if (root.left !== null) PostOrderFunction(root.left);
  if (root.right !== null) PostOrderFunction(root.right);
  console.log(root.data)
}

function heightFunction(node) {
  if (node == null) return null;
  let left = heightFunction(node.left)
  let right = heightFunction(node.right);

  return Math.max(left, right) + 1
}

  function depthFunction(node, root, total = 0) {
    if (node == null) return null;
    if (node.data == root.data) {
      tot = total
    }
    if (node.data < root.data) {
      total += 1
      depthFunction(node, root.left, total)
    } else if (node.data > root.data) {
      total += 1
      depthFunction(node, root.right, total)
    }
      return tot
  }

function isBalancedFunction(root) {
  let left = heightFunction(root.left);
  let right = heightFunction(root.right);

  if (left == right) console.log(true);
  else console.log(false)
}

function rebalanceFunction(root) {
  let arrText = levelOrderSimpleFunction(root).split(", ");
  let arrNumbers = []
  arrText.forEach(numb => arrNumbers.push(Number(numb)))
  let newRoot = buildTree(arrNumbers);
  return newRoot.root
}

module.exports = { Tree, buildTree }
