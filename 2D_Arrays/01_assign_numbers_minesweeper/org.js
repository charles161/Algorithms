function checkaround(cr, cl, lr, lc, arr) {

 for (let i = cr - 1; i <= cr + 1; i++)
  for (let j = cl - 1; j <= cl + 1; j++) {
   if (i >= 0 && i < lr && j >= 0 && j < lc) {
    if (arr[i][j] != -1) arr[i][j]++;
   }
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

console.log(mine_sweeper([[0, 0], [0, 1]], 3, 4))

