var minWindow = function(s, t) {
    let tMap = new Map();
    let matches = 0;

    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }
    //T map is ready above

    let i = 0;
    let j = 0;
    let miniLength = Infinity;
    let startingIndex = 0;

    while (i < s.length) {
        if (tMap.has(s[i])) {
            tMap.set(s[i], tMap.get(s[i]) - 1);

            if (tMap.get(s[i]) === 0) {
                matches++;
            }
        }
        //i will move ahead when dont have all matches
        while (matches === tMap.size) {
            if (i - j + 1 < miniLength) {
                miniLength = i - j + 1;
                startingIndex = j;
            }

            if (tMap.has(s[j])) {
                tMap.set(s[j], tMap.get(s[j]) + 1);
                if (tMap.get(s[j]) > 0) {
                    matches--;
                }
            }
            j++;
        }
        i++;
    }

    return miniLength === Infinity
        ? ""
        : s.substring(startingIndex, startingIndex + miniLength);
};
