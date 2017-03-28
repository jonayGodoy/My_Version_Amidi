'use strict';


function ManagerQuiz(ListQuestion) {

    let listQuestion = ListQuestion;
    let currentQuestion = randomQuestion();


    this.getCurrentQuestion = function(){
        return currentQuestion;
    }

    this.getListQuestion = function(){
        return listQuestion;
    }


     function randomQuestion() {
        let index = Math.floor(Math.random() * (listQuestion.length - 0) + 0);
        return listQuestion[index];
    }


}
module.exports = ManagerQuiz;