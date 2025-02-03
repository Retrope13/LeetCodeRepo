/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const xArr = [...x.toString()]
    let coef = 1;
    if (xArr[0] == "-") {
        xArr.shift()
        coef = -1;
    }
    if (Number(xArr.reverse().toString().replaceAll(",", "")) >= Math.pow(2, 31) - 1 ) return 0;
    return Number(xArr.toString().replaceAll(",", "")) * coef;
};