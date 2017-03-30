'use strict';

let should = require('chai').should();
let expect = require('chai').expect;
let assert = require('chai').assert;
let sinon = require('sinon');



let ManagerQuiz = require('../src/ManagerQuiz');
let ManagerDOM = require('../src/ManagerDom');
let ManagerFile = require('../src/ManagerFile');
let ManagerGame = require('../src/ManagerGame');

describe("ManagerGame Should", function () {

    const NUMBER_FOR_WIN_DEFAULT_TEST = 5;

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

        let listQuestion = managerFileStub.loadJson();
        managerQuiz = new ManagerQuiz(listQuestion.preguntas);

        managerGame = new ManagerGame(managerQuiz,managerDomMock,NUMBER_FOR_WIN_DEFAULT_TEST);
    });

    it('Game Start', function () {
        managerDomMockSinon.expects("start").once();
        managerDomMockSinon.expects("renderQuestion").once();

        managerGame.startGame();

        managerDomMockSinon.verify();
    });

    it("Player answer fail", function () {
        let question = managerQuiz.getCurrentQuestion();
        let failAnswer = (question.respuesta != question.respuesta[0]) ? question.respuesta[0] : question.respuesta[1];
        managerDomMockSinon.expects("renderQuestionAnswered").once();
        managerDomMockSinon.expects("ShowButtonNext").once();


        managerGame.updateAnswer(failAnswer);
        expect(managerGame.isPlayerWin()).to.be.false;

        managerDomMockSinon.verify();
    });

    xit("Player win, player success 5 answer", function () {
        let numberForWin = NUMBER_FOR_WIN_DEFAULT_TEST

        let managerQuiz =  new ManagerQuiz(listJson.preguntas,numberForWin);

        for(let i = 0; i < numberForWin;i++){
            let question = managerQuiz.getCurrentQuestion();
            managerQuiz.isCorrectQuestion(question,question.respuesta);
        }


        (managerQuiz.isPlayerWin()).should.equal(true);
    });


    it("if not introduce a parameter questions for win ManagerQuiz Call Exception", function () {
        expect(ManagerGame.bind(managerGame,managerQuiz,managerDomMock)).to.throw("You have introduce numberForWin in the constructor");
    });

    it("if not introduce a number questions for win ManagerQuiz Call Exception", function () {
        expect(ManagerGame.bind(managerGame,managerQuiz,managerDomMock,"5")).to.throw("You numberForWin have type Integer");
    });


});