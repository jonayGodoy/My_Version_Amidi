'use strict';

function ManagerDom() {

    const idLoad = "amidi";
    const idApp = "app";

        this.start = () => {
            let divLoad = document.getElementById(idLoad);
            let divApp = document.getElementById(idApp);

            divLoad.classList.add('hidden');
            divApp.classList.remove('hidden');
        };

        this.renderQuestion = (question) => {
            throw "UnSupportedOperationException";
        };

}
module.exports = ManagerDom;