var vogalA = document.querySelector("#id-vogais-exe2");

vogalA.onclick = function(){
    this.style.color = "transparent";

    var espacosA = document.querySelectorAll("#id-vogais-espaco")[0];
    var espacoA = document.querySelectorAll("input")[0];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'a');
        var res = document.querySelectorAll("#span-certo")[0];
        res.style.display = "block";
    }
    if(x != ""){
        var espacoE = document.querySelectorAll("input")[1];
        var x = espacoE.value;

        if(x == ""){
            espacoE.setAttribute('value', 'a');
            var res = document.querySelectorAll("#span-certo")[1];
            res.style.display = "block";
            res.style.color = "red";
            res.textContent = "errado";
        }

        if(x != ""){
            var espacoI = document.querySelectorAll("input")[2];
            var x = espacoI.value;

            if(x == ""){
                espacoI.setAttribute('value', 'a');
                var res = document.querySelectorAll("#span-certo")[2];
                res.style.display = "block";
                res.style.color = "red";
                res.textContent = "errado";
            }

            if(x != ""){
                var espacoO = document.querySelectorAll("input")[3];
                var x = espacoO.value;
    
                if(x == ""){
                    espacoO.setAttribute('value', 'a');
                    var res = document.querySelectorAll("#span-certo")[3];
                    res.style.display = "block";
                    res.style.color = "red";
                    res.textContent = "errado";
                }

                if(x != ""){
                    var espacoU = document.querySelectorAll("input")[4];
                    var x = espacoU.value;
        
                    if(x == ""){
                        espacoU.setAttribute('value', 'a');
                        var res = document.querySelectorAll("#span-certo")[4];
                        res.style.display = "block";
                        res.style.color = "red";
                        res.textContent = "errado";
                    }
                }

            }

        }


    }
    /*espacosA.style.display = "flex";
    espacosA.style.color = "orange";*/
}

// VOGAL E
var vogalE = document.querySelector("#id-vogais-exe3");

vogalE.onclick = function(){
    this.style.color = "transparent";

    var espacoA = document.querySelectorAll("input")[0];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'e');
        var res = document.querySelectorAll("#span-certo")[0];
            res.style.display = "block";
            res.style.color = "red";
            res.textContent = "errado";
    }
    if(x != ""){
        var espacoE = document.querySelectorAll("input")[1];
        var x = espacoE.value;

        if(x == ""){
            espacoE.setAttribute('value', 'e');
            var res = document.querySelectorAll("#span-certo")[1];
            res.style.display = "block";
        }

        if(x != ""){
            var espacoI = document.querySelectorAll("input")[2];
            var x = espacoI.value;

            if(x == ""){
                espacoI.setAttribute('value', 'e');
                var res = document.querySelectorAll("#span-certo")[2];
                res.style.display = "block";
                res.style.color = "red";
                res.textContent = "errado";
            }

            if(x != ""){
                var espacoO = document.querySelectorAll("input")[3];
                var x = espacoO.value;
    
                if(x == ""){
                    espacoO.setAttribute('value', 'e');
                    var res = document.querySelectorAll("#span-certo")[3];
                    res.style.display = "block";
                    res.style.color = "red";
                    res.textContent = "errado";
                }

                if(x != ""){
                    var espacoU = document.querySelectorAll("input")[4];
                    var x = espacoU.value;
        
                    if(x == ""){
                        espacoU.setAttribute('value', 'e');
                        var res = document.querySelectorAll("#span-certo")[4];
                        res.style.display = "block";
                        res.style.color = "red";
                        res.textContent = "errado";
                    }
                }

            }

        }


    }
}


// VOGAL I
var vogalI = document.querySelector("#id-vogais-exe4");

vogalI.onclick = function(){
    this.style.color = "transparent";
   
    var espacoA = document.querySelectorAll("input")[0];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'i');
        var res = document.querySelectorAll("#span-certo")[0];
            res.style.display = "block";
            res.style.color = "red";
            res.textContent = "errado";
    }
    if(x != ""){
        var espacoE = document.querySelectorAll("input")[1];
        var x = espacoE.value;

        if(x == ""){
            espacoE.setAttribute('value', 'i');
            var res = document.querySelectorAll("#span-certo")[1];
            res.style.display = "block";
            res.style.color = "red";
            res.textContent = "errado";
        }

        if(x != ""){
            var espacoI = document.querySelectorAll("input")[2];
            var x = espacoI.value;

            if(x == ""){
                espacoI.setAttribute('value', 'i');
                var res = document.querySelectorAll("#span-certo")[2];
                res.style.display = "block";
            }

            if(x != ""){
                var espacoO = document.querySelectorAll("input")[3];
                var x = espacoO.value;
    
                if(x == ""){
                    espacoO.setAttribute('value', 'i');
                    var res = document.querySelectorAll("#span-certo")[3];
                    res.style.display = "block";
                    res.style.color = "red";
                    res.textContent = "errado";
                }

                if(x != ""){
                    var espacoU = document.querySelectorAll("input")[4];
                    var x = espacoU.value;
        
                    if(x == ""){
                        espacoU.setAttribute('value', 'i');
                        var res = document.querySelectorAll("#span-certo")[4];
                        res.style.display = "block";
                        res.style.color = "red";
                        res.textContent = "errado";
                    }
                }

            }

        }


    }
}



// VOGAL O
var vogalO = document.querySelector("#id-vogais-exe5");

vogalO.onclick = function(){
    this.style.color = "transparent";
   

    var espacoA = document.querySelectorAll("input")[0];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'o');
        var res = document.querySelectorAll("#span-certo")[0];
            res.style.display = "block";
            res.style.color = "red";
            res.textContent = "errado";
    }
    if(x != ""){
        var espacoE = document.querySelectorAll("input")[1];
        var x = espacoE.value;

        if(x == ""){
            espacoE.setAttribute('value', 'o');
            var res = document.querySelectorAll("#span-certo")[1];
            res.style.display = "block";
            res.style.color = "red";
            res.textContent = "errado";
        }

        if(x != ""){
            var espacoI = document.querySelectorAll("input")[2];
            var x = espacoI.value;

            if(x == ""){
                espacoI.setAttribute('value', 'o');
                var res = document.querySelectorAll("#span-certo")[2];
                res.style.display = "block";
                res.style.color = "red";
                res.textContent = "errado";
            }

            if(x != ""){
                var espacoO = document.querySelectorAll("input")[3];
                var x = espacoO.value;
    
                if(x == ""){
                    espacoO.setAttribute('value', 'o');
                    var res = document.querySelectorAll("#span-certo")[3];
                    res.style.display = "block";
                }

                if(x != ""){
                    var espacoU = document.querySelectorAll("input")[4];
                    var x = espacoU.value;
        
                    if(x == ""){
                        espacoU.setAttribute('value', 'o');
                        var res = document.querySelectorAll("#span-certo")[4];
                        res.style.display = "block";
                        res.style.color = "red";
                        res.textContent = "errado";
                    }
                }

            }

        }


    }
}



// VOGAL U
var vogalU = document.querySelector("#id-vogais-exe6");

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[0];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'u');
        var res = document.querySelectorAll("#span-certo")[0];
            res.style.display = "block";
            res.style.color = "red";
            res.textContent = "errado";
    }
    if(x != ""){
        var espacoE = document.querySelectorAll("input")[1];
        var x = espacoE.value;

        if(x == ""){
            espacoE.setAttribute('value', 'u');
            var res = document.querySelectorAll("#span-certo")[1];
            res.style.display = "block";
            res.style.color = "red";
            res.textContent = "errado";
        }

        if(x != ""){
            var espacoI = document.querySelectorAll("input")[2];
            var x = espacoI.value;

            if(x == ""){
                espacoI.setAttribute('value', 'u');
                var res = document.querySelectorAll("#span-certo")[2];
                res.style.display = "block";
                res.style.color = "red";
                res.textContent = "errado";
                
            }

            if(x != ""){
                var espacoO = document.querySelectorAll("input")[3];
                var x = espacoO.value;
    
                if(x == ""){
                    espacoO.setAttribute('value', 'u');
                    var res = document.querySelectorAll("#span-certo")[3];
                    res.style.display = "block";
                    res.style.color = "red";
                    res.textContent = "errado";
                }

                if(x != ""){
                    var espacoU = document.querySelectorAll("input")[4];
                    var x = espacoU.value;
        
                    if(x == ""){
                        espacoU.setAttribute('value', 'u');
                        var res = document.querySelectorAll("#span-certo")[4];
                        res.style.display = "block";
                        
                    }
                }

            }

        }


    }
}
