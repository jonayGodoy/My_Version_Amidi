'use strict';

var should = require('chai').should();
var expect = require('chai').expect;

let ManagerQuiz = require('../src/ManagerQuiz');

describe('ManagerQuiz Should', () => {

        let listJson;
        const NUMBER_FOR_WIN_DEFAULT_TEST = 5;

        beforeEach(function () {
                 listJson = {"preguntas": [
                        {
                                "id": 1,
                                "pregunta" : "¿Cuál ha sido el alimento básico de los canarios obtenido de distintos cereales?",
                                "respuestas" : [
                                        "El gofio", "El pan", "Las tortas"
                                ],
                                "respuesta" : "El gofio"
                        },{
                                "id": 29,
                                "pregunta" : "¿La cabaña ovina está compuesta por?",
                                "respuestas" : [
                                        "Cabras", "Vacas", "Cabras y ovejas","Ovejas"
                                ],
                                "respuesta" : "Ovejas"
                        }
                ]
                }

        });


        it('has list Questions in Json with format Question', function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas,NUMBER_FOR_WIN_DEFAULT_TEST);

                let question = managerQuiz.getListQuestion()[0];

                question.pregunta.should.be.a('string');
                Array.isArray(question.respuestas).should.equal(true);
                question.respuesta.should.be.a('string');
        });


        it("Current question is random", function () {
                let managerQuiz1 =  new ManagerQuiz(listJson.preguntas,NUMBER_FOR_WIN_DEFAULT_TEST);

              expect(managerQuiz1.getCurrentQuestion()).not.to.be.undefined;
        });

        it("Answer is correct", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas,NUMBER_FOR_WIN_DEFAULT_TEST);

                let question = managerQuiz.getListQuestion()[0];

                managerQuiz.isCorrectQuestion(question,question.respuestas[0]).should.equal(true);
        });

        it("Answer is not correct", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas,NUMBER_FOR_WIN_DEFAULT_TEST);

                let question = managerQuiz.getListQuestion()[0];
                let answerFail = returnAnswerIncorrect(question);


                managerQuiz.isCorrectQuestion(question,answerFail).should.equal(false);
        });

        it("Fail and not change question", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas,NUMBER_FOR_WIN_DEFAULT_TEST);

                let question = managerQuiz.getCurrentQuestion();
                let answerFail = returnAnswerIncorrect(question);
                managerQuiz.isCorrectQuestion(question,answerFail);


                question.should.equal(managerQuiz.getCurrentQuestion());

        });

        it("Success, and change question and delete the last", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas,NUMBER_FOR_WIN_DEFAULT_TEST);

                let question = managerQuiz.getCurrentQuestion();
                managerQuiz.isCorrectQuestion(question,question.respuesta);

                question.should.not.equal(managerQuiz.getCurrentQuestion());
                (managerQuiz.getListQuestion().indexOf(question)).should.equal(-1);
        });



        it("I not win because my answer is false", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas,NUMBER_FOR_WIN_DEFAULT_TEST);

                let question = managerQuiz.getCurrentQuestion();
                let answerFail = returnAnswerIncorrect(question);

                managerQuiz.isCorrectQuestion(question,answerFail).should.equal(false);
                (managerQuiz.isPlayerWin()).should.equal(false);
        });

        it("if not introduce a parameter questions for win ManagerQuiz Call Exception", function () {
                expect(ManagerQuiz.bind(ManagerQuiz,listJson)).to.throw("You have introduce numberForWin in the constructor");
        });

        it("if not introduce a number questions for win ManagerQuiz Call Exception", function () {
                expect(ManagerQuiz.bind(ManagerQuiz,listJson,"5")).to.throw("You numberForWin have type Integer");
        });



        function returnAnswerIncorrect(question) {
                return (question.respuesta != question.respuestas[0]) ?
                    question.respuestas[0] : question.respuestas[1];
        }

});