
var textarea = document.querySelector('textarea');
var button = document.querySelector('button');
var encry = document.querySelector('.encry');
var decry = document.querySelector('.decry');
var res = document.querySelector('.resultado-final');
var alerta = document.querySelector('.alerta');  
var consulta = document.querySelector('.Consulta');
var resultado= document.querySelector('.resultado');
var copy= document.querySelector('.copy');
var html=`<img src="image/persona.svg" alt="persona">
<div class="sin-texto">
 <span class="texto-a">Ningún mensaje fue encontrado</span>
 <span class="texto-b">Ingresa el texto que desees encriptar o desencriptar.</span>
</div>`;
function clean(texto){
        const t = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        return texto.split('').map( l => t[l] || l).join('').toString(); 
}
function ToggleCry(val,dato){
    var texto = clean(dato.toLowerCase())
    if(val==1){
    var t = texto.replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    }else{
    var t = texto.replace(/ai/g, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    }
    if(!resultado.classList.add("show")){
    resultado.classList.add("show");
    }
    textarea.classList.add('h');
    consulta.classList.add('on');
    copy.classList.add('activa');
    res.innerHTML = `<div><span class="tx">Resultado:</span><span class="re">${t}<span></div>`;
}
textarea.addEventListener('input', function(){
var text = textarea.value;
if (text != text.toLowerCase()) {
    if (text.length  >= 0) {
    copy.classList.remove('activa');
    alertas(1);
   }
  }
if (text.length >= 3) {
    encry.classList.remove('off');
    decry.classList.remove('off');
    alerta.innerHTML='';
    alerta.classList.remove('activo');
    resultado.classList.remove("show")
}
if(text.length <= 1){
    encry.classList.add('off');
    decry.classList.add('off');
    textarea.classList.remove('h');
    consulta.classList.remove('on');
    res.innerHTML = html;
   }
});
encry.addEventListener('click', function(){
    if(textarea.value==null || textarea.value==''){
    alertas(2)
    }else{
    ToggleCry(1,textarea.value);
    }
});
decry.addEventListener('click', function(){
    if( textarea.value==null || textarea.value==''){
    alertas(2)
    }else{
    ToggleCry(2,textarea.value);
   }  
});
function alertas(val){
    if(val==1){
    var a = "No se permiten letras mayúsculas";
    }else if(val==2){
    var a = "Por favor escribir un texto ..!!";
    }else{
    var a = "El texto se a Copado..!!";
    }
    alerta.innerHTML=a;
    alerta.classList.add('activo');
    setTimeout(()=>{
        alerta.innerHTML='';
        alerta.classList.remove('activo');
    },20000);
}
copy.addEventListener('click', function(){
    var texto_res = document.querySelector('.re').innerText;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(texto_res);
        alertas(3)
    }
}); 
