/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let cars = []

    for(let i=0;i<speed.length;i++){
        let time = ((target-position[i])/speed[i])//hrs its takes to reach destination
        cars[i] = [position[i],time]
    }
    cars.sort((a,b)=>b[0]-a[0])

    let fleet = 0
    let prev = 0
    for(let [pos,time] of cars){
        if(time > prev){
            fleet++
            prev = time
        }
    }
    return fleet

};