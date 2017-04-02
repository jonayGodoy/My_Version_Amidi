'use strict';

let expect = require('chai').expect;
let assert = require('chai').assert;
let sinon = require('sinon');


let ManagerQuiz = require('../src/ManagerQuiz');
let ManagerDOM = require('../src/ManagerDom');
let ManagerFile = require('../src/ManagerFile');
let ManagerGame = require('../src/ManagerGame');


describe("ManagerGame Should", function () {
    let managerQuiz;
    let managerDomMockSinon;
    let managerDomMock;
    let managerGame;

    beforeEach(function () {
        managerDomMock = new ManagerDOM();
        managerDomMockSinon = sinon.mock(managerDomMock);

        let managerFileStub = new ManagerFile();
        managerFileStub.loadJson = sinon.stub().returns(
            {"preguntas": [
                {
                    "id": 1,
                    "pregunta" : "¿Cuál ha sido el alimento básico de los canarios obtenido de distintos cereales?",
                    "respuestas" : [
                        "El gofio", "El pan", "Las tortas"
                    ],
                    "respuesta" : "El gofio"
                }, {
                    "id": 23,
                    "pregunta" : "¿De que material estaba hecha la empleita?",
                    "respuestas" : [
                        "De madera", "De soga de pitera", "De hoja de palma"
                    ],
                    "respuesta" : "De hoja de palma"
                },
                {
                    "id": 24,
                    "pregunta" : "¿Con qué tipo de ganado está relacionado la producción de lana y leche?",
                    "respuestas" : [
                        "Ovino", "Vacuno", "Porcino"
                    ],
                    "respuesta" : "Ovino"
                },
                {
                    "id": 25,
                    "pregunta" : "¿En qué época del año se realizaban las apañadas?",
                    "respuestas" : [
                        "En primavera", "En otoño", "En invierno"
                    ],
                    "respuesta" : "En primavera"
                },
                {
                    "id": 26,
                    "pregunta" : "¿Con qué se hacía el pastor las sogas?",
                    "respuestas" : [
                        "Con hilo de pita", "Con enredaderas", "Con hojas de palmera"
                    ],
                    "respuesta" : "Con hilo de pita"
                },
                {
                    "id": 27,
                    "pregunta" : "¿Qué tipo de cabaña ganadera ha sido tradicionalmente más numerosa en las islas?",
                    "respuestas" : [
                        "Bovina", "Ovina", "Caprina"
                    ],
                    "respuesta" : "Caprina"
                },
                {
                    "id": 28,
                    "pregunta" : "¿Cuál es el instrumento musical más utilizado por el pastor?",
                    "respuestas" : [
                        "Guitarra", "Flauta", "Bandurria"
                    ],
                    "respuesta" : "Flauta"
                },
                {
                    "id": 29,
                    "pregunta" : "¿La cabaña ovina está compuesta por?",
                    "respuestas" : [
                        "Cabras", "Vacas", "Cabras y ovejas","Ovejas"
                    ],
                    "respuesta" : "Ovejas"
                }
            ]
            }
        );

        let listJson = managerFileStub.loadJson();
        managerQuiz = new ManagerQuiz(listJson.preguntas);

        managerGame = new ManagerGame(managerQuiz,managerDomMock);
    });

    it('Game Start', function () {
        managerDomMockSinon.expects("start").once();
        managerDomMockSinon.expects("renderQuestion").once();

        managerGame.startGame();

        managerDomMockSinon.verify();
    });

    it("Player answer fail", function () {
        let question = managerQuiz.getCurrentQuestion();
        let failAnswer = returnAnswerFail(question);
        managerDomMockSinon.expects("renderQuestionAnswered").once();
        managerDomMockSinon.expects("toggleButtonNext").once();

        managerDomMockSinon.expects("printVictory").never();

        managerGame.updateAnswer(failAnswer);

        managerDomMockSinon.verify();
    });

    it("Player answer fail and repeat question", function () {
        let question = managerQuiz.getCurrentQuestion();
        let failAnswer = (question.respuesta != question.respuesta[0]) ? question.respuesta[0] : question.respuesta[1];
        managerDomMockSinon.expects("renderQuestionAnswered").once();
        managerDomMockSinon.expects("toggleButtonNext").once();

        managerGame.updateAnswer(failAnswer);

        assert.deepEqual(question, managerQuiz.getCurrentQuestion());
    });

    it("Player win, player success 5 answer and printVictory", function () {
        let numberForWin = 5;

        let managerGame = new ManagerGame(managerQuiz,managerDomMock);
        managerDomMockSinon.expects("renderQuestionAnswered").exactly(numberForWin);
        managerDomMockSinon.expects("toggleButtonNext").exactly((numberForWin*2)-1);
        managerDomMockSinon.expects("renderQuestion").exactly(numberForWin-1);

        managerDomMockSinon.expects("printVictory").once();

        for(let i = 0; i < numberForWin;i++){
            let question = managerQuiz.getCurrentQuestion();
            managerGame.updateAnswer(question.respuesta);
            managerGame.nextQuestion();
        }

        managerDomMockSinon.verify();
    });

    function returnAnswerFail(question) {
        return (question.respuesta != question.respuesta[0]) ? question.respuesta[0] : question.respuesta[1];
    }
});