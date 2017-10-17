const answers = {
    hello: [
        'Hi there',
        'Hello :)',
        'Gday mate',
    ],
    goodbye: [
        'See you later',
        'Goodbye you...',
        'See ya',
    ]
};

const getRandomAnswer = (phrase) => {
    let availableAnswers = answers[phrase],
        randomIndex = Math.floor(Math.random() * availableAnswers.length);

    return availableAnswers[randomIndex];
};

export const getAnswer = (input) => {
    input = input.toLowerCase();

    var isQuestion = input.includes('?');

    if (input.startsWith('hi') || input.startsWith('hello')) {
        return getRandomAnswer('hello');       
    }

    if (input.startsWith('goodbye') || input.startsWith('bye')) {
        return getRandomAnswer('goodbye');       
    }

    let sentencer = require('sentencer');

    if (isQuestion) {
        return sentencer.make("I don't know anything about {{ noun }}.");
    }

    return sentencer.make("Tell me about {{ noun }}");
};