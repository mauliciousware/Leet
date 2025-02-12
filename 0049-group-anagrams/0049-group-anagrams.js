var groupAnagrams = function(strs) {
    const hashMap = new Map();
    const result = [];

    for (let i = 0; i < strs.length; i++) { // Index-based loop for strs
        const count = new Array(26).fill(0); // Initialize a count array for 26 letters
        const str = strs[i];

        for (let j = 0; j < str.length; j++) { // Index-based loop for characters
            const charCode = str.charCodeAt(j) - 'a'.charCodeAt(0); // Calculate character index
            count[charCode]++; // Increment the count for the character
        }

        const key = count.join('#'); // Convert the count array to a string key
        if (hashMap.has(key)) {
            hashMap.get(key).push(str); // Add the original string to the corresponding group
        } else {
            hashMap.set(key, [str]); // Create a new group for the key with the current string
        }
    }

    for (let key of hashMap.keys()) {
        result.push(hashMap.get(key)); // Push each group into the result array
    }

    return result;
};