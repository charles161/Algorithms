class Node {
 constructor(value, child) {
  this.value = value;
  this.child = child;
 }
}

let Head = null
let Tail = null

function insert(value) {
 if (Tail == null) {
  Head = new Node(value, null);
  Tail = { ...Head }
 }
 else {
  let temp = new Node(value, null);
  temp.child = Head;
  Head = temp;
 }
}

function print() {
 let temp = { ...Head };
 while (temp) {
  console.log(temp.value)
  temp = temp.child
 }
}

function length() {
 let temp = { ...Head };
 let count = 0;
 while (temp) {
  count++
  temp = temp.child
 }
 return count
}

function deleteValue(value) {
 let temp = Head, prev;
 if (temp && temp.value == value) {
  temp = temp.child
  Head = temp;
  return true
 }
 else {

  while (temp && temp.value != value) {
   prev = temp;
   temp = temp.child;
  }
  if (!temp) return false;
  prev.child = temp.child
 }
 return false
}

function printAt(index) {
 let i = 0;
 let temp = Head;
 while (temp && i < index) {
  temp = temp.child
  i++;
 }
 return temp ? temp.value : null
}

function deleteAt(index) {
 if (index == 0) {
  Head = Head.child
  return 1
 }
 else {
  let temp = Head;

  // keeps track of the node before temp in the loop
  let previous = null;

  // used to track how deep into the list you are
  let i = 0;

  // same loops as in `get()`
  while ((temp !== null) && (i < index)) {

   // save the value of temp
   previous = temp;

   // traverse to the child node
   temp = temp.child;

   // increment the count
   i++;
  }

  // if node was found, remove it
  if (temp !== null) {

   // skip over the node to remove
   previous.child = temp.child;

   // return the value that was just removed from the list
   return temp.value;
  }
 }
}

