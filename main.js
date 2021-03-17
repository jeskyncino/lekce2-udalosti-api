function ztucni(odstavec){
    odstavec.target.style.fontWeight = "bold";
}

function odtucni(odstavec){
    odstavec.target.style.fontWeight = "normal";
}

function zcervena(element){
    let toRed = document.querySelector(element) ;
    toRed.classList.toggle("barva");
    let buttRed = document.querySelector("#pali");
    if (buttRed.innerHTML === "Zčervená po kliknutí") {
        buttRed.innerHTML = "Zčerná po kliknutí";
     } else {
     buttRed.innerHTML = "Zčervená po kliknutí";
    }
}


function zvetsi(element){
    let text = document.querySelector(element);
    let textSize = (window.getComputedStyle(text)).getPropertyValue('font-size');
    let newSize = "calc(" + textSize + " " + "+ 1px)";
    text.style.fontSize = newSize;
    } 

function prehraj(elementA) {
   let audio = document.querySelector(elementA) ;
   audio.play();
}

function stopni(elementB) {
    let audio = document.querySelector(elementB) ;
    audio.pause();
 }