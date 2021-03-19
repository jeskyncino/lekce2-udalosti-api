function makeBold(odstavec){
    odstavec.target.style.fontWeight = "bold";
}

function removeBold(odstavec){
    odstavec.target.style.fontWeight = "normal";
}

function makeRed(element){
    let toRed = document.querySelector(element) ;
    toRed.classList.toggle("make-red");
    let buttRed = document.querySelector("#makeRed");
    if (buttRed.innerHTML === "Zčervená po kliknutí") {
        buttRed.innerHTML = "Zčerná po kliknutí";
     } else {
     buttRed.innerHTML = "Zčervená po kliknutí";
    }
}

function makeBigger(element){
    let text = document.querySelector(element);
    let textSize = (window.getComputedStyle(text)).getPropertyValue('font-size');
  
    /* VARIANTA č.1
      let newSize = "calc(" + textSize + " " + "+ 1px)";
    * text.style.fontSize = newSize;
    */
    
    // VARIANTA č.2
    let newSize = parseInt(textSize) + 1 +"px";
    text.style.fontSize = newSize;
    } 


    // ↓ V tomto případě myslím stačí jedna globální proměná "audio", ale takto je to asi universálnější. :-) 
function play(element) {
   let audio = document.querySelector(element) ;
   audio.play();
}

function pause(element) {
    let audio = document.querySelector(element) ;
    audio.pause();
 }

function stop (element) {
    let audio = document.querySelector(element) ;
    audio.pause();
 }

function volume0(element){
    let audio = document.querySelector(element) ;
    audio.volume = 0;
}

function volume05 (element){
    let audio = document.querySelector(element) ;
    audio.volume = 0.5;
}

function volume1 (element) {
    let audio = document.querySelector(element) ;
    audio.volume = 1;
}

function preload (elementG) {
    let audio = document.querySelector(elementG) ;
    audio.load();
    audio.play();
}

function displayName(element){
    let insertName = document.querySelector(element).innerHTML;
    let placeOfName = document.querySelector('#nameOfSong');
    placeOfName.innerHTML = insertName;
}

