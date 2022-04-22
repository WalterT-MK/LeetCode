/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = new Map();
    
    for (let i = 0; i < numCourses; i++) {
        map.set(i,[]);
    }
    for (let [course, prereq] of prerequisites) {
        map.get(course).push(prereq);
    }
    
    let visit = new Set();
    const dfs = (course) => {
        if (visit.has(course)) return false;
        if (map.get(course) === []) return true;
        
        visit.add(course);
        for (let pre of map.get(course)) {
            if (!dfs(pre)) return false;
        }
        visit.delete(course);
        map.set(course,[]);
        
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
};