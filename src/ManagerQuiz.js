'use strict';

function ManagerQuiz(ListQuestion, numberForWin) {

    const NUMBER_FOR_WIN = numberForWin;

    let listQuestion = ListQuestion;
    let currentQuestion = randomQuestion();

    constructor();
    function constructor() {
        if(NUMBER_FOR_WIN == undefined)throw "You have introduce numberForWin in the constructor";
        if(!Number.isInteger(NUMBER_FOR_WIN))throw "You numberForWin have type Integer";
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