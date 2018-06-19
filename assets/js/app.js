"use strict";

(function(window, document) {

    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {
        var form = document.querySelector("#form");
        form.addEventListener('submit',function(e){
            e.preventDefault();
            var val = document.querySelector("#input").value;
            console.log(val);
            var richiesta = {
                data: {
                    uuid: window.app.Session.get(),
                    content: val,
                }
            }
            console.log(richiesta);

            window.app.Store.createTodo(richiesta);
        });

    window.app.Store.getTodos();

    

    });
})(window, document);
