import { loadPage } from "./pageLoad.js";
import { menu } from "./menu.js";

function component() {
    loadPage();

    const buttons = [...document.querySelectorAll('button')];

    buttons.forEach(button => {
        button.addEventListener('click', changePage);
    })

    function changePage(e) {
        if (e.target.innerHTML === "Menu") {
            menu();
        }
    }
}

component();