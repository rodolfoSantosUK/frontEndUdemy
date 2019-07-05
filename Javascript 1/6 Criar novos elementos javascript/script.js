var meuH1 = document.createElement("h1");

var conteudo =  document.createTextNode("Elemento dentro de h1");

var elementoPai =  document.getElementById("output");


meuH1.appendChild(conteudo); // aqui tenho um h1

elementoPai.appendChild(meuH1);