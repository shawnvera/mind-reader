// creating buttons and event handlers
let goBtn = document.getElementById("go-btn");
goBtn.addEventListener('click', incPage);

nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener('click', incPage);
nextBtn.style.visibility = "hidden";

resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener('click', resetUI);
resetBtn.style.visibility = "hidden";

// render application
/* function renderView() { }
let appMindReader = document.getElementById("doc");
appMindReader.innerHTML = content;
*/

let content = "Mind reader application. Guess a number between 0-99, and I'll show you the symbol."

let currentPage = 1;

let randomSymbols = [
    "!", "@", "#", "$", "%", "^", "&", "*", "!"
]



let chosenSymbol = "";

const pages = {
    1: "I can read your mind. Click go to proceed",
    2: "Pick a number from 01 - 99. Click next when you have a number",
    3: "Add both digits together to get a new number (ex: 15 would be 1 + 5 = 6).",
    4: "Subtract your new number from the original number (ex: 15 - 5 = 10)",
    5: randomSymbols,
    6: "Your symbol is:",
    7: ""
};

// functions

let app

function initializeUI(e) {
    chosenSymbol = Math.round(Math.random(randomSymbols));
    renderView();
    // make loop for 99 symbols
    // make variable to hold the symbols

}

//hides goBtn, show resetBtn, increments page
function incPage(e) {
    currentPage++;
    renderView(e);
}

function renderView(e) {
    if (currentPage === 1) {
        goBtn.style.visibility = "hidden";
        resetBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
    }
    // make 6 more of these ifs
    document.getElementById("content").textContent = pages[currentPage];
}

function resetUI(e) {
    currentPage = 1;
    initializeUI();
}



function changeState(e) {

}

// random symbols array


/* ### Functional ###

START
FUNCTIONS


setState

// generateSymbols - 

console.log(randomSymbolsGenerator);
### Object oriented ###

let mindReader = () => {

}
*/
