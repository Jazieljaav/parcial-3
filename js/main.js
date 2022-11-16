
let slider = document.querySelector(".slider-contenedor")/*se crea variable y se selecciona un claas o un id*/
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;/*la posicion del slider empieza en 0 y toma el width del primer slider*/
let intervalo = 5000;/*tiempo de intervalo entre sliders*/

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
}) /*para trabajar responsive*/

setInterval(function(){
    slides();
},intervalo);/*cada que pase esta funcion y que cada 5 segundos se ejecute slider*/ 



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";/* esto permite el movimiento del slider */ 
    slider.style.transition = "transform .6s";/*difinir transicion y evitar que no caiga de golpe*/ 
    contador++;

    if(contador == sliderIndividual.length){/*dice cuantos elementos tengo */ 
        setTimeout(function(){/* cuando llegue a posicion final me lleves al punto original*/
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}