const { randIndex } = require("./randomIndex.js");

//Prints the random daily affirmation
//Parameter Types:
//  adjectives1: Array
//  adjectives2: Array
//  verbs: Array
module.exports.dailyAffirmations = function(adjectives1, adjectives2, verbs) {
    const adjective1 = adjectives1[randIndex(adjectives1.length)];
    const adjective2 = adjectives2[randIndex(adjectives2.length)];
    const verb = verbs[randIndex(verbs.length)];

    console.log("That's it. Now repeat after me.\n");
    console.log(`\"I'm ${adjective1} enough,`);
    console.log(` I'm ${adjective2} enough,`);
    console.log(` And doggone it, people ${verb} me!\"\n`);
}
