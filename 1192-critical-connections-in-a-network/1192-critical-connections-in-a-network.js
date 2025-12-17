var criticalConnections = function (n, connections) {
    const adjList = Array.from({ length: n }, () => []);

    for (const [a, b] of connections) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    const discoveryTime = Array(n).fill(-1);
    const lowLink = Array(n).fill(-1);
    const bridges = [];

    let timestamp = 0;

    function dfs(currentNode, parentNode) {

       discoveryTime[currentNode] = timestamp;
       lowLink[currentNode] = timestamp;
       timestamp++;

        for (const neighbor of adjList[currentNode]) {
            if (neighbor === parentNode) continue;

            // Tree edge
            if (discoveryTime[neighbor] === -1) {
                dfs(neighbor, currentNode);

                lowLink[currentNode] = Math.min(lowLink[currentNode], lowLink[neighbor]);

                // Bridge condition
                if (lowLink[neighbor] > discoveryTime[currentNode]) {
                    bridges.push([currentNode, neighbor]);
                }
            }
            // Back edge
            else {
                lowLink[currentNode] = Math.min(
                    lowLink[currentNode],
                    discoveryTime[neighbor]
                );
            }
        }
    }

    dfs(0, -1);
    return bridges;
};
