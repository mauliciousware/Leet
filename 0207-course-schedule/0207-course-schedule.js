/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = new Map()
    let inDegree = new Array(numCourses).fill(0)

    for(let i= 0;i<numCourses;i++){
        graph.set(i,[])
    }
    for(let [course,preReq] of prerequisites){
        graph.get(preReq).push(course)
        inDegree[course]+=1
    }
    let queue = []
    let courseComplete = 0

    for(let i =0;i<inDegree.length;i++){
        if(inDegree[i]==0){
            queue.push(i)
        }
    }
    //We have a starting point
    while(queue.length){
        let currentCourse = queue.shift()
        courseComplete+=1
        for(let neighbours of graph.get(currentCourse)){
            //neighbours will iterate over the array
            inDegree[neighbours]--
            if(inDegree[neighbours] ==0){
            queue.push(neighbours)
        }
        }
        
    }
    return courseComplete === numCourses
};