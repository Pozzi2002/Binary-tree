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

function getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
        curr = curr.left;
    }
    return curr;
}

// This function deletes a given key x from the
// given BST and returns the modified root of the
// BST (if it is modified).
function delNode(root, x) {
    // Base case
    if (root === null) {
        return root;
    }

    // If key to be searched is in a subtree
    if (root.key > x) {
        root.left = delNode(root.left, x);
    } else if (root.key < x) {
        root.right = delNode(root.right, x);
    } else {
        // If root matches with the given key

        // Cases when root has 0 children or 
        // only right child
        if (root.left === null) {
            return null;
        }
        // When root has only left child
        if (root.right === null) {
            return null;
        }
        // When both children are present
        let succ = getSuccessor(root);
       //console.log(succ)
        root.key = succ.key;
        root.right = delNode(root.right, succ.key);
    }
    return root;
}



let root = buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
//root.insert(12)
function testim() {
    if (root.root.left.left.left == null) {
    return root.root.left.left.right
  }
}
testim()
console.log(root.root.left.left)
//console.log(buildTree([1,2,3,4]))