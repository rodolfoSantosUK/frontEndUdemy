

var myVar1 = "String";
var _myVar2 = 10;
var $myVar3 = true;

var myVar4 = ["a", "b", "c", "d", "e", "f"];

var myVar5 = ["F", "G", "H", "I", "J", "L"];

 console.log(myVar4[3]);

 myVar4.push("String 3");

 myVar4.shift();

 myVar4.forEach( function (idx, key) {
  console.log(idx + " / " + key );
 });

 console.log(myVar4);

 myVar4.splice(2,3);
 console.log(myVar4);

 var alfabeto = ["a", "b", "c", "d", "e", "f"];
 alfabeto.splice(2,3);
 console.log(alfabeto);

var myVar4 = ["a", "b", "c", "d", "e"];

var myVar5 = ["F", "G", "H", "I", "J"];

var myVar6 = myVar4.concat(myVar5);
console.log(myVar6);

var usandoJoin =  myVar4.join("");
console.log(usandoJoin);

var myVar8 = myVar4.toString();
console.log(myVar8);

var myVar4 = ["a", "b", "c", "d", "e"];
var usandousandoSlice = myVar4.slice(2,4); //  que resultará em c,d
console.log(usandousandoSlice);