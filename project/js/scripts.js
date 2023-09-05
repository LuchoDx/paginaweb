/*Funciones para cambiar el z-index de cada seccion especifica*/ 

function myFun1() {
    document.getElementById("vuelos").classList.toggle("active");
    }
    
 function myFun2() {
    document.getElementById("viajes").classList.toggle("active");
    }
    
 function myFun3() {
    document.getElementById("hoteles").classList.toggle("active");
    }

 function myFun4() {
    document.getElementById("cruceros").classList.toggle("active");
    }

/*Funcion para quitar la clase .active que contiene el z-index = 10 de los elementos que la contengan*/ 

function reset() {
    let clase_r_emover = document.querySelectorAll('.caja-de-articulos');
    clase_r_emover.forEach(el => el.classList.remove("active"));
}


/* Funciones de cambio de color de las etiquetas li*/ 

  function cam_color_1() {
    document.getElementById("secciones-vuelos").classList.toggle("color_li");
    }   

 function cam_color_2() {
    document.getElementById("secciones-viajes").classList.toggle("color_li");
    }

 function cam_color_3() {
    document.getElementById("secciones-hoteles").classList.toggle("color_li");
    }  

 function cam_color_4() {
    document.getElementById("secciones-cruceros").classList.toggle("color_li");
    }

/*Funcion para quitar la clase .color_li que cambia el color de los mismos a todos los li que la contengan*/ 

 function reset_color(){
    let clase_r_emover = document.querySelectorAll('.secciones');
    clase_r_emover.forEach(el => el.classList.remove("color_li"));
 }


/*Agregamos el evento onclick a cada uno de los li en especifico para que asigne sus respectivas funciones*/ 


document.getElementById("secciones-vuelos").onclick = function(){
    reset();
    myFun1();
    reset_color();
    cam_color_1();
}

document.getElementById("secciones-viajes").onclick = function(){
    reset();
    myFun2();
    reset_color();
    cam_color_2();
}

document.getElementById("secciones-hoteles").onclick = function(){
    reset();
    myFun3();
    reset_color();
    cam_color_3();
}

document.getElementById("secciones-cruceros").onclick = function(){
    reset();        
    myFun4();
    reset_color();
    cam_color_4();
}


function mynewfun1() {
   document.getElementById("itemCarrousel_1").classList.toggle("select");
   }
   
   function mynewfun2() {
      document.getElementById("itemCarrousel_2").classList.toggle("select");
      }
      function mynewfun3() {
         document.getElementById("itemCarrousel_3").classList.toggle("select");
         }
         
         function mynewfun4() {
            document.getElementById("itemCarrousel_4").classList.toggle("select");
            }
            function mynewfun5() {
               document.getElementById("itemCarrousel_5").classList.toggle("select");
               }
               function mynewfun6() {
                  document.getElementById("itemCarrousel_6").classList.toggle("select");
                  }
                  function mynewfun7() {
                     document.getElementById("itemCarrousel_7").classList.toggle("select");
                     }
                     function mynewfun8() {
                        document.getElementById("itemCarrousel_8").classList.toggle("select");
                        }
                        function mynewfun9() {
                           document.getElementById("itemCarrousel_9").classList.toggle("select");
                           }


                           function newreset() {
                              let clase_r_emover = document.querySelectorAll('.items-selections');
                              clase_r_emover.forEach(el => el.classList.remove("select"));
                          }

                          document.getElementById("itemCarrousel_1").onclick = function(){
                           newreset();
                           mynewfun1();
                       }
                       document.getElementById("itemCarrousel_2").onclick = function(){
                        newreset();
                        mynewfun2();
                    }
                    document.getElementById("itemCarrousel_3").onclick = function(){
                     newreset();
                     mynewfun3();
                 }
                 document.getElementById("itemCarrousel_4").onclick = function(){
                  newreset();
                  mynewfun4();
              }
              document.getElementById("itemCarrousel_5").onclick = function(){
               newreset();
               mynewfun5();
           }
           document.getElementById("itemCarrousel_6").onclick = function(){
            newreset();
            mynewfun6();
        }
        document.getElementById("itemCarrousel_7").onclick = function(){
         newreset();
         mynewfun7();
     }
     document.getElementById("itemCarrousel_8").onclick = function(){
      newreset();
      mynewfun8();
  }
  document.getElementById("itemCarrousel_9").onclick = function(){
   newreset();
   mynewfun9();
}

/*LEFT*/
document.getElementById("left-1").onclick = function(){
   newreset();
   mynewfun1();
}
document.getElementById("left-2").onclick = function(){
   newreset();
   mynewfun2();
}
document.getElementById("left-3").onclick = function(){
   newreset();
   mynewfun3();
}
document.getElementById("left-4").onclick = function(){
   newreset();
   mynewfun4();
}
document.getElementById("left-5").onclick = function(){
   newreset();
   mynewfun5();
}
document.getElementById("left-6").onclick = function(){
   newreset();
   mynewfun6();
}
document.getElementById("left-7").onclick = function(){
   newreset();
   mynewfun7();
}
document.getElementById("left-8").onclick = function(){
   newreset();
   mynewfun8();
}
document.getElementById("left-9").onclick = function(){
   newreset();
   mynewfun9();
}


/*RIGHT */
document.getElementById("right-1").onclick = function(){
   newreset();
   mynewfun1();
}
document.getElementById("right-2").onclick = function(){
   newreset();
   mynewfun2();
}
document.getElementById("right-3").onclick = function(){
   newreset();
   mynewfun3();
}
document.getElementById("right-4").onclick = function(){
   newreset();
   mynewfun4();
}
document.getElementById("right-5").onclick = function(){
   newreset();
   mynewfun5();
}
document.getElementById("right-6").onclick = function(){
   newreset();
   mynewfun6();
}
document.getElementById("right-7").onclick = function(){
   newreset();
   mynewfun7();
}
document.getElementById("right-8").onclick = function(){
   newreset();
   mynewfun8();
}
document.getElementById("right-9").onclick = function(){
   newreset();
   mynewfun9();
}


