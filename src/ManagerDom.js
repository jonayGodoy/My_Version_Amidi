'use strict';

module.exports = function ManagerDom() {

    const idLoad = "amidi";
    const idApp = "app";

    const idQuestion = "preguntas";
    const idNext = "siguiente";

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
                ` <div class="pregunta"`
                +` id="`+question.respuestas[nAnswer]+`"`
                +` onclick="window.updateAnswer('`+question.respuestas[nAnswer]+`')">`
                + question.respuestas[nAnswer]
                + `</div>`;
        }
        divQuestion.innerHTML = answerHtml;
    };

    this.renderQuestionAnswered = (answer, isCorrect) => {
        let divAnswer = document.getElementById(answer);
        removeAnswerOnClick();

        isCorrect ?
            divAnswer.style.color = 'yellowgreen'
            : divAnswer.style.color = 'red';
    };

    this.toggleButtonNext = () => {
        let classList =  document.getElementById(idNext).classList;
        let isHidden =  classList.contains('hidden');

        isHidden ?
            classList.remove('hidden')
            : classList.add('hidden')
    };


    function removeAnswerOnClick(){
        let divQuestion = document.getElementById(idQuestion);

        let childNodes = divQuestion.childNodes;
        for( let i =0;i < childNodes.length;i++){
            childNodes[i].onclick = function() {
                return false;
            }
        }
    }


};

