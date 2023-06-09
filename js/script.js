// creating buttons and event handlers
let goBtn = document.getElementById("go-btn");
goBtn.addEventListener('click', incPage);

nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener('click', incPage);
nextBtn.style.visibility = "hidden";

resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener('click', resetUI);
resetBtn.style.visibility = "hidden";

// declaring  global variables and array
let content = "Mind reader application. Guess a number between 0-99, and I'll show you the symbol."

let currentPage = 1;

let randomSymbols = [
    "1 = !", "2 = @", "3 = #", "4 = $", "5 = %", "6 = ^", "7 = &", "8 = *", "9 = !"
]

let chosenSymbol = "";

const pages = {
    1: "I can read your mind. Click go to proceed",
    2: "Pick a number from 01 - 99. Click next when you have a number",
    3: "Add both digits together to get a new number (ex: 15 would be 1 + 5 = 6).",
    4: "Subtract your new number from the original number (ex: 15 - 5 = 10)",
    5: randomSymbols,
    6: `Your symbol is: !`,
    7: "Click reset to play again!"
};

// functions
function initializeUI(e) {
    chosenSymbol = Math.floor(Math.random()*randomSymbols.length);
    renderView();
}

//hides goBtn, show resetBtn, increments page
function incPage(e) {
    currentPage++;
    renderView(e);
}

// render application
function renderView(e) {
    if (currentPage === 1) {
        goBtn.style.visibility = "visible";
        resetBtn.style.visibility = "hidden";
        nextBtn.style.visibility = "hidden";
    } else if (currentPage === 2) {
        goBtn.style.visibility = "hidden";
        resetBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
    } else if (currentPage === 3) {
        goBtn.style.visibility = "hidden";
        resetBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
    } else if (currentPage === 4) {
        goBtn.style.visibility = "hidden";
        resetBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
    } else if (currentPage === 5) {
        goBtn.style.visibility = "hidden";
        resetBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
    } else if (currentPage === 6) {
        goBtn.style.visibility = "hidden";
        resetBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
    }
    document.getElementById("content").textContent = pages[currentPage];
}

function resetUI(e) {
    currentPage = 1;
    initializeUI();
}