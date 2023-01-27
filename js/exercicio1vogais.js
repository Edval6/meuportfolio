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

                // letra e1
                var e1 = document.querySelectorAll("#id-vogais-exe1")[1];

                e1.onclick = function(){
                    const evalue = "e";
        
                    if(evalue === "e"){
                        e1.style.opacity = "25%";
                        e1.style.color = "green";
                        audExeA.src = audExeA.src="audios/vogais/u.mp3";

                        //letra u1
                        var u1 = document.querySelectorAll("#id-vogais-exe1")[4];

                        u1.onclick = function(){
                        const uvalue = "u";

                        if(uvalue === "u"){
                            u1.style.opacity = "25%";
                            u1.style.color = "green";
                            audExeA.src = audExeA.src="audios/vogais/i.mp3";
                        

                            // letra i1
                            var i1 = document.querySelectorAll("#id-vogais-exe1")[2];

                            i1.onclick = function(){
                                const ivalue = "i";
                    
                                if(ivalue === "i"){
                                    i1.style.opacity = "25%";
                                    i1.style.color = "green";
                                    audExeA.src = audExeA.src="audios/vogais/u.mp3";

                                    // FIM DA PRIMEIRA LINHA

                                    var maiusculas2 = document.querySelector("#maiusculas2");
                                    maiusculas2.style.display = "flex";

                                }
                            }

                            }
                        }

                        //letra u2
                        var u2 = document.querySelectorAll("#id-vogais-exe1")[7];

                        u2.onclick = function(){
                        const uvalue = "u";

                        if(uvalue === "u"){
                            u2.style.opacity = "25%";
                            u2.style.color = "green";
                            audExeA.src = audExeA.src="audios/vogais/a.mp3";

                            //letra a1
                            var a1 = document.querySelectorAll("#id-vogais-exe1")[6];

                            a1.onclick = function(){
                                var audExeA = document.querySelector("#aud-exe-a");
                                const avalue = "a";

                                if (avalue === "a"){
                                    this.style.opacity = "25%";
                                    this.style.color = "green";
                                    audExeA.src = audExeA.src="audios/vogais/i.mp3";


                                    // letra i2
                                    var i2 = document.querySelectorAll("#id-vogais-exe1")[8];

                                    i2.onclick = function(){
                                        const ivalue = "i";
                            
                                        if(ivalue === "i"){
                                            i2.style.opacity = "25%";
                                            i2.style.color = "green";
                                            audExeA.src = audExeA.src="audios/vogais/e.mp3";

                                             // letra e1
                                            var e1 = document.querySelectorAll("#id-vogais-exe1")[9];

                                            e1.onclick = function(){
                                                const evalue = "e";
                                    
                                                if(evalue === "e"){
                                                    e1.style.opacity = "25%";
                                                    e1.style.color = "green";
                                                    audExeA.src = audExeA.src="audios/vogais/o.mp3";

                                                     // letra o1
                                                    var o2 = document.querySelectorAll("#id-vogais-exe1")[5];

                                                    o2.onclick = function(){
                                                        const ovalue = "o";

                                                        console.log(this);

                                                        if(ovalue === "o"){
                                                            o2.style.opacity = "25%";
                                                            o2.style.color = "green";
                                                            audExeA.src = audExeA.src="audios/vogais/i.mp3";

                                                            // FIM DA SEGUNDA LINHA

                                                            var maiusculas3 = document.querySelector("#maiusculas3");
                                                            maiusculas3.style.display = "flex";

                                                            // letra i3
                                                            var i3 = document.querySelectorAll("#id-vogais-exe1")[10];

                                                            i3.onclick = function(){
                                                                const ivalue = "i";
                                                    
                                                                if(ivalue === "i"){
                                                                    i3.style.opacity = "25%";
                                                                    i3.style.color = "green";
                                                                    audExeA.src = audExeA.src="audios/vogais/e.mp3";


                                                                     // letra e1
                                                                    var e3 = document.querySelectorAll("#id-vogais-exe1")[12];

                                                                    e3.onclick = function(){
                                                                        const evalue = "e";
                                                            
                                                                        if(evalue === "e"){
                                                                            e3.style.opacity = "25%";
                                                                            e3.style.color = "green";
                                                                            audExeA.src = audExeA.src="audios/vogais/o.mp3";
                                                                            


                                                                            // letra o3
                                                                            var o3 = document.querySelectorAll("#id-vogais-exe1")[14];

                                                                            o3.onclick = function(){
                                                                                const ovalue = "o";

                                                                                console.log(this);

                                                                                if(ovalue === "o"){
                                                                                    o3.style.opacity = "25%";
                                                                                    o3.style.color = "green";
                                                                                    audExeA.src = audExeA.src="audios/vogais/u.mp3";

                                                                                    //letra u3
                                                                                    var u3 = document.querySelectorAll("#id-vogais-exe1")[11];

                                                                                    u3.onclick = function(){
                                                                                    const uvalue = "u";

                                                                                    if(uvalue === "u"){
                                                                                        u3.style.opacity = "25%";
                                                                                        u3.style.color = "green";
                                                                                        audExeA.src = audExeA.src="audios/vogais/a.mp3";

                                                                                    //letra a1
                                                                                    var a3 = document.querySelectorAll("#id-vogais-exe1")[13];

                                                                                    a3.onclick = function(){
                                                                                        var audExeA = document.querySelector("#aud-exe-a");
                                                                                        const avalue = "a";

                                                                                        if (avalue === "a"){
                                                                                            this.style.opacity = "25%";
                                                                                            this.style.color = "green";
                                                                                            audExeA.style.display = "none";

                                                                                        } 
                                                                              }}     }
                                                                          }
                                                                      }}}
                                                                  }
                                                              }                          
                                                                                     
                                                      }
                                                      
                                                  }                     

                                                        }
                                                    }
                                            }
                                        }
        
                                        }
                                        } 


                                       } 
                                  }
                        }
                    }}}
                }
            }                          
                                   
