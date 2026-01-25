var networkDelayTime = function(times, n, k) {
    // Build adjacency list
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    // Distance array
    const dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;

    // Min Heap: [distance, node]
    const minHeap = [[0, k]];

    while (minHeap.length > 0) {
        // Extract min
        minHeap.sort((a, b) => a[0] - b[0]); // acceptable since n ≤ 100
        const [time, node] = minHeap.shift();

        // Skip outdated entries
        if (time > dist[node]) continue;

        for (let [next, weight] of graph[node]) {
            const newTime = time + weight;
            if (newTime < dist[next]) {
                dist[next] = newTime;
                minHeap.push([newTime, next]);
            }
        }
    }

    // Find the maximum distance
    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1;
        maxTime = Math.max(maxTime, dist[i]);
    }

    return maxTime;
};
