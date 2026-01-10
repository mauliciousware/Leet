var minWindow = function(s, t) {
    let tMap = new Map();
    for (let c of t) {
        tMap.set(c, (tMap.get(c) || 0) + 1);
    }

    let required = tMap.size;
    let matches = 0;
    let minLength = Infinity;
    let start = 0;

    let i = 0, j = 0;

    while (i < s.length) {
        if (tMap.has(s[i])) {
            tMap.set(s[i], tMap.get(s[i]) - 1);
            if (tMap.get(s[i]) === 0) matches++;
        }

        while (matches === required) {
            if (i - j + 1 < minLength) {
                minLength = i - j + 1;
                start = j;
            }

            if (tMap.has(s[j])) {
                tMap.set(s[j], tMap.get(s[j]) + 1);
                if (tMap.get(s[j]) > 0) matches--;
            }
            j++;
        }
        i++;
    }

    return minLength === Infinity ? "" : s.substring(start, start + minLength);
};
