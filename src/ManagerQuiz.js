'use strict';

function ManagerQuiz(ListQuestion) {

    let listQuestion = ListQuestion;
    let currentQuestion = randomQuestion();


    this.getCurrentQuestion = () => (currentQuestion);

    this.getListQuestion = () =>(listQuestion);


     this.isCorrectQuestion = function(answer) {
        let result = currentQuestion.respuesta === answer;
         return result;
    };

    this.updateQuestions =  function() {
        deleteCurrentQuestionToList();
        currentQuestion = randomQuestion();
    }

    function randomQuestion() {
        let index = Math.floor(Math.random() * (listQuestion.length - 0) + 0);
        return listQuestion[index];
    }

    function deleteCurrentQuestionToList(){
        let position = listQuestion.indexOf(currentQuestion);
        listQuestion.splice(position,1);
    }

}
module.exports = ManagerQuiz;