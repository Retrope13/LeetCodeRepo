/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
       let romanDict = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    9: "IX",
    8: "VIII",
    7: "VII",
    6: "VI",
    5: "V",
    4: "IV",
    3: "III",
    2: "II",
    1: "I",
   } 

   let finalStr = "";
   let numStr = num.toString()
   let numLen = numStr.length;
   if (numLen == 1) {
    return romanDict[numStr[0]];
   }
   //I might be able to put the if statements inside of a for loop, then remove the first num each iteration. That would probably make it more legible
   for (let i = 0; i < numLen; i++) {
    let currNum = Number(numStr[0]);
    if (numStr.length == 4) {
        finalStr = finalStr + romanDict[1000].repeat(currNum);
    } else if (numStr.length == 3) {
        if (currNum * 100 == 900) {
            finalStr += "CM";
        } else if (currNum * 100 == 400) {
            finalStr += "CD";
        }  else if (currNum * 100 >= 500) {
            finalStr = finalStr + romanDict[500];
            finalStr = finalStr + romanDict[100].repeat(currNum - 5);
        }  else {
            finalStr = finalStr + romanDict[100].repeat(currNum);
        }
    } else if (numStr.length == 2) {
        if (currNum * 10 == 90) {
            finalStr += "XC";
        } else if (currNum * 10 == 40) {
            finalStr += "XL";
        } else if (currNum * 10 >= 50) {
            finalStr = finalStr + romanDict[50];
            finalStr = finalStr + romanDict[10].repeat(currNum - 5);
        } 
        else {
            finalStr = finalStr + romanDict[10].repeat(currNum);
        }
    } else {
        if (currNum == 9) {
            finalStr += "IX";
        } else if (currNum == 4) {
            finalStr += "IV";
        } else if (currNum >= 5) {
            finalStr = finalStr + romanDict[5];
            finalStr = finalStr + romanDict[1].repeat(currNum - 5);
        } else {
            finalStr = finalStr + romanDict[1].repeat(currNum);
        }
    }
    numStr = numStr.substring(1, numStr.length);
   }
   return finalStr
};