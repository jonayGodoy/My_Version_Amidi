'use strict';

function ManagerQuiz(ListQuestion) {

    let listQuestion = ListQuestion;
    let currentQuestion = randomQuestion();


    this.getCurrentQuestion = function(){
        return currentQuestion;
    };

    this.getListQuestion = function(){
        return listQuestion;
    };


     this.isCorrectQuestion = function(question,answer) {
        let result = question.respuesta == answer;

         if(result){
             changeQuestion();
         }

         return result;
    };

    function randomQuestion() {
        let index = Math.floor(Math.random() * (listQuestion.length - 0) + 0);
        return listQuestion[index];
    }

    function changeQuestion() {
        deleteCurrentQuestionToList();
        currentQuestion = randomQuestion();
    }

    function deleteCurrentQuestionToList(){
        let position = listQuestion.indexOf(currentQuestion);
        listQuestion.splice(position,1);
    }

}
module.exports = ManagerQuiz;