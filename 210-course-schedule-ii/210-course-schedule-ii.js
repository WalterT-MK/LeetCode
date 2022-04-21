/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let ans = [];
    let map = new Map();
    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }
    for (let [course, prereq] of prerequisites) {
        map.get(course).push(prereq);
    }
    
    let cycle = new Set();
    let visit = new Set();
    const dfs = (course) => {
        if (cycle.has(course)) return false;
        if (visit.has(course)) return true;
        
        cycle.add(course);
        for (let pre of map.get(course)) {
            if (!dfs(pre)) return false;
        }
        cycle.delete(course);
        visit.add(course);
        ans.push(course);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }
    return ans;
};