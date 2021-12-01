let carouselWidth = 500;

let prevButton = document.getElementById("previous-button")
let nextButton = document.getElementById("next-button")
let imageRow = document.getElementById("carousel-image-row")

let imageNum = 0;

function forwardImage() {
    imageNum += 1;
    carouselControls();
    let calcleft = -carouselWidth * imageNum;
    imageRow.style.left = calcleft + "px";
}

nextButton.onclick = forwardImage;

function backwardImage() {
    imageNum -= 1;
    carouselControls();
    let calcright = -carouselWidth * imageNum;
    imageRow.style.left = calcright + "px";
}

prevButton.onclick = backwardImage;
prevButton.classList.add("hidden");

let totalImages = document.getElementsByClassName("carousel-image").length

function carouselControls() {
    if (imageNum == 0) {
        prevButton.classList.add("hidden");
    }
    else if (prevButton.classList.contains("hidden")) {
        prevButton.classList.remove("hidden");
    }
    if (imageNum == totalImages - 1) {
        nextButton.classList.add("hidden");
    }
    else if (nextButton.classList.contains("hidden")) {
        nextButton.classList.remove("hidden")
    }
}