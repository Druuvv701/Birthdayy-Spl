// 📸 IMAGES
const images = [
    {src: "Picsss/img1.webp", text: "This day was chaos 😂"},
    {src: "Picsss/img2.webp", text: "Still my favorite pic ❤️"},
    {src: "Picsss/img3.webp", text: "Still don't know what we were doing here 😊"},
    {src: "Picsss/img4.webp", text: "We look good ngl 😏"}
];

// 💌 SLIDES
const slides = [
    "Hiii raaa Pandhiiii ❤️",

    "English lo cheptunna ani em anukokuu...\nSometimess Englishh iss the bestt language to express our feelingss... Hehehe..😋😁",

    "Wanna see whtss thtt...??? 😏",

    "I don’t really say this enough, but I’m really grateful to have you in my life.\n\nYou’ve been there in ways most people aren’t, and honestly, that means more than anything.\n\nYou’re one of the few people who can make me laugh even on the worst days.\n\nYou matter a lot to me ❤️\n\nLubb Uhhh raaa🫂🤌\n\nHappy Birthday, idiot ❤️\n\n— your annoying Gadidha ❤️"
];

let slideIndexText = 0;
let charIndex = 0;

// 🎮 GAME
let score = 0;
const maxScore = 5;

const targetBtn = document.getElementById("targetBtn");
const scoreText = document.getElementById("scoreText");

function moveTarget() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 200);

    targetBtn.style.left = x + "px";
    targetBtn.style.top = y + "px";
}

targetBtn.addEventListener("click", () => {
    score++;
    scoreText.innerText = `Score: ${score} / ${maxScore}`;
    moveTarget();

    if (score >= maxScore) {
        document.getElementById("gameBox").style.display = "none";
        document.getElementById("letterBox").classList.remove("hidden");
        startSlides();
    }
});

// 🔘 BUTTON
const nextBtn = document.createElement("button");
nextBtn.style.display = "none";
nextBtn.style.marginTop = "15px";
document.getElementById("letterBox").appendChild(nextBtn);

// ▶️ START SLIDES
function startSlides() {
    const letter = document.getElementById("letter");
    letter.innerHTML = "";
    nextBtn.style.display = "none";

    // 🎨 SPECIAL STYLE FOR LAST SLIDE
    if (slideIndexText === 3) {
        letter.style.color = "#ff2e63";
        letter.style.fontSize = "18px";
        letter.style.fontWeight = "500";
        letter.style.lineHeight = "1.6";
    } else {
        letter.style.color = "#333";
        letter.style.fontSize = "16px";
        letter.style.fontWeight = "normal";
    }

    typeSlide();
}

// ✍️ TYPE EFFECT
function typeSlide() {
    const letter = document.getElementById("letter");

    if (charIndex < slides[slideIndexText].length) {
        letter.innerHTML += slides[slideIndexText].charAt(charIndex);
        charIndex++;
        setTimeout(typeSlide, 30);
    } else {
        // 👇 BUTTON TEXT CHANGE LOGIC
        if (slideIndexText === 2) {
            nextBtn.innerText = "Yeahhh sureee... 😏";
        } else {
            nextBtn.innerText = "Next ➜";
        }

        nextBtn.style.display = "inline-block";
    }
}

// ➡️ BUTTON CLICK
nextBtn.onclick = function () {
    slideIndexText++;
    charIndex = 0;

    if (slideIndexText < slides.length) {
        startSlides();
    } else {
        document.getElementById("letterBox").style.display = "none";
        startSlideshow();
    }
};

// 🎬 SLIDESHOW
let slideIndex = 0;

function startSlideshow() {
    document.getElementById("slideshow").style.display = "flex";
    showSlides();
}

function showSlides() {
    const img = document.getElementById("slideImg");
    const caption = document.querySelector(".caption");

    img.src = images[slideIndex].src;
    caption.innerText = images[slideIndex].text;

    slideIndex++;

    if (slideIndex < images.length) {
        setTimeout(showSlides, 2500);
    } else {
        setTimeout(() => {
            document.getElementById("slideshow").style.display = "none";
            showPopup();
        }, 2500);
    }
}

// 💖 POPUP
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}