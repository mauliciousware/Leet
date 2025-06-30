var findMedianSortedArrays = function(x, y) {
    if (x.length > y.length) {
        return findMedianSortedArrays(y, x);
    }

    const n1 = x.length;
    const n2 = y.length;
    let left = 0, right = n1;

    while (left <= right) {
        const partX = Math.floor((left + right) / 2);
        const partY = Math.floor((n1 + n2 ) / 2) - partX;

        const L1 = partX === 0 ? -Infinity : x[partX - 1];
        const R1 = partX === n1 ? Infinity : x[partX];
        const L2 = partY === 0 ? -Infinity : y[partY - 1];
        const R2 = partY === n2 ? Infinity : y[partY];

        if (L1 <= R2 && L2 <= R1) {
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
            } else {
                return Math.min(R1, R2);
            }
        } else if (L1 > R2) {
            right = partX - 1;
        } else {
            left = partX + 1;
        }
    }
};
