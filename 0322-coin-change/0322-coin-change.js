var coinChange = function(coins, amount) {
    let memoize = new Map()

    function dfs(idx, amount) {
        if (amount === 0) return 0
        if (amount < 0) return Infinity
        if (idx >= coins.length) return Infinity

        let key = `${idx}-${amount}`

        if (memoize.has(key)) {
            return memoize.get(key)
        }

        // TAKE
        let take = 1 + dfs(idx, amount - coins[idx])

        // NOT TAKE
        let skip = dfs(idx + 1, amount)

        let minCoins = Math.min(take, skip)

        memoize.set(key, minCoins)

        return minCoins
    }

    let res = dfs(0, amount)

    return res === Infinity ? -1 : res
}