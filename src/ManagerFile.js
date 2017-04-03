'use strict';
module.exports = function ManagerFile() {
     this.loadJson = function(){
         return new Promise((resolve, reject) => {
            let data = "";
            let httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function() {
                if (httpRequest.readyState === 4) {
                    if (httpRequest.status === 200) {
                         data = httpRequest.responseText;
                        resolve(JSON.parse(data));
                       }
                }
            };
            httpRequest.open('get', '../public/preguntas.json');
            httpRequest.send();
         });
    }
};
