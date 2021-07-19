'use strict';
let text= "Lorem 'ipsum' dolor sit amet consectetur adipisicing elit."
const regexp1 = /\s'/g;
const regexp2 = /\'\s/g;
let result = text.replace(regexp1, ' "');
console.log(result);
 result = text.replace(regexp2, '" ');
console.log(result);

