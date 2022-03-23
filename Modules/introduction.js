const { randIndex } = require("./randomIndex.js");

// Prints the ASCII art of a mirror
const printMirror = () => {
    const mirror = [
        '',
        '      ------------',
        '    //            \\\\ ',
        '   ||              ||',
        '   ||              ||',
        '   ||              ||',
        '   ||              ||',
        '   ||              ||',
        '   ||              ||',
        '    \\\\            //',
        '      ------------',
        ''
        ];
    mirror.forEach(element => {
        console.log(element);
    })
}

//Prints the introduction to the daily affirmation with a random prodding, and the mirror
//Parameter Types:
//  proddings: Array
module.exports.introduction = function(proddings) {
    const prodding = proddings[randIndex(proddings.length)];

    console.log("\nHi, I'm Stuart Smalley and I'm going to be leading you in some Daily Affirmations.\n");
    console.log("Now look in the mirror.");
    console.log(`Come on, ${prodding}. Only you can help you.`);
    printMirror();
}
