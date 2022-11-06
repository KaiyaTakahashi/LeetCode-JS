var wordBreak = function(s, wordDict) {
    var pg = new Array(s.length).fill(false);
    var start = 0;
    var end = 1;
    while (end != s.length + 1) {
        if (wordDict.includes(s.substring(start, end))) {
            pg[end - 1] = true;
        } else {
            for (let i = end; i > 0; i--) {
                // console.log(s.substring(i, end))
                // console.log(i)
                if (pg[i - 1] === true) {
                    if (wordDict.includes(s.substring(i, end))) {
                        pg[end - 1] = true;
                    }
                }
            }
        }
        end += 1;
    }
    return pg[pg.length - 1];
};

console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"]));