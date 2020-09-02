class Bob {
    hey(str: string) {
        const message = str.trim();
        const question = message.endsWith('?');
        const yelling = message.toUpperCase() === message;
        const empty = message === '';
        const letters = message.match(/[a-z]/i);
        let answer;

        if (empty) answer = 'Fine. Be that way!'
        else if (yelling && question && letters) answer = 'Calm down, I know what I\'m doing!'
        else if (question) answer = 'Sure.'
        else if (yelling && letters) answer = 'Whoa, chill out!'
        else answer = 'Whatever.'

        return answer;
    }
}

export default Bob
