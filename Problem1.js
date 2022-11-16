var visitors = 500;
var businesses = new Array(100).fill(0);
let neighbourhood = 1;

var problem1 = function() {
    let special = [4, 8, 17, 25, 32, 47, 62, 69, 74, 88, 92];
    var i = 0;
    while (i != special.length) {
        if (visitors - 10 > 0) {
            businesses[special[i]] = 10;
            visitors = visitors - 10;
            i += 1;
        } else {
            businesses[i] = visitors;
            visitors = 0;
            i = special.length
        }
    }
    console.log(visitors);
    if (visitors == 0) {
        return businesses;
    }

    let rest = Math.round(visitors / (businesses.length - special.length));
    var extra = visitors - (rest * (businesses.length - special.length));
    for (let j = 0; j < businesses.length; j++) {
        if (businesses[j] == 0) {
            businesses[j] = rest;
            if (extra != 0) {
                if (extra < 0) {
                    businesses[i] = rest - 1;
                    extra += 1;
                } else {
                    businesses[i] = rest + 1;
                    extra -= 1;
                }
            }
        }
    }
    return businesses;
};

function getInput() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    var index = 0;
    rl.question("Enter index: ", function (answer) {
        index = parseInt(answer);
        rl.close();
    });
    return index;
};

var problem2 = function() {
    let index = getInput();
    businesses[index] = 10;
    visitors -= 10;
    let rest = Math.round(visitors / (businesses.length - 1));
    var extra = visitors - (rest * (businesses.length - 1));
    for (let i = 0; i < businesses.length; i++) {
        if (i != index) {
            if (extra != 0) {
                if (extra < 0) {
                    businesses[i] = rest - 1;
                    extra += 1;
                } else {
                    businesses[i] = rest + 1;
                    extra -= 1;
                }
            } else {
                businesses[i] = rest;
            }
        }
    }
    return businesses;
}

console.log(problem2());