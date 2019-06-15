function rotate_out(arr, n) {
 let arr1 = new Array(n), i, j;
 for (i = 0; i < n; i++) {
  arr1[i] = []
 }
 for (i = 0; i < n; i++)
  for (j = 0; j < n; j++) {
   arr1[j][n - i - 1] = arr[i][j]
  }
 return arr1;
}

function rotate_sub(i, j, n) {
 return [j, n - 1 - i];
}

function rotate_in(arr, n) {
 let i, j, k, ci, cj;
 for (i = 0; i < Math.ceil(n / 2); i++)
  for (j = 0; j < Math.floor(n / 2); j++) {
   let tmp = [-1, -1, -1, -1];
   ci = i;
   cj = j;
   for (k = 0; k <= n; k++) {
    tmp[k] = arr[ci][cj];
    [ci, cj] = rotate_sub(ci, cj, n);
   }
   for (k = 0; k <= n; k++) {
    arr[ci][cj] = tmp[(k + 3) % 4];
    [ci, cj] = rotate_sub(ci, cj, n);
   }
  }
 return arr
}
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(rotate_in([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3))
