const answers = {
    fallback: [
        'I know, right? Can you tell me about {{extraInfo}}?',
        '{{name}}... can you tell me about {{extraInfo}}?',
        "It's like {{extraInfo}}, right? :D",
        "That's true...",
    ],
    fallback_question: [
        "I don't know anything about that, I'm afraid {{name}}",
        'I have no idea, dude.',
        'No idea. But tell me about {{extraInfo}}!',
        "I think it's like {{extraInfo}}...",
    ],
    fallback_with_image: [
        'I know, haha. Here is an image of ',
        'No idea... look at this ',
        'If you say so. Please have a ',
        'I think you can use some ',
    ],
};

export default answers;
