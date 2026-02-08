var minMeetingRooms = function(intervals) {

    const starts = intervals.map(i => i[0]).sort((a,b) => a-b);
    const ends = intervals.map(i => i[1]).sort((a,b) => a-b);

    let rooms = 0;
    let maxRooms = 0;

    let s = 0;
    let e = 0;

    while (s < intervals.length) {

        if (starts[s] < ends[e]) {
            rooms++;
            s++;
        } else {
            rooms--;
            e++;
        }

        maxRooms = Math.max(maxRooms, rooms);
    }

    return maxRooms;
};
