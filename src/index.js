// import { encode } from "punycode";

//Guardo el boton en la variable
const buttonCode = document.getElementById("code");
//Si hago click hace lo que esta dentro
buttonCode.addEventListener("click", () => {
  //Obteniendo el valor desde la página, el offset y el texto
  let numero = document.getElementById("offset").value;
  let textoAdecifrar = document.getElementById("message").value;

  //Cifrar el texto, llamando a la función hecha en el cipher
  window.cipher.encode(numero, textoAdecifrar);
  let result=document
  let textocifrado = document.getElementById("result").value;



});


return
