/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    var canEatAll = (speed) => {
        let time = 0;
        for (let p of piles) {
            time += Math.ceil(p/speed);
        }
        return time <= h;
    }
    let l = 1,
        r = Math.max(...piles);
    while (l < r) {
        let mid = Math.floor((l+r) / 2);
        if (!canEatAll(mid)) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
};