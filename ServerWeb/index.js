import {FormUI} from "./formui/formapi.js";
let handleSubmit = null;
let config = {
    "id" : "myform",
    "container" : "contenedor",
    "action" : handleSubmit,
    "elementos" : [
        {
            "id" : "sdlkkhflk",
            "type" : "text"
        },
        {
            "type" : "checkbox",
            "target" : "e1"
        },
        {
            "type" : "checkbox" 
        },
        {
            "type" : "checkbox",
            "target" : "e2"
        }
    ]
}
let formUI = new FormUI();
formUI.init(config); /*
formUI.draw(document.getElementById("ejemplo"));*/
console.log(document.querySelector("#myform"));
