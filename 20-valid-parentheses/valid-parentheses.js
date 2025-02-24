/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let array = [...s];
    let runningArr = [];
    let opens = ["(", "[", "{"];
    for (let i = 0; i < array.length; i++) {
        let currentVal = array[i];
        if (currentVal === "(" || currentVal == "[" || currentVal == "{") {
            runningArr.push(currentVal);
        } else {
            if (currentVal == ")" && runningArr[runningArr.length - 1] == "(") {
                runningArr.pop();
            }
            else if (currentVal == "]" && runningArr[runningArr.length - 1] == "[") {
                runningArr.pop();
            }
            else if (currentVal == "}" && runningArr[runningArr.length - 1] == "{"){
                runningArr.pop();
            } else {
                return false;
            }
        }

    }
    if (runningArr.length == 0) {
        return true;
    } else {
        return false;
    }
};