'use strict';

let ManagerFile = require('./ManagerFile');
let ManagerGame = require('./ManagerGame');
let ManagerQuiz = require('./ManagerQuiz');
let ManagerDom = require('./ManagerDom');

initialise();
function initialise(){
    let managerFile = new ManagerFile();
    let listJson = managerFile.loadJson();
    let managerQuiz = new ManagerQuiz(listJson.preguntas);
    let managerDom = new ManagerDom();
    let managerGame = new ManagerGame(managerQuiz,managerDom);

    window.start = managerGame.startGame;
    window.updateAnswer = managerGame.updateAnswer;
    window.nextQuestion = managerGame.nextQuestion;
}

window.resetGame = function(){
    location.reload(true);
};


