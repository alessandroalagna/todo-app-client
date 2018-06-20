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

            window.app.Store.createTodo(richiesta,function(response){
                console.log(response);
                CreateElement(response.data);
            });
            
        });

        window.app.Store.getTodos(callGetTodos);

        function callGetTodos(json,index){
            console.log(json);
            for(var i=0;i<json.data.docs.length;i++){
                CreateElement(json.data.docs[i]);
                console.log(json);
            }
        }

        function CreateElement(todo){
        
            var ul = document.querySelector("#lista");
            var li = document.createElement("li");
            var hidden = document.createElement("input");
            var checkbox = document.createElement("input");
            var label = document.createElement("label");
            var button = document.createElement("button");
    
            hidden.setAttribute("type","hidden");
            hidden.setAttribute("value",todo._id);
    
            checkbox.setAttribute("type","checkbox");
            checkbox.checked = todo.done;
            checkbox.addEventListener('change',function(e){
                console.log(e.target.checked);
                var richiesta= {
                    data: {
                        "done": e.target.checked
                    }
                }

                window.app.Store.updateTodo(richiesta,todo._id);
    
            })
            
            var testoGras = todo.content;
            label.textContent = testoGras.toUpperCase();
            checkbox.classList.add("checkbox");
            button.textContent = "CANCELLA";
            button.classList.add("button");
            button.addEventListener("click",function(e){
                window.app.Store.deleteTodo(todo._id);
                ul.removeChild(li);
            })
            
    
            li.appendChild(hidden);
            label.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(button);
            ul.appendChild(li);
            
        }


    /*{
        "data": {
            "docs": [
                {
                    "_id": "5b289e57121bde36675dd4b8",
                    "updatedAt": "2018-06-19T06:10:31.341Z",
                    "createdAt": "2018-06-19T06:10:31.341Z",
                    "uuid": "woeivnewiojwehvehvehve",
                    "deleted": false,
                    "done": true,
                    "content": ""
                }
            ],
            "total": 1,
            "limit": 10,
            "offset": 0,
            "page": 1,
            "pages": 1
        }
    }*/
    });
})(window, document);
