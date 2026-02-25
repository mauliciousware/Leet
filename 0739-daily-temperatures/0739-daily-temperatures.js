var dailyTemperatures = function(temperatures) {
    let stack = [[temperatures[0], 0]]
    let ans = new Array(temperatures.length).fill(0)
    let i = 1

    while(i < temperatures.length){

        let current = [temperatures[i], i]
        while(stack.length && current[0] > stack[stack.length - 1][0]){
            let top = stack.pop()
            ans[top[1]] = current[1] - top[1]
        }

        stack.push(current)
        i++
    }
    return ans
};