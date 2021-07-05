const positiveAdjectives1 = ['adaptable', 'affectionate', 'amiable', 'brave', 'considerate', 'courteous', 'empathetic', 'frank', 'good', 'impartial', 'inventive', 'persistent', 'practical', 'reliable', 'sensible', 'sincere', 'sympathetic', 'witty'];
const positiveAdjectives2 = ['adventurous', 'ambitious', 'chatty', 'compassionate', 'courageous', 'diligent', 'exuberant', 'funny', 'generous', 'gregarious', 'intuitive', 'passionate', 'philosophical', 'rational', 'resourceful', 'smart', 'unassuming'];
const verbs = ['admire', 'idolize', 'like', 'worship'];

const randIndex = arrLength => {
    return Math.floor(Math.random() * arrLength);
}

const Montra = () => {
    const adjective1 = positiveAdjectives1[randIndex(positiveAdjectives1.length)];
    const adjective2 = positiveAdjectives2[randIndex(positiveAdjectives2.length)];
    const verb = verbs[randIndex(verbs.length)];

    console.log(`I'm ${adjective1} enough,`);
    console.log(`I'm ${adjective2} enough,`);
    console.log(`And gosh darn it, people ${verb} me!`);
}

const main = () => {
    
    Montra();
}

main()
