let most_frequent = arr => {
    let hash = {},
        max_count = -1,
        max_item;

    arr.forEach(e => {
        if (!hash.hasOwnProperty(e)) {
            hash[e] = 0; //logic is different in Java file.. check it out
        }
        hash[e]++;
        if (hash[e] > max_count) {
            max_count = hash[e];
            max_item = e;
        }
    });
    console.log(hash);

    return max_item;
};

console.log(most_frequent([6, 7, 8, 8]));
