// creating buttons and event handlers
let goBtn = document.getElementById('go-btn');
goBtn.addEventListener('click', incPage());

nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener('click', incPage());

resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener('click', reset());
resetBtn.style.visibility = "hidden";

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
    goBtn.style.visibility = "hidden";
    resetBtn.style.visibility = "visible";
}

function resetUI(e){

}

function changeState(e){

}

// random symbols array
let randomSymbols = [
    "!", "@", "#", "$", "%", "^", "&", "*", "!"
]

### Functional ###

START
FUNCTIONS


setState

// generateSymbols - 
let randomSymbolsGenerator = Math.round(Math.random(randomSymbols));

### Object oriented ###

let mindReader = ()=> {

} 

