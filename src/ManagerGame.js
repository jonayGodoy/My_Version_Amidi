'use strict';

module.exports = function ManagerGame(managerQuiz, managerDom) {

    const NUMBER_FOR_WIN = 5;

    let countQuestionsSuccess = 0;

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
