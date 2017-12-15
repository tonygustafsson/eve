import answers from './answers';

const getRandomAnswer = (phrase, user, extraInfo) => {
    let availableAnswers = answers[phrase],
        randomIndex = Math.floor(Math.random() * availableAnswers.length),
        answer = availableAnswers[randomIndex];

    answer = answer.replace("{{name}}", user.name);
    answer = answer.replace("{{age}}", user.age);
    answer = answer.replace("{{extraInfo}}", extraInfo);
        
    return answer;
};

const getRandomImage = () => {
    let imageTypes = ["computer", "tree", "waterfall", "boy", "girl", "fire", "love", "dog"],
        randomIndex = Math.floor(Math.random() * imageTypes.length),
        imageUrl = 'http://lorempixel.com/300/200/' + imageTypes[randomIndex];

    return 'I dont know... but here you go, an image of {{imageCategory=' + imageTypes[randomIndex] + '}} {{imageUrl=' + imageUrl + '}}.';
};

export const getAnswer = (input, user) => {
    input = input.toLowerCase().replace("/?!.", "");

    let isQuestion = input.includes('?'),
        isMathProblem = new RegExp('\\d+\\ ?(\\+|\\-|\\*|\\/) ?\\d+').test(input);

    if (isMathProblem) {
        let numbers = input.match(/\d+/g).map(Number),
            mathType = input.match(/(\+|-|\*|\/)/g)[0],
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
            default: {
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

    if ((input.includes('my') && input.includes('age')) || (input.includes('year') && input.includes('old'))) {
        return getRandomAnswer('my_age_is', user);
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

    if ((input.includes('what') && input.includes('my') && input.includes('age')) || (input.includes('how') && input.includes('old'))) {
        return getRandomAnswer('whats_my_age', user);
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

    if (input.includes('how are you') || (input.includes('what') && input.includes('up')) || input.includes('zup')) {
        return getRandomAnswer('how_are_you', user);
    }

    if (input.includes('tell') && input.includes('me') && input.includes('about')) {
        return '';
    }

    let sentencer = require('sentencer');

    if (isQuestion) {
        return getRandomAnswer('fallback_question', user, sentencer.make("{{ a_noun }}"));        
    }

    if (Math.random() < 0.1) {
        return getRandomImage();               
    }
    else {
        return getRandomAnswer('fallback', user, sentencer.make("{{ a_noun }}"));        
    }
};