'use strict';

var should = require('chai').should();
var expect = require('chai').expect;

let ManagerQuiz = require('../src/ManagerQuiz');

describe('ManagerQuiz Should', () => {

        let listJson;

        beforeEach(function () {
                 listJson = {"preguntas": [
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

        });


        it('has list Questions in Json with format Question', function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas);

                let question = managerQuiz.getListQuestion()[0];

                question.pregunta.should.be.a('string');
                Array.isArray(question.respuestas).should.equal(true);
                question.respuesta.should.be.a('string');
        });


        it("Current question is random", function () {
                let managerQuiz1 =  new ManagerQuiz(listJson.preguntas);

              expect(managerQuiz1.getCurrentQuestion()).not.to.be.undefined;
        });

        it("Answer is correct", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas);

                let question = managerQuiz.getListQuestion()[0];

                managerQuiz.isCorrectQuestion(question,question.respuestas[0]).should.equal(true);
        });

        it("Answer is not correct", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas);

                let question = managerQuiz.getListQuestion()[0];
                let answerFail = returnAnswerIncorrect(question);


                managerQuiz.isCorrectQuestion(question,answerFail).should.equal(false);
        });

        it("Fail and not change question", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas);

                let question = managerQuiz.getCurrentQuestion();
                let answerFail = returnAnswerIncorrect(question);
                managerQuiz.isCorrectQuestion(question,answerFail);

                question.should.equal(managerQuiz.getCurrentQuestion());

        });

        it("Change question and delete the last", function () {
                let managerQuiz =  new ManagerQuiz(listJson.preguntas);

                let question = managerQuiz.getCurrentQuestion();
                managerQuiz.updateQuestions(question);

                question.should.not.equal(managerQuiz.getCurrentQuestion());
                (managerQuiz.getListQuestion().indexOf(question)).should.equal(-1);
        });

        function returnAnswerIncorrect(question) {
                return (question.respuesta != question.respuestas[0]) ?
                    question.respuestas[0] : question.respuestas[1];
        }

});