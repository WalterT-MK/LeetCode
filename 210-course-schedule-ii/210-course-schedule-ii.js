/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let map = new Map();
    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }
    for (let [course, prereq] of prerequisites) {
        map.get(course).push(prereq);
    }
    
    let visit = new Set();
    let cycle = new Set();
    let res = [];
    
    const dfs = (course) => {
        if (cycle.has(course)) return false;
        if (visit.has(course)) return true;
        
        cycle.add(course);
        visit.add(course);
        for (let req of map.get(course)) {
            if (!dfs(req)) return false;
        }
        
        cycle.delete(course);
        
        res.push(course);
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }
    return res;
};