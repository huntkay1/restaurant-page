import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

function component() {
    home();

    const buttons = [...document.querySelectorAll('button')];

    buttons.forEach(button => {
        button.addEventListener('click', changePage);
    })

    function changePage(e) {
        var bttnName = e.target.innerHTML;
        
        if (bttnName === "Menu") {
            menu();
        } else if (bttnName === "About") {
            about();
        } else {
            home();
        }
    }
}

component();