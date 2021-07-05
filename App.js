const positiveAdjectives1 = ['adaptable', 'affectionate', 'amiable', 'brave', 'considerate', 'courteous', 'empathetic', 'frank', 'good', 'impartial', 'inventive', 'persistent', 'practical', 'reliable', 'sensible', 'sincere', 'sympathetic', 'witty'];
const positiveAdjectives2 = ['adventurous', 'ambitious', 'chatty', 'compassionate', 'courageous', 'diligent', 'exuberant', 'funny', 'generous', 'gregarious', 'intuitive', 'passionate', 'philosophical', 'rational', 'resourceful', 'smart', 'unassuming'];
const verbs = ['admire', 'idolize', 'like', 'worship'];

const randIndex = arrLength => {
    return Math.floor(Math.random() * arrLength);
}

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
const introduction = () => {
    console.log("\nHi, I'm Stuart Smalley and I'm going to be leading you in some Daily Affirmations.\n");
    console.log("Now look in the mirror.");
    console.log("Come on, don't look at me. Only you can help you.");
    printMirror();
}

const dailyAffirmations = () => {
    const adjective1 = positiveAdjectives1[randIndex(positiveAdjectives1.length)];
    const adjective2 = positiveAdjectives2[randIndex(positiveAdjectives2.length)];
    const verb = verbs[randIndex(verbs.length)];

    console.log("That's it. Now repeat after me.\n");
    console.log(`\"I'm ${adjective1} enough,`);
    console.log(` I'm ${adjective2} enough,`);
    console.log(` And doggone it, people ${verb} me!\"\n`);
}

const main = () => {
    introduction();
    dailyAffirmations();
}

main();
