let most_frequent = arr => {
    let hash = [],
        max_count = -1,
        max_item;

    arr.forEach(e => {
        if (!hash[e]) {
            hash[e] = 0;
        }
        hash[e]++;
        if (hash[e] > max_count) {
            max_count = hash[e];
            max_item = e;
        }
    });

    return max_item;
};

console.log(most_frequent([6, 7, 8]));
