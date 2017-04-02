'use strict';

module.exports = function ManagerGame(managerQuiz, managerDom, numberForWin) {

    const NUMBER_FOR_WIN = numberForWin;

    let countQuestionsSuccess = 0;

    constructor();
    function constructor() {
        if(NUMBER_FOR_WIN == undefined)
            throw "You have introduce numberForWin in the constructor";
        if(!Number.isInteger(NUMBER_FOR_WIN))
            throw "You numberForWin have type Integer";
    }

    this.startGame = () => {
        managerDom.start();

        let question = managerQuiz.getCurrentQuestion();
        managerDom.renderQuestion(question);
    };

    this.updateAnswer = (answer) => {
        let isCorrect = managerQuiz.isCorrectQuestion(answer)
        if(isCorrect){
            countQuestionsSuccess = countQuestionsSuccess +1;
            managerQuiz.updateQuestions();
        }

        managerDom.renderQuestionAnswered(answer,isCorrect);
        managerDom.toggleButtonNext();
    };

    this.nextQuestion = function(){
        if(isPlayerWin()){
            managerDom.printVictory();
        }else{
            let question = managerQuiz.getCurrentQuestion();
            managerDom.renderQuestion(question);
            managerDom.toggleButtonNext();
        }

    };

    function isPlayerWin(){
        return (countQuestionsSuccess === NUMBER_FOR_WIN);
    };

};
