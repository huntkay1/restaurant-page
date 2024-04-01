import hero from './hero.jpg';

export function loadPage() {
    content = document.getElementById("content");

    const heroImg = new Image(500, 300);
    heroImg.src = hero;

    content.appendChild(heroImg);

    document.body.appendChild(content);
}