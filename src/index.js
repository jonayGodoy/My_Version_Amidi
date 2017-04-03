'use strict';

let ManagerFile = require('./ManagerFile');
let Game = require('./Game');
let ManagerQuiz = require('./ManagerQuiz');
let ManagerDom = require('./ManagerDom');

initialise();
function initialise(){
    let managerFile = new ManagerFile();
    managerFile.loadJson().then(listQuestionJson => {
        let managerQuiz = new ManagerQuiz(listQuestionJson.preguntas);
        let managerDom = new ManagerDom();
        let game = new Game(managerQuiz,managerDom);

        window.start = game.startGame;
        window.updateAnswer = game.updateAnswer;
        window.nextQuestion = game.nextQuestion;
    });


}

window.resetGame = function(){
    location.reload(true);
};


