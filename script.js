const cursor = document.querySelector(".cursor");
const glow = document.querySelector(".cursor-glow");


// CURSOR

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// TYPING EFFECT

const text = "WEB DASTURI";
const typing = document.getElementById("typing");

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.textContent += text[index];

        index++;

        setTimeout(typeText, 120);

    }

}

typeText();


// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// SCROLL PROGRESS

const progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / height) * 100;

    progress.style.width = percent + "%";

});


// TOP BUTTON

const topButton = document.getElementById("top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});