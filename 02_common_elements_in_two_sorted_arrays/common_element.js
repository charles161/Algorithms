function common_element(arr1, arr2) {
    let hash = {},
        elements = [];
    arr1.forEach(e => {
        if (!hash.hasOwnProperty(e)) {
            hash[e] = 1;
        }
    });
    arr2.forEach(e => {
        if (hash.hasOwnProperty(e)) {
            elements.push(e);
        }
    });
    return elements;
}

console.log(common_element([1, 2, 3], [2, 3]));
