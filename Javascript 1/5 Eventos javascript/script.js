
var mybtn2 =    document.getElementById("btn2");
var myOutput  = document.getElementById("output");


mybtn2.onclick = myfun ;

mybtn2.addEventListener("mouseover", myfun ); 

function myfun() {
    myOutput.innerHTML= "Voce clicou aqui";
    myOutput.style.backgroundColor =  "blue";
}