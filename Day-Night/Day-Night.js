let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let shefo = document.querySelector('.shefo');

window.onscroll =function(){
    let value = scrollY
    stars.style.left = value + 'px';
    moon.style.top = value * 3 +'px';
    mountain3.style.top = value * 2 +'px';
    mountain4.style.top = value * 1.5 +'px';
    river.style.top = value +'px';
    boat.style.top = value +'px';
    boat.style.left = value * 3 +'px';
    shefo.style.fontSize = value  +'px';
    if(scrollY>= 70){
        shefo.style.fontSize = 70  +'px';   
        shefo.style.position ='fixed';   
        if(scrollY>=333){
            shefo.style.display='none';
        }else{
            shefo.style.display='block';
        }
    }
    if(scrollY>= 210){
        document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background='linear-gradient(to top,#200016,transparent)';

    }
}