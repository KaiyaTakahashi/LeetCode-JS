var isSymmetric = function(root) {
    var arr = [];
    var level = 1;
    arr.push(root);
    while (arr.length != 0) {
        var count = 0
        while (level > count) {
            let node = arr.pop();
            arr.push(node.right);
            arr.push(node.left);
            count += 1;
        }
        level *= 2;
        var len = arr.length;
        while (arr.length / 2 < len) {
            if (arr[len].val != arr[arr.length - len].val) {
                return false;
            }
            len -= 1;
        }
    }
    return true;
};