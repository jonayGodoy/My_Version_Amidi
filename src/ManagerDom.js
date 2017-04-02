'use strict';

module.exports = function ManagerDom() {

    const idLoad = "amidi";
    const idApp = "app";

    const idQuestion = "preguntas"

        this.start = () => {
            let divLoad = document.getElementById(idLoad);
            let divApp = document.getElementById(idApp);

            divLoad.classList.add('hidden');
            divApp.classList.remove('hidden');

            document.body.style.backgroundColor = '#57CCD8';
        };

        this.renderQuestion = (question) => {
            let divQuestion = document.getElementById(idQuestion);

            let answerHtml = "<h1 class='center'>"+question.pregunta+"</h1>";
            for(let nAnswer in question.respuestas){
                answerHtml = answerHtml +
                    "<div class='pregunta' id='"+question.id+"'>"
                    +question.respuestas[nAnswer]+"</div>";
            }
            divQuestion.innerHTML = answerHtml;
        };

        this.renderQuestionAnswered = (question) => {
            throw "UnSupportedOperationException";
        };

        this.ShowButtonNext = () => {
            throw "UnSupportedOperationException";
        };

};

