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

});