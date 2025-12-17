/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {

    const graph = Array.from({ length: n }, () => []);
    
    for (const [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u); // undirected graph
    }

    const disc = Array(n).fill(-1); // discovery time
    const low = Array(n).fill(-1);  // lowest reachable time
    const result = [];
    let time = 0;

    function dfs(u, parent) {
        disc[u] = low[u] = time++;

        for (const v of graph[u]) {
            if (v === parent) continue; // we skip the edge to parent

            if (disc[v] === -1) {
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);

                // If the lowest reachable time from v is greater than discovery time of u,
                // then u-v is a bridge
                if (low[v] > disc[u]) {
                    result.push([u, v]);
                }
            } else {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }

    dfs(0, -1);
    return result;
};