function ManagerFile() {

    function loadJson(){
        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    let data = httpRequest.responseText;
                    localStorage.setItem('preguntas', data);
                    return JSON.parse(data);
                }
            }
        };
        httpRequest.open('get', '../public/preguntas.json');
        httpRequest.send();
    }
}