/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = new Map()
    let count = 0
    let inDegree = new Array(numCourses).fill(0)
    //Build Graph
    for(let i = 0;i<numCourses;i++){
        graph.set(i,[])
    }
    for(let [course,preReq] of prerequisites){
        graph.get(preReq).push(course)
    }
    //map ready pre -> course
    for(let i =0;i<numCourses;i++){
        for(let j of graph.get(i)){
            inDegree[j]++ 
        }
    }
    let queue = []
    for(let i =0;i<inDegree.length;i++){
        if(inDegree[i]==0) queue.push(i)
    }
    while(queue.length){
        let current = queue.shift()
        count++
        console.log(graph.get(current),"current in queue")
        for(let neighbours of graph.get(current)){
                inDegree[neighbours]--
                if(inDegree[neighbours] ==0) queue.push(neighbours)
    }
}
return count === numCourses
};