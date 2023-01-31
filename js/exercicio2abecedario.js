var vogalA = document.querySelectorAll("#id-vogais-exe7")[12];

vogalA.onclick = function(){
    this.style.color = "transparent";

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
var vogalE = document.querySelectorAll("#id-vogais-exe7")[25];

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
            res.style.color = "red";
            res.textContent = "errado";
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
                        
                    }
                }

            }

        }


    }
}


// VOGAL I
var vogalI = document.querySelectorAll("#id-vogais-exe7")[7];

vogalI.onclick = function(){
    this.style.color = "transparent";
   
    var espacoA = document.querySelectorAll("input")[8];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'i');
        var res = document.querySelectorAll("#span-certo")[8];
            res.style.display = "block";
            
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
                res.style.color = "red";
                res.textContent = "errado";
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
var vogalO = document.querySelectorAll("#id-vogais-exe7")[1];

vogalO.onclick = function(){
    this.style.color = "transparent";
   

    var espacoA = document.querySelectorAll("input")[14];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'o');
        var res = document.querySelectorAll("#span-certo")[14];
            res.style.display = "block";
            
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
                    res.style.color = "red";
                res.textContent = "errado";
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
var vogalU = document.querySelectorAll("#id-vogais-exe7")[10];

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
                    var espacoU = document.querySelectorAll("input")[20];
                    var x = espacoU.value;
        
                    if(x == ""){
                        espacoU.setAttribute('value', 'u');
                        var res = document.querySelectorAll("#span-certo")[20];
                        res.style.display = "block";
                        
                    }
                }

            }

        }


    }
}



// VOGAL B
var vogalU = document.querySelectorAll("#id-vogais-exe7")[0];

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
            espacoE.setAttribute('value', 'b');
            var res = document.querySelectorAll("#span-certo")[1];
            res.style.display = "block";
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
                        
                        
                    }
                }

            }

        }


    }
}


// VOGAL C
var vogalU = document.querySelectorAll("#id-vogais-exe7")[14];

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
                espacoI.setAttribute('value', 'c');
                var res = document.querySelectorAll("#span-certo")[2];
                res.style.display = "block";
                
                
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
                        
                        
                    }
                }

            }

        }


    }
}


// VOGAL D
var vogalU = document.querySelectorAll("#id-vogais-exe7")[22];

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
                    espacoO.setAttribute('value', 'd');
                    var res = document.querySelectorAll("#span-certo")[3];
                    res.style.display = "block";
                    
                }

                if(x != ""){
                    var espacoU = document.querySelectorAll("input")[4];
                    var x = espacoU.value;
        
                    if(x == ""){
                        espacoU.setAttribute('value', 'u');
                        var res = document.querySelectorAll("#span-certo")[4];
                        
                        
                    }
                }

            }

        }


    }
}


// VOGAL F
var vogalU = document.querySelectorAll("#id-vogais-exe7")[5];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[5];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'f');
        var res = document.querySelectorAll("#span-certo")[5];
            res.style.display = "block";
            
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


// VOGAL G
var vogalU = document.querySelectorAll("#id-vogais-exe7")[11];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[6];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'g');
        var res = document.querySelectorAll("#span-certo")[6];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL H
var vogalU = document.querySelectorAll("#id-vogais-exe7")[20];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[7];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'h');
        var res = document.querySelectorAll("#span-certo")[7];
            res.style.display = "block";

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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}



// VOGAL J
var vogalU = document.querySelectorAll("#id-vogais-exe7")[24];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[9];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'j');
        var res = document.querySelectorAll("#span-certo")[9];
            res.style.display = "block";
            
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


// VOGAL K
var vogalU = document.querySelectorAll("#id-vogais-exe7")[23];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[10];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'k');
        var res = document.querySelectorAll("#span-certo")[10];
            res.style.display = "block";
           
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL L
var vogalU = document.querySelectorAll("#id-vogais-exe7")[6];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[11];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'l');
        var res = document.querySelectorAll("#span-certo")[11];
            res.style.display = "block";
           
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}



// VOGAL M
var vogalU = document.querySelectorAll("#id-vogais-exe7")[9];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[12];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'm');
        var res = document.querySelectorAll("#span-certo")[12];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL N
var vogalU = document.querySelectorAll("#id-vogais-exe7")[3];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[13];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'n');
        var res = document.querySelectorAll("#span-certo")[13];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL P
var vogalU = document.querySelectorAll("#id-vogais-exe7")[2];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[15];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'p');
        var res = document.querySelectorAll("#span-certo")[15];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL Q
var vogalU = document.querySelectorAll("#id-vogais-exe7")[16];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[16];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'q');
        var res = document.querySelectorAll("#span-certo")[16];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL R
var vogalU = document.querySelectorAll("#id-vogais-exe7")[18];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[17];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'r');
        var res = document.querySelectorAll("#span-certo")[17];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL S
var vogalU = document.querySelectorAll("#id-vogais-exe7")[15];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[18];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 's');
        var res = document.querySelectorAll("#span-certo")[18];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL T
var vogalU = document.querySelectorAll("#id-vogais-exe7")[8];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[19];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 't');
        var res = document.querySelectorAll("#span-certo")[19];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}



// VOGAL V
var vogalU = document.querySelectorAll("#id-vogais-exe7")[4];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[21];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'v');
        var res = document.querySelectorAll("#span-certo")[21];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL W
var vogalU = document.querySelectorAll("#id-vogais-exe7")[17];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[22];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'w');
        var res = document.querySelectorAll("#span-certo")[22];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL X
var vogalU = document.querySelectorAll("#id-vogais-exe7")[21];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[23];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'x');
        var res = document.querySelectorAll("#span-certo")[23];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}


// VOGAL Y
var vogalU = document.querySelectorAll("#id-vogais-exe7")[19];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[24];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'y');
        var res = document.querySelectorAll("#span-certo")[24];
            res.style.display = "block";
            
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


// VOGAL Z
var vogalU = document.querySelectorAll("#id-vogais-exe7")[13];

vogalU.onclick = function(){
    this.style.color = "transparent";
    

    var espacoA = document.querySelectorAll("input")[25];
    var x = espacoA.value;
    //console.log(x);

    if(x == ""){
        espacoA.setAttribute('value', 'z');
        var res = document.querySelectorAll("#span-certo")[25];
            res.style.display = "block";
            
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
                        res.style.color = "red";
                        res.textContent = "errado";
                        
                    }
                }

            }

        }


    }
}

// butao apagar
var reload = document.querySelector("#reload");
reload.onclick = function(){
    location.reload();
}
