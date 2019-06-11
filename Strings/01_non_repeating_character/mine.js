function non_repeating(str) {
    let hash = {};
    str.split("").forEach(e => {
        if (hash.hasOwnProperty(e)) {
            hash[e]++;
        } else {
            hash[e] = 1;
        }
    });
    let ar = Object.keys(hash).filter(e => hash[e] == 1);
    return ar.length > 0 ? ar[0] : null;
}

console.log(non_repeating("abaca"));
