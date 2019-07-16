
var  output =  document.getElementById("output");
var a = "Minha saída<br>";

var meuObjeto = {
    "estudantes" : [
        {"primeiroNome" : "Rodolfo", "empresa" : "TOTVS"},
        {"primeiroNome" : "Luciana", "empresa" : "unknown"},
        {"primeiroNome" : "Roberta", "empresa" : "unknown"},
        {"primeiroNome" : "Monica",  "empresa"  : "TOOLS"},
        {"primeiroNome" : "Rosana",  "empresa"  : "unknown"}
    ]
};

document.getElementById("btn1").onclick = function() {


for(i=0; i < meuObjeto.estudantes.length; i++ ) {
output.innerHTML += meuObjeto.estudantes[i].primeiroNome + " " + meuObjeto.estudantes[i].empresa + "<br>";
}
}