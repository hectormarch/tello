const input = document.querySelector("input");
const textarea = document.getElementById("textarea");
const prioridad = document.getElementById("prioridad");
const addBtn = document.querySelector(".btn-add");
const ul=document.querySelector("ul");
const tareaspendientes = document.querySelector(".tareasPendientes");

addBtn.addEventListener("click", (e)=>{

    e.preventDefault();

    let text =  input.value;
    const textoDescripcion = textarea.value;
    text=text.toUpperCase();
    const prior= prioridad.value;

    
    if (text !== "" && textoDescripcion!==0){

        const div=document.createElement("div");
        const div2=document.createElement("div");
        const li = document.createElement("li");
        const titulo = document.createElement("h5");
        const descripcion = document.createElement("p");
        const priority = document.createElement("p");
        
       
        descripcion.textContent=textoDescripcion;
        titulo.textContent = text;
        console.log(prior);
        if (prior==1){
            priority.textContent="Alta";
            priority.classList.add("prioridadA");
        }else if (prior==2){
                priority.textContent="Media";
                priority.classList.add("prioridadB");
            }else if (prior==3){
                    priority.textContent="Baja";
                    priority.classList.add("prioridadC")
                } else {
                    priority.textContent="No asignada"
                }
        
        div2.appendChild(priority);
        div.appendChild(titulo);
        div.appendChild(descripcion);
        
        li.appendChild(div);
        li.appendChild(div2)
        ul.appendChild(li);
        li.appendChild(addDeleteBtn());

        tareaspendientes.style.display = "none";
    }


});

function addDeleteBtn(){

    const deleteBtn =  document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className="btn-delete";

    deleteBtn.addEventListener("click", (e)=>{

        const item = e.target.parentElement;

        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length===0){
            tareaspendientes.style.display = "block";
        }

    });
    return deleteBtn;

}