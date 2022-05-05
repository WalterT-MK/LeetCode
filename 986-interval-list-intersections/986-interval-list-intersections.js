/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let pointer1 = 0;
    let pointer2 = 0;
    let res = [];
    while (pointer1 < firstList.length && pointer2 < secondList.length) {
        let maxStart = Math.max(firstList[pointer1][0], secondList[pointer2][0]);
        let minEnd = Math.min(firstList[pointer1][1], secondList[pointer2][1]);
        if (maxStart <= minEnd) res.push([maxStart, minEnd]);
        if (firstList[pointer1][1] < secondList[pointer2][1]) pointer1 += 1;
        else pointer2 += 1;
    }
    return res;
};