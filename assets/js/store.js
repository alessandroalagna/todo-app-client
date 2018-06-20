"use strict";

(function(window, session) {
    var sessionUuid = session.get();

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
            callbackFunction(risposta);

         });

        xhr.addEventListener('error', function (x) {
            console.log('error', x);
        });

        xhr.send(JSON.stringify(creazionetodo));

    }

    function getTodos(callbackFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET","http://192.168.20.173:7000/todos?uuid="+sessionUuid+"&limit=1000",true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.addEventListener('load', function(x){
            var risposta=JSON.parse(x.target.response);
            callbackFunction(risposta);
        });
        xhr.send();


    }

    function updateTodo(data,id){
        var xhr = new XMLHttpRequest();
        xhr.open("PUT","http://192.168.20.173:7000/todos/"+id,true);
        xhr.setRequestHeader("content-type","application/json");
        xhr.addEventListener("load",function(x){
            console.log(x);
        })

        xhr.send(JSON.stringify(data));
    
    }

    function deleteTodo(id){
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE","http://192.168.20.173:7000/todos/"+id,true);
        xhr.setRequestHeader("content-type","application/json");
        xhr.addEventListener("load",function(x){
            console.log(x);
        })

        xhr.send();
    }
     
    window.app = window.app || {};
    window.app.Store = {
        updateTodo: updateTodo,
        createTodo: createTodo,
        getTodos: getTodos,
        deleteTodo: deleteTodo
    };
})(window, window.app.Session);



