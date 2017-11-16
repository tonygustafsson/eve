const answers = {
    hello: [
        'Hi there {{name}}',
        'Hello :)',
        'Gday mate',
    ],
    goodbye: [
        'See you later {{name}}',
        'Goodbye you...',
        'See ya',
    ],
    whats_my_name: [
        'Your name is {{name}}',
        '{{name}} of course',
        'Say my name, {{name}}!',
    ],
};

const getRandomAnswer = (phrase, user) => {
    let availableAnswers = answers[phrase],
        randomIndex = Math.floor(Math.random() * availableAnswers.length),
        answer = availableAnswers[randomIndex];

    answer = answer.replace("{{name}}", user.name);

    return answer;
};

export const getAnswer = (input, user) => {
    input = input.toLowerCase().replace("/?!.", "");

    let isQuestion = input.includes('?');
        ///isMathProblem = input.match(new RegExp('\d+\ ?(\+|\-|\*|\/)\ ?\d+)/g')); // Not working yet

    if (input.includes('my name is ')) {
        debugger;
        return getRandomAnswer('hello', user);
    }

    if (input.startsWith('hi') || input.startsWith('hello')) {
        return getRandomAnswer('hello', user);       
    }

    if (input.startsWith('goodbye') || input.startsWith('bye')) {
        return getRandomAnswer('goodbye', user);       
    }

    if (input.includes('what') && input.includes('name')) {
        return getRandomAnswer('whats_my_name', user);
    }

    let sentencer = require('sentencer');

    if (isQuestion) {
        return sentencer.make("I don't know anything about {{ noun }}.");
    }

    return sentencer.make("Tell me about {{ noun }}");
};