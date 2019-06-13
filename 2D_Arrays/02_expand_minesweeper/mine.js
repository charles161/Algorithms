function checkaround(cr, cl, lr, lc, arr) {

 for (let i = cr - 1; i <= cr + 1; i++)
  for (let j = cl - 1; j <= cl + 1; j++) {
   if (i >= 0 && i < lr && j >= 0 && j < lc) {
    if (arr[i][j] != -1) arr[i][j]++;
   }
  }

}

function click(arr, nr, nc, i, j) {
 if (arr[i][j] != 0)
  return arr;
 else {
  arr[i][j] = -2;
  for (let k = i - 1; k <= i + 1; k++)
   for (let l = j - 1; l <= j + 1; l++) {
    if (k >= 0 && k < nr && l >= 0 && l < nc) {
     // if (!((k == (i + 1) && l == (j + 1)) || (k == (i - 1) && l == (j - 1)) || (k == (i + 1) && l == (j - 1)) || (k == (i - 1) && l == (j + 1))))  // this is for not expanding diagonally
     click(arr, nr, nc, k, l)
    }
   }
  return arr;
 }
}

function mine_sweeper(bombs, nr, nc) {
 let arr = new Array(nr), i, j;
 console.log(bombs)
 for (i = 0; i < nr; i++) {
  arr[i] = []
 }
 for (i = 0; i < nr; i++) {
  for (j = 0; j < nc; j++) {
   arr[i][j] = 0;
  }
 }
 for (i = 0; i < bombs.length; i++) {
  let t = bombs[i];
  arr[t[0]][t[1]] = -1;
  checkaround(t[0], t[1], nr, nc, arr);
 }
 // for (i = 0; i < nr; i++) {
 //  for (j = 0; j < nc; j++) {
 //   if (arr[i][j] != -1)
 //    arr[i][j] = checkaround(i, j, nr, nc, arr);

 //  }
 // }
 return arr;
}

let arr = mine_sweeper([[3, 3], [0, 0]], 4, 4)
console.log(click(arr, 4, 4, 0, 1))

