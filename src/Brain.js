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
    math: [
        'I think it\'s {{extraInfo}}',
        'Well, {{name}}, It\'s probably {{extraInfo}}.',
        '{{extraInfo}}',
        'It is {{extraInfo}} of course...',
    ],
    time: [
        'The time is {{extraInfo}}, {{name}}',
        '{{extraInfo}}',
        'It\'s precisely {{extraInfo}}',
        'How would I know?',
    ],
    omg: [
        'I know, right?',
        ':o!!',
        'It\'s weird, right?',
        'OMG indeed, {{name}}',
    ],
    your: [
        'Is it? Really?',
        'Do you really think so, {{name}}?',
        'Mine? Noooo? :-o',
        'Really?',
    ],
    you_are: [
        'Am I? I think so too...',
        '{{name}}, {{name}}, {{name}}... You are so wrong!',
        'Me? Noooo?',
        'OK, and you are?',
    ],
    am_i: [
        'Yes. Yes, you are.',
        'Very much so.',
        'You are, yes.',
        'Of course.',
    ],
};

const getRandomAnswer = (phrase, user, extraInfo) => {
    let availableAnswers = answers[phrase],
        randomIndex = Math.floor(Math.random() * availableAnswers.length),
        answer = availableAnswers[randomIndex];

    answer = answer.replace("{{name}}", user.name);
    answer = answer.replace("{{extraInfo}}", extraInfo);
        
    return answer;
};

export const getAnswer = (input, user) => {
    input = input.toLowerCase().replace("/?!.", "");

    let isQuestion = input.includes('?'),
        isMathProblem = new RegExp('\\d+\\ ?(\\+|\\-|\\*|\\/) ?\\d+').test(input);

    if (isMathProblem) {
        let numbers = input.match(/\d+/g).map(Number),
            mathType = input.match(/(\+|\-|\*|\/)/g)[0],
            answer = 0;

        switch (mathType) {
            case '+': {
                answer = numbers[0] + numbers[1];
                break;
            }
            case '-': {
                answer = numbers[0] - numbers[1];
                break;
            }
            case '*': {
                answer = numbers[0] * numbers[1];
                break;
            }
            case '/': {
                answer = numbers[0] / numbers[1];
                break;
            }
        }

        return getRandomAnswer('math', user, answer);
    }

    if (input.includes('my name is ')) {
        return getRandomAnswer('hello', user);
    }

    if (input.startsWith('hi') || input.startsWith('hello')) {
        return getRandomAnswer('hello', user);       
    }

    if (input.includes('clock') || input.includes('time')) {
        let date = new Date(),
            extraInfo = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        return getRandomAnswer('time', user, extraInfo);       
    }

    if (input.startsWith('goodbye') || input.startsWith('bye')) {
        return getRandomAnswer('goodbye', user);       
    }

    if (input.includes('what') && input.includes('name')) {
        return getRandomAnswer('whats_my_name', user);
    }

    if (input.startsWith('omg') || input.startsWith('oh my god')) {
        return getRandomAnswer('omg', user);       
    }

    if (input.startsWith('your') || input.startsWith('your')) {
        return getRandomAnswer('your', user);       
    }

    if (input.startsWith('you are') || input.startsWith('you\'re')) {
        return getRandomAnswer('you_are', user);       
    }

    if (input.startsWith('am i')) {
        return getRandomAnswer('am_i', user);       
    }

    let sentencer = require('sentencer');

    if (isQuestion) {
        return sentencer.make("I don't know anything about {{ noun }}.");
    }

    return sentencer.make("Tell me about {{ noun }}");
};