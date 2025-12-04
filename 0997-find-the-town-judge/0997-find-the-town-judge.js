/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    //Build Graph
    let graph = new Map()
    let inDegree = new Array(n+1).fill(0)
    let outDegree = new Array(n+1).fill(0)
    let judge = -1

    for(let i=0;i<=n;i++){
        graph.set(i,[])
    }
    for(let [v,e] of trust){
        graph.get(v).push(e)
        outDegree[v]+=1
        inDegree[e]+=1
    }
    //graph Ready
    for(let i=0;i<inDegree.length;i++){
        if(inDegree[i] == n-1 && outDegree[i]==0){
            judge = i
        }
    }
    return judge
};