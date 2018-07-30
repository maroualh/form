function testuser(){
    var nom=document.getElementById("user").value;
    var lgnom=nom.length;
if (lgnom>=5){
document.getElementById("user").style.borderColor="green";}
else if(nom==''){
document.getElementById("user").style.borderColor="red";}
else{
document.getElementById("user").style.borderColor="red";
}
}
function testpwd(){
    var regnbr=/^[a-zA-Z0-9]+$/;

    var pwd=document.getElementById("pwd").value;
    var lgpwd=pwd.length;
if (pwd=='')
{
document.getElementById("pwd").style.borderColor="red";}
else if(lgpwd<=8){
document.getElementById("pwd").style.borderColor="green";}
else if (regnbr.test(pwd)){
    document.getElementById("pwd").style.borderColor="green";}
else{
    document.getElementById("pwd").style.borderColor="red";}

}

function testmail(){
var regmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var mail=document.getElementById("mail").value;
if (mail==''){
document.getElementById("mail").style.borderColor="red";}
else if (lgmail>=8){
    document.getElementById("mail").style.borderColor="green";}
 else   if (regmail.test(mail)) {
    document.getElementById("mail").style.borderColor="green";}

 else  {
document.getElementById("mail").style.borderColor="red";}
}
function testnom(){
var regx=/^[a-z A-Z]+$/;

    var nom=document.getElementById("nom").value;
    var lgnom=nom.length;
if (nom==''){
document.getElementById("nom").style.borderColor="red";}
else if(lgnom>=4){
document.getElementById("nom").style.borderColor="green";}
else if(regx.test(nom)){
    document.getElementById("nom").style.borderColor="green";}
 else{
    document.getElementById("nom").style.borderColor="red";}

}

function testprenom(){
var regx=/^[a-z A-Z]+$/;


    var pnom=document.getElementById("prenom").value;
    var lgpnom=pnom.length;
if (pnom==''){
document.getElementById("prenom").style.borderColor="red";}
else if(lgpnom>=4){
document.getElementById("prenom").style.borderColor="green";}
else if(regx.test(pnom)){
    document.getElementById("nom").style.borderColor="green";}
else{
document.getElementById("prenom").style.borderColor="red";}

}  
function testtel(){
var reg=/^[0-9._-]+$/;
    var tel=document.getElementById("tele").value;
    var lgtel=tel.length;
if (tel==''){
document.getElementById("tele").style.borderColor="red";}
else if((lgtel==8)&& reg.test(tel)  ) {
document.getElementById("tele").style.borderColor="green";}
else{
document.getElementById("tele").style.borderColor="red";}

}
