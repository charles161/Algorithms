function common_elements(arr1, arr2) {
    let p1 = 0,
        p2 = 0,
        e = [];
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] == arr2[p2]) {
            e.push(arr1[p1]);
            p1++;
            p2++;
        } else if (arr1[p1] > arr2[p2]) p2++;
        else p1++;
    }
    return e;
}

console.log(common_elements([1, 2, 4, 5], [2, 4, 6, 7]));
