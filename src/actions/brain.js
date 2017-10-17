export const getAnswer = (input) => {
    input = input.toLowerCase();

    if (input.startsWith('hi') || input.startsWith('hello')) {
        return 'Hello dear.';        
    }

    return 'I did not catch that.';
};