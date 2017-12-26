import answers from './answers';

const sentencer = require('sentencer');

const getRandomAnswer = (phrase, user, extraInfo) => {
    if (typeof answers[phrase] === "undefined") {
        return "Answer does not exists.";
    }

    let availableAnswers = answers[phrase],
        randomIndex = Math.floor(Math.random() * availableAnswers.length),
        answer = availableAnswers[randomIndex];

    answer = answer.replace("{{name}}", user.name);
    answer = answer.replace("{{age}}", user.age);
    answer = answer.replace("{{extraInfo}}", extraInfo);

    if (answer.includes('{{noun}}')) answer = answer.replace('{{noun}}', sentencer.make("{{ noun }}"));
    if (answer.includes('{{a_noun}}')) answer = answer.replace('{{a_noun}}', sentencer.make("{{ a_noun }}"));
    if (answer.includes('{{adjective}}')) answer = answer.replace('{{adjective}}', sentencer.make("{{ adjective }}"));
    if (answer.includes('{{an_adjective}}')) answer = answer.replace('{{an_adjective}}', sentencer.make("{{ an_adjective }}"));
        
    return answer;
};

const getRandomImage = () => {
    let imageTypes = ["city", "people", "transport", "animals", "food", "nature", "business", "nightlife", "cats", "fashion", "technics"],
        randomIndex = Math.floor(Math.random() * imageTypes.length),
        imageUrl = 'http://lorempixel.com/300/200/' + imageTypes[randomIndex] + '/1';

    return { text: 'Here, an image of ' + imageTypes[randomIndex] + '...', imageUrl: imageUrl };
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

        return { text: getRandomAnswer('math', user, answer) };
    }

    // NAME
    if (input.includes('what') && input.includes('my') &&  input.includes('name')) {
        return { text: getRandomAnswer('whats_my_name', user) };
    }

    if (input.includes('your') && input.includes('name')) {
        return { text: getRandomAnswer('whats_your_name', user) };
    }

    if (input.includes('my name is ') && input.split(' ').length > 3) {
        return { text: getRandomAnswer('hello', user) };
    }

    // AGE
    if ((input.includes('what') && input.includes('my') && input.includes('age')) || (input.includes('how') && input.includes('old') && input.includes('i'))) {
        if (user.age === null) {
            return { text: 'Well, I don\'t know, how old are you?' };
        }

        return { text: getRandomAnswer('whats_my_age', user) };
    }

    if ((input.includes('how old') && input.includes('you')) || (input.includes('what') && input.includes('your') && input.includes('age'))) {
        return { text: getRandomAnswer('whats_your_age', user) };
    }

    if ((input.includes('my') && input.includes('age')) || (input.includes('year') && input.includes('old'))) {
        return { text: getRandomAnswer('my_age_is', user) };
    }

    // GREETINGS
    if (input.startsWith('hi') || input.startsWith('hello')) {
        return { text: getRandomAnswer('hello', user) };     
    }

    if (input.includes('clock') || input.includes('time')) {
        let date = new Date(),
            extraInfo = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        return { text: getRandomAnswer('time', user, extraInfo) };   
    }

    if (input.startsWith('goodbye') || input.startsWith('bye')) {
        return { text: getRandomAnswer('goodbye', user) };
    }

    if (input.startsWith('your') || input.startsWith('your')) {
        return { text: getRandomAnswer('your', user) };
    }

    if (input.startsWith('you are') || input.startsWith('you\'re')) {
        return { text: getRandomAnswer('you_are', user) };
    }

    if (input.startsWith('am i')) {
        return { text: getRandomAnswer('am_i', user) };
    }

    if (input.includes('how are you') || (input.includes('what') && input.includes('up')) || input.includes('zup')) {
        return { text: getRandomAnswer('how_are_you', user) };
    }

    if (input.includes('what') && input.includes('are') && input.includes('you')) {
        return { text: getRandomAnswer('what_are_you', user) };
    }
    
    if (input.includes('yes') || input.includes('yep') || input.includes('correct')) {
        return { text: getRandomAnswer('yes', user) };
    }

    if (input.includes('no') || input.includes('nope')) {
        return { text: getRandomAnswer('no', user) };
    }

    if ((input.includes('thank') && input.includes('you')) || input.includes('thanks')) {
        return { text: getRandomAnswer('thank_you', user) };
    }

    if (input.startsWith('yeay') || input.startsWith('awesome') || input.startsWith(':D') || input.startsWith('omg') || input.startsWith('oh my god')) {
        return { text: getRandomAnswer('exclamations', user) };
    }

    if (isQuestion) {
        return { text: getRandomAnswer('fallback_question', user, sentencer.make("{{ a_noun }}")) };        
    }

    if (Math.random() < 0.1) {
        let randomImage = getRandomImage();
        return { text: randomImage.text, imageUrl: randomImage.imageUrl };               
    }

    return { text: getRandomAnswer('fallback', user, sentencer.make("{{ a_noun }}")) };
};
