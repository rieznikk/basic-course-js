'use strict';

let leader = {
    askQuetion(question) {
        let variation = '';
        for (let key in question.variables) {
            variation += `${key}: ${question.variables[key]}\n`;
        }
        let answer = prompt(`${question.text}, варианты ответа:\n${variation}`);
        return answer === question.correctAnswerIndex;
    }
};