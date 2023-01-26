/* exercicio 1 vogais */

var a1 = document.querySelectorAll("#id-vogais-exe1")[0];

a1.onclick = function(){
    var audExeA = document.querySelector("#aud-exe-a");
    const avalue = "a";

    if (avalue === "a"){
        this.style.opacity = "25%";
        this.style.color = "green";
        audExeA.src = audExeA.src="audios/vogais/o.mp3";

        // letra o1
        var o1 = document.querySelectorAll("#id-vogais-exe1")[3];

        o1.onclick = function(){
            const ovalue = "o";

            if(ovalue === "o"){
                o1.style.opacity = "25%";
                o1.style.color = "green";
                audExeA.src = audExeA.src="audios/vogais/e.mp3";
            }
        }

        // letra o2
        var o2 = document.querySelectorAll("#id-vogais-exe1")[5];

        o2.onclick = function(){
            const ovalue = "o";

            if(ovalue === "o"){
                o2.style.opacity = "25%";
                o2.style.color = "green";
                audExeA.src = audExeA.src="audios/vogais/e.mp3";
            }
        }

        // letra o3
        var o3 = document.querySelectorAll("#id-vogais-exe1")[14];

        o3.onclick = function(){
            const ovalue = "o";

            if(ovalue === "o"){
                o3.style.opacity = "25%";
                o3.style.color = "green";
                audExeA.src = audExeA.src="audios/vogais/e.mp3";
            }
        }
    }
    
}

//a2

var a1 = document.querySelectorAll("#id-vogais-exe1")[6];

a1.onclick = function(){
    var audExeA = document.querySelector("#aud-exe-a");
    const avalue = "a";

    if (avalue === "a"){
        this.style.opacity = "40%";
        audExeA.src = audExeA.src="audios/vogais/o.mp3";

        var o1 = document.querySelectorAll("#id-vogais-exe1")[3];

        o1.onclick = function(){
            const ovalue = "o";

            if(ovalue === "o"){
                o1.style.opacity = "25%";
                o1.style.color = "green";
                audExeA.src = audExeA.src="audios/vogais/e.mp3";
            }
        }

    }
    
}


//a3
var a1 = document.querySelectorAll("#id-vogais-exe1")[11];

a1.onclick = function(){
    var audExeA = document.querySelector("#aud-exe-a");
    const avalue = "a";

    if (avalue === "a"){
        this.style.opacity = "40%";
        audExeA.src = audExeA.src="audios/vogais/o.mp3";

        var o1 = document.querySelectorAll("#id-vogais-exe1")[3];

        o1.onclick = function(){
            const ovalue = "o";

            if(ovalue === "o"){
                o1.style.opacity = "25%";
                o1.style.color = "green";
                audExeA.src = audExeA.src="audios/vogais/e.mp3";
            }
        }

    }
    
}

