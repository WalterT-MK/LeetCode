/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let timeToFinish = 0;
    let data = [];
    let res = 0;
    for (let i = 0; i < position.length; i++) {
        data.push([position[i], speed[i]]);
    }
    data.sort((a,b) => b[0] - a[0]);
    for (let i = 0; i < data.length; i++) {
        let currTime = (target - data[i][0])/data[i][1];
        if (currTime > timeToFinish) {
            timeToFinish = currTime;
            res += 1;
        }
    }
    return res;
};