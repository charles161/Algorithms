function one_away(s1, s2) {
    let p1 = (p2 = 0);
    if (Math.abs(s1.length - s2.length) > 1) return false;
    else {
        let flag = 0,
            count = 0;
        while (p1 < s1.length && p2 < s2.length) {
            if (count > 1) return false;
            if (s1[p1] == s2[p2]) {
                p1++;
                p2++;
                //flag = 0;
            } else {
                // if (flag == 1) {
                //     return false;
                // }
                count++;

                //flag = 1;
                if (s1.length == s2.length) {
                    p1++;
                    p2++;
                } else if (s1.length > s2.length) {
                    p1++;
                } else {
                    p2++;
                }
            }
        }
        if (count <= 1) return true;
        else return false;
    }
}

console.log(one_away("abbdc", "abcdc").toString());
