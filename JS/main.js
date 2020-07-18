const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const nextBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots")

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;


function init() {

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });
    slideImage[0].classList.add("active");
    createNavigationDots();
}
init();


function createNavigationDots() {
    for (let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        })
    }
    navigationDots.children[0].classList.add("active");
}


nextBtn.addEventListener("click", () => {
    if (currentSlide <= number0fImages - 1) {
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});


function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
    currentSlide = slideNumber;
    setActiveClass();
}


function setActiveClass() {
    letCurrentActive = document.querySelector(".slide-image.active");
    curretActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    letCurrentDot = document.querySelector(".single-dot.active");
    curretActive.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
}