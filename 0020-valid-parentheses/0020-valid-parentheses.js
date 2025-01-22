/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let madeChanges = true;
    s = s.split('');
    
    while(madeChanges) {
        madeChanges = false;
        for(let i = 0; i < s.length - 1; i++) {
            // Only check adjacent characters
            if((s[i] === "(" && s[i+1] === ")") || 
               (s[i] === "[" && s[i+1] === "]") || 
               (s[i] === "{" && s[i+1] === "}")) {
                s.splice(i, 2); // Remove the pair together
                madeChanges = true;
                break;
            }
        }
    }
    return s.length === 0;
};