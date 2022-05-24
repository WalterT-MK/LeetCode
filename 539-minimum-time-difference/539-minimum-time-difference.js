/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    timePoints.sort();
    let arry = [];
    for (let time of timePoints) {
        let [hour, min] = time.split(':');
        arry.push(Number(hour) * 60 + Number(min));
    }
    arry.push(arry[0] + 24 * 60);
    let res = Infinity;
    let diff;
    for (let i = 1; i < arry.length; i++) {
        diff = arry[i] - arry[i - 1];
        if (res > diff) res = diff; 
    }
    return res;
    
};