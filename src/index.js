'use strict';

let ManagerFile = require('./ManagerFile');
let Game = require('./Game');
let ManagerQuiz = require('./ManagerQuiz');
let ManagerDom = require('./ManagerDom');

initialise();
function initialise(){
    let managerFile = new ManagerFile();
    let listJson = managerFile.loadJson();
    let managerQuiz = new ManagerQuiz(listJson.preguntas);
    let managerDom = new ManagerDom();
    let game = new Game(managerQuiz,managerDom);

    window.start = game.startGame;
    window.updateAnswer = game.updateAnswer;
    window.nextQuestion = game.nextQuestion;
}

window.resetGame = function(){
    location.reload(true);
};


