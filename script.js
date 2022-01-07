'use strict;'

const textarea=document.querySelector('.textarea');
const plus=document.querySelector('#btn-plus');
const minus=document.querySelector('#btn-minus');
const multiple=document.querySelector('#btn-multiple');
const divide=document.querySelector('#btn-divide');

const one=document.querySelector('#btn-one');
const two=document.querySelector('#btn-two');
const three=document.querySelector('#btn-three');
const four=document.querySelector('#btn-four');
const five=document.querySelector('#btn-five');
const six=document.querySelector('#btn-six');
const seven=document.querySelector('#btn-seven');
const eight=document.querySelector('#btn-eight');
const nine=document.querySelector('#btn-nine');
const zero=document.querySelector('#btn-zero');

const equal=document.querySelector('.btn-equal');
const dot=document.querySelector('#btn-dot');
const clear=document.querySelector('#btn-clear');

textarea.value="";
function calculate(result){
    textarea.value=textarea.value+(result);
  }
function answer(){
    textarea.value=eval(textarea.value);
  }

plus.addEventListener('click',function(){calculate(plus.value)});
minus.addEventListener('click',function(){calculate(minus.value)});
multiple.addEventListener('click',function(){calculate(multiple.value)});
divide.addEventListener('click',function(){calculate(divide.value)});
one.addEventListener('click',function(){calculate(one.value)});
two.addEventListener('click',function(){calculate(two.value)});
three.addEventListener('click',function(){calculate(three.value)});
four.addEventListener('click',function(){calculate(four.value)});
five.addEventListener('click',function(){calculate(five.value)});
six.addEventListener('click',function(){calculate(six.value)});
seven.addEventListener('click',function(){calculate(seven.value)});
eight.addEventListener('click',function(){calculate(eight.value)});
nine.addEventListener('click',function(){calculate(nine.value)});
zero.addEventListener('click',function(){calculate(zero.value)});
dot.addEventListener('click',function(){calculate(dot.value)});
equal.addEventListener('click',function(){answer()});
clear.addEventListener('click',function(){
    textarea.value="";
});