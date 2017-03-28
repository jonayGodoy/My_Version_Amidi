'use strict';

function ManagerQuiz(ListQuestion, numberForWin) {

    const NUMBER_FOR_WIN = numberForWin;

    let listQuestion = ListQuestion;
    let currentQuestion = randomQuestion();

    constructor();
    function constructor() {
        if(numberForWin == undefined){
            throw "You has introduce numberForWin in the constructor";
        }

    };

    this.getCurrentQuestion = () => (currentQuestion);

    this.getListQuestion = () =>(listQuestion);


     this.isCorrectQuestion = function(question,answer) {
        let result = question.respuesta == answer;

         if(result) changeQuestion();

         return result;
    };

    this.isPlayerWin = function(){
        return false;
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