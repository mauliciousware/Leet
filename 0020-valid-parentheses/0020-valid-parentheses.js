/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    function check(open,close){
        if(open == "{" && close =="}" || open=="[" && close =="]" || open =="("&&close==")"){
            return true
        }
        else{
            return false
        }
    }
    for(let i=0;i<s.length;i++){
        
        if(s[i]=='{' || s[i]=="[" || s[i]=="(") stack.push(s[i])
        // closing bracket
        else {
            if (stack.length === 0) return false;

            let open = stack.pop();
            let close = s[i];

            if (!check(open, close)) return false;
        }
    }

    return stack.length==0
};