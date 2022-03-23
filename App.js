const { introduction } = require("./Modules/introduction.js");
const { dailyAffirmations } = require("./Modules/dailyAffirmations.js");

//Creates arrays of proddings, adjectives, and verbs
//Displays mirror using ASCII art and prints a random Daily Affirmation
const app = () => {
    const proddings = ["don't look at me", 'believe in the process', "don't fight it", 'trust me'];
    const positiveAdjectives1 = ['adaptable', 'affectionate', 'amiable', 'brave', 'considerate', 'courteous', 'empathetic', 'frank', 'good', 'impartial', 'inventive', 'persistent', 'practical', 'reliable', 'sensible', 'sincere', 'sympathetic', 'witty'];
    const positiveAdjectives2 = ['adventurous', 'ambitious', 'chatty', 'compassionate', 'courageous', 'diligent', 'exuberant', 'funny', 'generous', 'gregarious', 'intuitive', 'passionate', 'philosophical', 'rational', 'resourceful', 'smart', 'unassuming'];
    const verbs = ['admire', 'adore', 'idolize', 'like', 'revere', 'worship'];

    introduction(proddings);
    dailyAffirmations(positiveAdjectives1, positiveAdjectives2, verbs);
}

app();
