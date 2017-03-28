'use strict';

function ManagerUIAmidi() {
    return {
        start: (idLoad, idApp) => {
            let divLoad = document.getElementById(idLoad);
            let divApp = document.getElementById(idApp);

            divLoad.classList.add('hidden');
            divApp.classList.remove('hidden');
        }
    };
}

