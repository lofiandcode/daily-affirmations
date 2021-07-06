// Returns a valid random index number based on the length of the array
const randIndex = arrLength => {
    return Math.floor(Math.random() * arrLength);
}

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
const introduction = (proddings) => {
    const prodding = proddings[randIndex(proddings.length)];

    console.log("\nHi, I'm Stuart Smalley and I'm going to be leading you in some Daily Affirmations.\n");
    console.log("Now look in the mirror.");
    console.log(`Come on, ${prodding}. Only you can help you.`);
    printMirror();
}

//Prints the random daily affirmation
const dailyAffirmations = (adjectives1, adjectives2, verbs) => {
    const adjective1 = adjectives1[randIndex(adjectives1.length)];
    const adjective2 = adjectives2[randIndex(adjectives2.length)];
    const verb = verbs[randIndex(verbs.length)];

    console.log("That's it. Now repeat after me.\n");
    console.log(`\"I'm ${adjective1} enough,`);
    console.log(` I'm ${adjective2} enough,`);
    console.log(` And doggone it, people ${verb} me!\"\n`);
}

//Creates arrays of proddings, adjectives, and verbs
//Runs the program by calling introduction(proddings) and dailyAffirmations(positiveAdjectives1, positiveAdjectives2, verbs)
const main = () => {
    const proddings = ["don't look at me", 'believe in the process', "don't fight it", 'trust me'];
    const positiveAdjectives1 = ['adaptable', 'affectionate', 'amiable', 'brave', 'considerate', 'courteous', 'empathetic', 'frank', 'good', 'impartial', 'inventive', 'persistent', 'practical', 'reliable', 'sensible', 'sincere', 'sympathetic', 'witty'];
    const positiveAdjectives2 = ['adventurous', 'ambitious', 'chatty', 'compassionate', 'courageous', 'diligent', 'exuberant', 'funny', 'generous', 'gregarious', 'intuitive', 'passionate', 'philosophical', 'rational', 'resourceful', 'smart', 'unassuming'];
    const verbs = ['admire', 'adore', 'idolize', 'like', 'revere', 'worship'];

    introduction(proddings);
    dailyAffirmations(positiveAdjectives1, positiveAdjectives2, verbs);
}

main();
