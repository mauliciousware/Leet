/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    let result = []
    let desc = new Array(n).fill(-1)
    let low = new Array(n).fill(-1)
    let time = 0
    let graph = new Map()
    for(let i=0;i<n;i++){
        graph.set(i,[])
    }
    for(let [u,v] of connections){
        graph.get(u).push(v)
        graph.get(v).push(u)
    }
    //Graph Build
    function dfs(node,parent){
        desc[node] = time
        low[node] = time
        time++
        for(let neighbour of graph.get(node)){
            if(neighbour == parent) continue
            if(desc[neighbour]==-1){
                //no visited
                dfs(neighbour,node)

                low[node] = Math.min(low[node],low[neighbour])

                if(low[neighbour] > desc[node]){
                    result.push([node,neighbour])
                }
            }
            else{
                //if desc is not -1
                low[node] = Math.min(low[node],desc[neighbour])
            }
        }
    }

    dfs(0,-1)
    return result


};