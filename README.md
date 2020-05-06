# print-bst
Binary Search Tree Implementation with Print Tree Functionality

**Usage**
```js

const BinarySearchTree = require('print-bst');

let bst = new BinarySearchTree();
bst.insert(30); // insert one element
bst.insert(21);
bst.insert(42);
console.log(bst.print()); // will print tree

//   _30   
//  /   \  
// 21    42

bst.bulkInsert([30,21,42,14,25,34,12,54,32,28]); // insert array of elements at a time
console.log(bst.print()); // will print tree

//         _______30______      
//        /               \     
//      _21               _42   
//     /   \             /   \  
//   _14    25         _34    54
//  /         \       /         
// 12          28    32         

bst.remove(42); // remove element
bst.remove(21); // remove element
console.log(bst.print()); // will print tree

//         ____30______   
//        /            \  
//      _25            _54
//     /   \          /   
//   _14    28      _34   
//  /              /      
// 12             32     

bst.search(28); // returns true
bst.search(18); // returns false

```