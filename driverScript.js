const { Tree, buildTree } = require ("./binaryTree")

function randomArray() {
  let random = Math.round(Math.random() * 100)
  let total = []
    for (i = 0; i < random; i++) {
      let random2 = Math.round(Math.random() * 100)
      total.push(random2)
   }
   return total
}

                           /*Create random Array( < 100 numbers) With random numbers*/

//let arr = randomArray()
                                      /*Create out tree and print It*/

//let root = buildTree(arr)
                              /*Confirm that the tree is balanced by calling isBalanced*/

//root.isBalanced()
                             /*Print out all elements in level, pre, post, and in order.*/

//console.log(root.levelOrderSimple())
//console.log(root.PreOrder())
//console.log(root.PostOrder())
//console.log(root.InOrder())
                                    /*Unbalance the tree by adding several numbers > 100.*/
//root.insert(101)
//root.insert(102)
//root.insert(103)
                                     /*Confirm that the tree is unbalanced by calling isBalanced.*/
//root.isBalanced()
                                             /*Balance the tree by calling rebalance.*/
//root.rebalance();
                                       /*Confirm that the tree is balanced by calling isBalanced.*/
//root.isBalanced()
                                       /*Print out all elements in level, pre, post, and in order.*/
//console.log(root.levelOrderSimple())
//console.log(root.PreOrder())
//console.log(root.PostOrder())
//console.log(root.InOrder())


