let val=0;
let x=document.getElementById('show');
// x.innerHTML=0;


document.getElementById('increase').addEventListener("click",function(){

val++;
x.innerHTML=val;


});

document.getElementById('decrease').addEventListener("click",function(){

val--;
x.innerHTML=val;



});

document.getElementById('reset').addEventListener("click",function(){

val=0;
x.innerHTML=val;
})