
//DOM 
let personalname = document.getElementById('name');
let personalinfo = document.getElementById('personalinfotitle');
let edad= document.getElementById('edad');
let ocupacion = document.getElementById('ocupacion');
let ciudad = document.getElementById('ciudad');
let educacion = document.getElementById('educacion');
let summary = document.getElementById('summary');

personalinfo.innerHTML='Informacion Personal';
personalname.innerHTML='Will Brown';
ocupacion.innerHTML='Occupation: Programmer';
edad.innerHTML='Age: 28';
ciudad.innerHTML='Hometown: Seattle, WA';
//educacion.innerHTML='';
//summary.innerHTML='';

//fin de DOM

let hidetext_btn01 = document.getElementById('hidetext_btn01');
let hide_text01 = document.getElementById('hide_text01');
let hidetext_btn02 = document.getElementById('hidetext_btn02');
let hide_text02 = document.getElementById('hide_text02');
let hidetext_btn03 = document.getElementById('hidetext_btn03');
let hide_text03 = document.getElementById('hide_text03');
let skillsboton = document.getElementById('skillsboton');
let information_skills = document.getElementById('information_skills');
let educationboton = document.getElementById('educationboton');
let info_education = document.getElementById('info_education');




hidetext_btn01.addEventListener('click', programador);
hidetext_btn02.addEventListener('click', developer);
hidetext_btn03.addEventListener('click', junior);
skillsboton.addEventListener('click', skills);
educationboton.addEventListener('click',education);



function programador(){
    hide_text01.classList.toggle('show');
}
function developer(){
    hide_text02.classList.toggle('show');
}
function junior(){
    hide_text03.classList.toggle('show');
}
function skills(){
    information_skills.classList.toggle('mostrar');
}
function education(){
    info_education.classList.toggle('mostrar');
}
