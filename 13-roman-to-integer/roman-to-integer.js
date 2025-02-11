/**
 * @param {string} s
 * @return {number}
 */



var romanToInt = function(s) {

    let romanDict = {

        "I": 1,

        "V": 5, 

        "X": 10,

        "L": 50,

        "C": 100,

        "D": 500,

        "M": 1000

    }

    let converted = [];

    for (let i = 0; i < s.length; i++) {

        if (s[i] == "I" || s[i] == "X" || s[i] == "C") {

            try {

                if (romanDict[s[i+1]] > romanDict[s[i]]) { //^If the next roman numeral has a higher value than the current one we know that it should subtract instead of add
                    converted.push(romanDict[s[i]] * -1);
                    continue;
                }
            } catch {
            }

        }

        converted.push(romanDict[s[i]]);

    }

    const finalSum = converted.reduce((accumulator, currentVal) => {

        return accumulator + currentVal;

    }, 0);

    return finalSum;

    

};