class FormUI {
    init(config) {
        var form = document.createElement("form");
        form.id = config.id;
        form.addEventListener("submit", config.action);
        config.elementos.forEach((element, index) => {
            let inputField = document.createElement("input");
            if(!element.id) {
                inputField.id = "field" + form.id + index;
            }else{
                inputField.id = element.id;
            }
            console.log(inputField.id);
            switch(element.type){
                case "checkbox":
                    inputField.type = "checkbox";
                    this.addCheckUi(,config,)
            }
        });
        console.log(form);
        
    }
    draw(container) {
        
    }
}
export {FormUI};