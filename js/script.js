// creating buttons and event handlers

// goBtn = document.getElementById("btn"); - start button
let goBtn = document.getElementById('go-btn');
goBtn.addEventListener('click', incPage());

// navigateBtn = document.getElementById("next"); - next button
nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener('click', incPage());

// resetBtn = document.getElementById("reset-btn"); - reset button
resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener('click', reset());

// render application
function renderView() {}
let appMindReader = document.getElementById("doc");
appMindReader.innerHTML = content;

let content = "Mind reader application. Guess a number between 0-99, and I'll show you the symbol."


let pages = {[
 appMindReader.innerHTML: "Pick a number between 0 and 99"
}
// functions

let app

function initializeUI(e){
    renderView(); 
        setView: 1
    
}

function incPage(e){
    
}

function resetUI(e){

}

function changeState(e){

}

### Functional ###

START
FUNCTIONS


setState

generateSymbols - 

### Object oriented ###

let mindReader = ()=> {

} 

