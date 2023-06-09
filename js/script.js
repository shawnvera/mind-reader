// creating buttons and event handlers
let goBtn = document.getElementById("go-btn");
goBtn.addEventListener('click', incPage);

nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener('click', incPage());
nextBtn.style.visibility = "hidden";

resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener('click', resetUI);
resetBtn.style.visibility = "hidden";

// render application
function renderView() { }
let appMindReader = document.getElementById("doc");
appMindReader.innerHTML = content;

let content = "Mind reader application. Guess a number between 0-99, and I'll show you the symbol."


const pages = {
    "1": "I can read your mind. Click go to proceed",
    "2": "Pick a number from 01 - 99. Click next when you have a number",
    "3": "Add both digits together to get a new number (ex: 15 would be 1 + 5 = 6).",
    "4": "Subtract your new number from the original number (ex: 15 - 5 = 10)",
    "5": randomSymbols,
    "6": "Your symbol is:",
    "7":
};

// functions

let app

function initializeUI(e) {
    renderView();
    setView: 1

}

//hides goBtn, show resetBtn, increments page
function incPage(e) {
    goBtn.style.visibility = "hidden";
    resetBtn.style.visibility = "visible";
    document.getElementById("content") = pages[2];
}

function resetUI(e) {
document.getElementById("content") = pages[1];
goBtn.style.visibility = "visible";
}

function changeState(e) {

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
console.log(randomSymbolsGenerator);
### Object oriented ###

let mindReader = () => {

}

