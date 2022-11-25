class Node {
    constructor(letter, index) {
        this.letter = letter;
        this.index = index;
    }
}

// var minWindow = function(s, t) {
//     var monoQueue = [];
//     var ans = Number.MAX_SAFE_INTEGER;
//     var ansArr = [];
//     for (let i = 0; i < s.length; i ++) {
//         if (t.includes(s[i])) {
//             var sameIndex = -1;
//             for (let k = 0; k < monoQueue.length; k++) {
//                 if (monoQueue[k].letter == s[i]) {
//                     isSame = k;
//                 }
//             }
//             if (sameIndex == -1) {
//             monoQueue.push(new Node(s[i], i));
//             if (monoQueue.length == t.length) {
//                 if (ans > monoQueue[monoQueue.length - 1].index - monoQueue[0].index) {
//                     ans = monoQueue[monoQueue.length - 1].index - monoQueue[0].index;
//                     ansArr = monoQueue;
//                 }
//             } else if (monoQueue.length > t.length) {
//                 var duplicate = 0;
//                 for (let j = monoQueue.length - 1; j > -1; j--) {
//                     if (monoQueue[j].letter == s[i]) {
//                         duplicate = j;
//                     }
//                 }
//                 monoQueue.splice(duplicate, 1);
//                 if (ans > monoQueue[monoQueue.length - 1].index - monoQueue[0].index) {
//                     ans = monoQueue[monoQueue.length - 1].index - monoQueue[0].index;
//                     ansArr = monoQueue;
//                 }
//             }
//             } else {
//                 monoQueue.splice(sameIndex, 1);
//             }
//         }
//     }
//     if (ansArr.length == 0) return "";
//     console.log(ansArr)
//     return s.substring(ansArr[0].index, ansArr[ansArr.length - 1].index + 1);
// };

// var minWindow = function(s, t) {
//     var monoQueue = [];
//     var ans = Number.MAX_SAFE_INTEGER;
//     var ansArr = [];
//     for (let i = 0; i < s.length; i ++) {
//         if (t.includes(s[i])) {
//             var sameIndex = -1;
//             for (let a = 0; a < monoQueue.length; a++) {
//                 if (monoQueue[a].letter == s[i]) {
//                     sameIndex = a;
//                 }
//             }
//             if (sameIndex != -1) {
//                 monoQueue.splice(sameIndex, 1);
//             }
//             monoQueue.push(new Node(s[i], i));
//             if (monoQueue.length == t.length) {
//                 if (ans > monoQueue[monoQueue.length - 1].index - monoQueue[0].index) {
//                     ans = monoQueue[monoQueue.length - 1].index - monoQueue[0].index;
//                     ansArr = monoQueue;
//                 }
//             }
//         }
//     }
//     if (ansArr.length == 0) return "";
//     return s.substring(ansArr[0].index, ansArr[ansArr.length - 1].index + 1);
// };

// var minWindow = function(s, t) {
//     var monoQueue = [];
//     var ans = Number.MAX_SAFE_INTEGER;
//     var ansArr = [];
//     var dict = {};
//     var currentDic = {};
//     var count = 0;
//     for (let i = 0; i < t.length; i++) {
//         if (dict[t[i]] == undefined) {
//             dict[t[i]] = 1;
//             currentDic[t[i]] = 0;
//         } else {
//             dict[t[i]] += 1;
//         }
//     }
//     for (let i = 0; i < s.length; i ++) {
//         if (t.includes(s[i])) {
//             if (currentDic[s[i]] == dict[s[i]]) {
//                 var lastIndex = monoQueue.length - 1;
//                 for (let j = monoQueue.length - 1; j > -1; j--) {
//                     if (monoQueue[j][0] == s[i]) {
//                         lastIndex = j;
//                     }
//                 }
//                 monoQueue.splice(lastIndex, 1);
//             } else {
//                 currentDic[s[i]] += 1;
//                 count += 1;
//             }
//             monoQueue.push([s[i], i]);
//             if (count == t.length) {
//                 if (ans > monoQueue[monoQueue.length - 1][1] - monoQueue[0][1]) {
//                     ans = monoQueue[monoQueue.length - 1][1] - monoQueue[0][1];
//                     ansArr = []
//                     for (let k = 0; k < monoQueue.length; k++) {
//                         ansArr.push(monoQueue[k])
//                     }
//                 }
//             }
//         }
//     }
//     if (ansArr.length == 0) return "";
//     return s.substring(ansArr[0][1], ansArr[ansArr.length - 1][1] + 1);
// };

var minWindow = function(s, t) {
    if (t == "") {
        return "";
    }
    var countT = {};
    var window = {};
    for (let i = 0; i < t.length; i++) {
        if (countT[t[i]] == undefined) {
            countT[t[i]] = 1;
        } else {
            countT[t[i]] += 1;
        }
    }
    var have = 0;
    var need = Object.keys(countT).length;
    var res = [-1, -1];
    var resLen = Number.MAX_SAFE_INTEGER;
    var l = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (window[c] == undefined) {
            window[c] = 1;
        } else {
            window[c] += 1;
        }
        if (countT[c] != undefined && window[c] == countT[c])  {
            have += 1;
        }
        while (have == need) {
            if (i - l + 1 < resLen) {
                res = [i, l]
                resLen = i - l + 1
            }
            window[s[l]] -= 1
            if (countT[s[l]] != undefined && window[s[l]] < countT[s[l]])  {
                have -= 1;
            }
            l += 1;
        }
    }
    l = res[0]
    r = res[1]
    if ( resLen != Number.MAX_SAFE_INTEGER) {
        return s.substring(r, l + 1);
    }
    return ""
};

console.log(minWindow( "cabwefgewcwaefgcf",
"cae"));