function checkaround(cr, cl, lr, lc, arr) {
 let count = 0;
 for (let i = cr - 1; i <= cr + 1; i++)
  for (let j = cl - 1; j <= cl + 1; j++) {
   if (i >= 0 && i < lr && j >= 0 && j < lc) {
    if (arr[i][j] == -1) count++;
   }
  }


 //old code
 // if ((cr - 1) >= 0) {
 //  if (arr[cr - 1][cl] == -1) count++;
 // }
 // if ((cl - 1) >= 0) {
 //  if (arr[cr][cl - 1] == -1) count++;
 // }
 // if ((cr + 1) < lr) {
 //  if (arr[cr + 1][cl] == -1) count++;
 // }
 // if ((cl + 1) < lc) {
 //  if (arr[cr][cl + 1] == -1) count++;
 // }
 // if ((cr + 1) < lr && (cl + 1) < lc)
 //  if (arr[cr + 1][cl + 1] == -1) count++;
 // if ((cr - 1) >= 0 && (cl - 1) >= 0)
 //  if (arr[cr - 1][cl - 1] == -1) count++;
 // if ((cr + 1) < lr && (cl - 1) >= 0)
 //  if (arr[cr + 1][cl - 1] == -1) count++;
 // if ((cr - 1) >= 0 && (cl + 1) < lc)
 //  if (arr[cr - 1][cl + 1] == -1) count++;


 return count;
}

function mine_sweeper(bombs, nr, nc) {
 let arr = new Array(nr), i, j;
 console.log(bombs)
 for (i = 0; i < nr; i++) {

  arr[i] = []

 }
 for (i = 0; i < bombs.length; i++) {
  let t = bombs[i];
  arr[t[0]][t[1]] = -1;
 }
 for (i = 0; i < nr; i++) {
  for (j = 0; j < nc; j++) {
   if (arr[i][j] != -1)
    arr[i][j] = checkaround(i, j, nr, nc, arr);

  }
 }

 return arr;
}

console.log(mine_sweeper([[0, 0], [0, 1]], 3, 4))

