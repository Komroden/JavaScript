'use strict';
let InputLogin= document.querySelector('.input__login');
let InputMail= document.querySelector('.input__mail');
let InputTel= document.querySelector('.input__tel');
let button= document.querySelector('.button')
const regexpLogin = /[a-z]/gi;
const regexpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/gi;
const regexpTel = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/gi;
button.addEventListener('click',function(){
    if(regexpLogin.test(InputLogin.value)&&regexpEmail.test(InputMail.value)&&regexpTel.test(InputTel.value)){
        console.log("Отправлено")
    }else{
        console.log("Ошибка")
    }
})
