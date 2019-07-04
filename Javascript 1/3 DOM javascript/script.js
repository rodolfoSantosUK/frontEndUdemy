var myOutput  = document.getElementById("output");

console.dir(myOutput);

myOutput.innerText = "Novo CONTEUDO";
myOutput.style.color = "red" ; 
myOutput.style.backgroundColor = "yellow" ;


var myImage =  document.getElementById("img1");
 
document.getElementById("btn1").addEventListener("click", function() {

    myImage.src="http://lorempixel.com/400/200/";
    this.innerHTML = "Clicked";
    this.style.backgroundColor = "gray";

} )


// como temos objetos iguais ira retornar uma collection 
var myBtn =  document.getElementsByClassName("btn");
myBtn[0].innerText = "Novo <br/> botão";
console.dir(myBtn[0]);

console.log(document.URL + " "  + document.title );