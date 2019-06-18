class Tree {
 constructor(value, left, right) {
  this.left = left;
  this.right = right;
  this.value = value
 }
}

let BST = null;

function insert(value) {
 let temp = new Tree(value, null, null);
 let curr = BST;
 if (!BST) {
  BST = temp;
 }
 else {
  while (curr) {
   if (temp.value >= curr.value) {
    if (curr.right == null) {
     curr.right = temp;
     break
    }
    curr = curr.right
   }
   else {
    if (curr.left == null) {
     curr.left = temp;
     break
    }
    curr = curr.left
   }
  }
 }
}


function printSmallestElement() {
 let temp = BST
 while (temp.left) {
  temp = temp.left;
 }
 console.log(temp.value || null);
}
function printLargestElement() {
 let temp = BST
 while (temp.right) {
  temp = temp.right;
 }
 console.log(temp.value || null);
}

function search(value) {
 let temp = BST;
 while (temp) {
  if (temp.value == value) {
   console.log("Element Found", temp)
   break;
  }
  else if (value < temp.value) {
   temp = temp.left
  }
  else {
   temp = temp.right
  }
 }
 if (!temp) {
  console.log("Element not found")
 }
}
count = 10
function print2DUtil(temp, space) {
 // Base case  
 if (temp == null)
  return;

 // Increase distance between levels  

 // Process right child first  
 print2DUtil(temp.left, space);


 console.log(temp.value)

 // Process left child  
 print2DUtil(temp.right, space);
}

let arr = [100, 99, 200, 50, 45, 56, 120, 140, 35]8758

arr.forEach(v => insert(v))