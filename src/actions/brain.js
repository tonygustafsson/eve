export const getAnswer = (input) => {
    input = input.toLowerCase();

    if (input.startsWith('hi') || input.startsWith('hello')) {
        return 'Hello dear.';        
    }

    let sentencer = require('sentencer');
    return sentencer.make("Tell me about {{ noun }}");
};