### Procedural ###

START
INIT - set up variables, state, click handlers, view
RENDER - UI based on variables and state of the program.

Create an app that uses state management to UPDATE the app without refreshing (reloading) the page. 

The app will be a mind reading app using the multiples of 9. 

There will be a single button on the page to progress to the next page.

There will be 6 views total. 

The button will need to change to a reset button after the initial press. 

Symbols will need to be RANDOMIZED to SYMBOLS. 

Multiples of 9 need to be the same SYMBOL.

END

### Functional ###

START

HTML - create boilerplate page
CSS - use Bootstrap

FUNCTIONS

Initalize()
    renderView() {
        setPage: 1
    }

**Handlers for buttons**
goBtn = document.getElementById("btn"); - start button

navigateBtn = document.getElementById("next"); - next button

resetBtn = document.getElementById("reset-btn"); - reset button

resetUI

setState

generateSymbols - 

Variables:

Functions:

changeState();

### Object oriented ###

mindReader Obj.

