
var  output =  document.getElementById("output");
var a = "Minha saída<br>";

document.getElementById("btn1").onclick = function() {

    //var aleatorio = Math.random()* 100; 

    // floor retorna o menor numero inteiro mais proximo
   // output.innerHTML =   `Número randômico ${aleatorio} >>> Número com floor ${Math.floor(aleatorio)}` ;

    // ceil retorna o maior numero inteiro mais proximo
   // output.innerHTML =   `Número randômico ${aleatorio} >>> Número com floor ${Math.ceil(aleatorio)}` ;

    var valorDigitado  = document.getElementById("myVal").value;

    a  = a + "Meu valor arredondado é " + Math.round(valorDigitado)  + "<br>" ;
    a = a +  Math.round(Math.random() + 100) + "<br>";
    output.innerHTML = a;

}