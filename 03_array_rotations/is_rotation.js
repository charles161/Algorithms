function is_rotation(a1, a2) {
    if (a1.length != a2.length) {
        return false;
    } else {
        let key_item = a1[0],
            key = -1,
            len = a1.length;
        for (i = 0; i < len; i++) {
            if (key_item == a2[i]) {
                key = i;
                break;
            }
        }
        if (key == -1) {
            return false;
        }
        for (i = 0; i < len; i++) {
            j = (key + i) % len;
            if (a1[i] != a2[j]) {
                return false;
            }
        }
        return true;
    }
}

console.log(is_rotation([6, 7, 1, 2, 3, 5], [1, 2, 3, 5, 6, 7]).toString());
