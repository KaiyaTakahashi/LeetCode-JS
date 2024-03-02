var Trie = function() {
    this.children = {};
    this.endOfWord = false;
};

Trie.prototype.insert = function(word) {
    var cur = this;
    for(let c of word) {
        if(cur.children[c] == null) cur.children[c] = new Trie();
        cur = cur.children[c];
    }
    cur.endOfWord = true;
};

Trie.prototype.search = function(word) {
    var node = this;
    for(let c of word) {
        if(node.children[c] == null) {
            return false; 
        } else {
            node = node.children[c];
        }
    }
    return node.endOfWord;
};

Trie.prototype.startwith = function(prefix) {
    var node = this;
    for(let c of prefix) {
        if(node.children[c] == null) {
            return false;
        }
        node = node.children[c];
    }
    return true;
};

var a = new Trie();
//["Trie","insert","search","search","startsWith","insert","search"]
//[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
console.log(a.insert("apple"));
console.log(a.search("apple"));
console.log(a.search("app"));
console.log(a.startwith("app"));
console.log(a.insert("app"));
console.log(a.search("app"));