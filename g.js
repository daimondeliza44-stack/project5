let input = document.getElementById("tache");
let bouton = document.getElementById("ajouter");
let liste = document.getElementById("liste");

bouton.addEventListener("click",function(){
    let texte = input.value.trim();
    if (texte === ""){
        alert("ecrire une tache !")
    }
    let li = document.createElement("li");
    li.textContent = texte;

    li.addEventListener("click",function(){
        if ( li.style.textDecoration ===  "line-through"){
            li.style.textDecoration ="none";
        }else {
            li.style.textDecoration="line-through";
        }
    });
    li.addEventListener("dblclick",function()
    {
        li.remove()
    });
    liste.appendChild(li);
    input.value ="";
});