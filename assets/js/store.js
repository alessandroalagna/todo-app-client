"use strict";

(function(window, session) {
    // var sessionUuid = session.get();

    function call(id, todoModel, callbackFunction) {
        var xthpp = new XMLHttpRequest();
        
        // ajax call to post method
    }

    function createTodo(creazionetodo, callbackFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://192.168.20.173:7000/todos", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.addEventListener('load', function (x) {
                
            var risposta=JSON.parse(x.target.response);
            console.log(risposta);
         });

        xhr.addEventListener('error', function (x) {
            console.log('error', x);
        });

        xhr.send(JSON.stringify(creazionetodo));

    }

    function getTodos(callbackFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET","http://192.168.20.173:7000/todos",true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.addEventListener('load',function(x){

            var risposta=JSON.parse(x.target.response);
            console.log(risposta);

        });
        xhr.send();

    }

    function updateTodo(){}
    // Export to window
    window.app = window.app || {};
    window.app.Store = {
        updateTodo: updateTodo,
        createTodo: createTodo,
        getTodos: getTodos
    };
})(window, window.app.Session);
