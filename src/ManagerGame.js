'use strict';

let ManagerDom = require('../src/ManagerDom');

function ManagerGame(managerQuiz, managerDom, numberForWin) {

    const NUMBER_FOR_WIN = numberForWin;

    let countQuestionsSuccess = 0;

    constructor();
    function constructor() {
        if(NUMBER_FOR_WIN == undefined)throw "You have introduce numberForWin in the constructor";
        if(!Number.isInteger(NUMBER_FOR_WIN))throw "You numberForWin have type Integer";
    };

    this.startGame = () => {
        managerDom.start();

        let question = managerQuiz.getCurrentQuestion();
        managerDom.renderQuestion(question);
    };

    this.updateAnswer = (answer) => {
        let question = managerQuiz.getCurrentQuestion();

        if(managerQuiz.isCorrectQuestion(answer)){
            countQuestionsSuccess += 1;
        }

        managerDom.renderQuestionAnswered(question);
        managerDom.ShowButtonNext();
    };

    this.nextQuestion = function(){
        managerQuiz.updateQuestions();
        let question = managerQuiz.getCurrentQuestion();
        managerDom.renderQuestion(question);
    };

    this.isPlayerWin = function(){
        return (countQuestionsSuccess == NUMBER_FOR_WIN);
    };
}
module.exports = ManagerGame;