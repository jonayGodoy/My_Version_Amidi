'use strict';

let ManagerDom = require('../src/ManagerDom');

function ManagerGame(managerQuiz, managerDom) {

    this.startGame = () => {
        managerDom.start();

        let question = managerQuiz.getCurrentQuestion();
        managerDom.renderQuestion(question);
    };
}
module.exports = ManagerGame;