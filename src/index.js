import hero from './hero.jpg';

function component() {
    content = document.getElementById("content");

    const heroImg = new Image();
    heroImg.src = hero;

    content.appendChild(heroImg);

    return content
}

document.body.appendChild(component())