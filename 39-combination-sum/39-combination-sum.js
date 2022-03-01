/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if (!candidates) {
        return [];
    }
    if (target === 0) {
        return [[]];
    }
    
    candidates.sort((a,b) => { return a - b});
    
    var paths = [];
    
    var find = (t, p, i) => {
        console.log('considering:', t, p, i);
        
        if (t === 0) {
            paths.push(p);
            return;
        } else if (t < 0) {
            return;
        } else {
            while (i < candidates.length && t - candidates[i] >= 0) {
                find(t - candidates[i], [...p, candidates[i]], i);
                i++;
            }
        }
    }
    find(target, [], 0);
    
    return paths;
};