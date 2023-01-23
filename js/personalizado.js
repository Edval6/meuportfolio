/* animacao das vogais */

var Vogais = document.querySelectorAll("#id-vogais")[0];

Vogais.addEventListener("click", function(){
    Vogais.style.animation = "girar 2s";
    this.style.color = "orange";

    var audA = document.querySelector("#audA");
    audA.setAttribute('autoplay', 'true');

});

var Vogais1 = document.querySelectorAll("#id-vogais")[1];

    Vogais1.addEventListener("click", function(){
    Vogais1.style.animation = "girar 2s";
    this.style.color = "pink";
});

var Vogais2 = document.querySelectorAll("#id-vogais")[2];

    Vogais2.addEventListener("click", function(){
    Vogais2.style.animation = "girar 2s";
    this.style.color = "#112BFA";
});

var Vogais3 = document.querySelectorAll("#id-vogais")[3];

    Vogais3.addEventListener("click", function(){
    Vogais3.style.animation = "girar 2s";
    this.style.color = "yellow";
});

var Vogais4 = document.querySelectorAll("#id-vogais")[4];

    Vogais4.addEventListener("click", function(){
    Vogais4.style.animation = "girar 2s";
    this.style.color = "red";
});


var miniVogais = document.querySelectorAll("#id-mini-vogais")[0];

miniVogais.addEventListener("click", function(){
    miniVogais.style.animation = "agitar 2s";
    this.style.color = "orange";
});

var miniVogais1 = document.querySelectorAll("#id-mini-vogais")[1];

miniVogais1.addEventListener("click", function(){
    miniVogais1.style.animation = "agitar 2s";
    this.style.color = "pink";
});

var miniVogais2 = document.querySelectorAll("#id-mini-vogais")[2];

miniVogais2.addEventListener("click", function(){
    miniVogais2.style.animation = "agitar 2s";
    this.style.color = "blue";
});

var miniVogais3 = document.querySelectorAll("#id-mini-vogais")[3];

miniVogais3.addEventListener("click", function(){
    miniVogais3.style.animation = "agitar 2s";
    this.style.color = "yellow";
});

var miniVogais4 = document.querySelectorAll("#id-mini-vogais")[4];

miniVogais4.addEventListener("click", function(){
    miniVogais4.style.animation = "agitar 2s";
    this.style.color = "red";
});

