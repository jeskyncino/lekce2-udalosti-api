//let odstavec = document.querySelector('p');

function ztucni(odstavec){
    odstavec.target.style.fontWeight = "bold";
}

function odtucni(odstavec){
    odstavec.target.style.fontWeight = "normal";
}

function zcervena(element){
    let toRed = document.querySelector(element) ;
    toRed.classList.toggle("barva");
}


function zvetsi(element){
    let currSize = document.querySelector(element).style.fontSize ;

    } 
    

//@param {string} elementA

function prehraj(elementA) {
   let audio = document.querySelector(elementA) ;
   audio.play();
}

function stopni(elementB) {
    let audio = document.querySelector(elementB) ;
    audio.pause();
 }