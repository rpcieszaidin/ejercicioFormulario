class FormUI {
    form=null;
    init(config) {
        this.form = document.createElement("form");
        this.form.id = config.id;
        this.form.addEventListener("submit", config.action);
        config.elementos.forEach((element, index) => {
            let inputField = document.createElement("input");
            if(!element.id) {
                inputField.id = "field" + this.form.id + index;
            }else{
                inputField.id = element.id;
            }
            console.log(inputField.id);
            switch(element.type){
                case "checkbox":
                    this.createCheckbox(config.container,element,inputField);
                    
            }
        });
        console.log(this.form);
        
    }
    createCheckbox(container,element,input){ 
        let object=null;
        input.type = "checkbox";
        this.form.appendChild(input);
        if(element.target==undefined){
            object = document.createElement("div");
            object.className="check";
            document.getElementById(container).appendChild(object); 
            console.log("no existe y no lo creo");
        }else{
            object =document.getElementById(element.target);           
            console.log(object);
        } 
        object.addEventListener("click",()=>{
                object.classList.toggle("checked");
                if(object.classList.contains("checked")) {
                    input.setAttribute("checked",true);
                }
                else {
                    input.setAttribute("checked",false);
                }
                console.log(this.form);
                }
            ); 
    }
    draw(container) {
        
    }
}
export {FormUI};