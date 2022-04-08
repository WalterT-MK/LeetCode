/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
//     if(t.length > s.length) return "";
//     let mapt = new Map();
//     for (let i = 0; i < t.length; i++) {
//         mapt.set(t[i], mapt.get(t[i]) + 1 || 1);
//     }
//     let count = mapt.size;
//     let min = '',
//         l = 0,
//         r = -1;
//     while (r <= s.length) {
//         console.log(count)
//         if (count === 0) {
//             let current = s[l];
//             if (mapt.get(current)) mapt.set(current, mapt.get(current) + 1);
//             if (mapt.get(current) > 0) count++;
            
//             let temp = s.substring(l,r+1);
//             if(min.length < temp.length) min = temp;
//             l++;
//         } else {
//             r++;
//             let current = s[r];
            
//             if (mapt.get(current)) mapt.set(current, mapt.get(current) - 1);
//             if (mapt.get(current) === 0) count--;
//         }
//     }
//     return min;
    
    let min = "", left = 0, right = -1;
    let map = {};
    t.split('').forEach(element => {
        if (map[element]==null) map[element] = 1;
        else map[element] = map[element] + 1;
    });
    let count = Object.keys(map).length;

    while (right <= s.length) {
		// found a valid substring
        if (count == 0) {
		
            let current = s[left];
            if (map[current] != null) map[current]++;
            if (map[current] > 0) count++;    
			
            let temp = s.substring(left, right+1)
            if (min == "") min = temp;
            else min = min.length<temp.length?min:temp;
			
            left++;
        } else {
            right++;
            let current = s[right];
			
            if (map[current] != null) map[current]--;
			
            if (map[current] == 0) count--;
        }
    }
    return min;
};