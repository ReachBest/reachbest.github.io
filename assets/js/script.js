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

let totalImages = document.getElementsByClassName("carousel-image").length;

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
/*
let notReady = document.getElementsByClassName("action-grey-box");
let ready1 = document.getElementById("check-mark-icon-1");
let ready2 = document.getElementById("check-mark-icon-2");
let ready3 = document.getElementById("check-mark-icon-3");

function readyToggle() {
    if (student.onclick) {
        notReady.classList.add("hidden");
        ready1.classList.remove("hidden");
    }
    else if () {

    }
}

let student = document.getElementById("studentButton");
let parent = document.getElementById("parentButton");

let pd = document.getElementById("personalDiagnostic");
let bfu = document.getElementById("bestFitUniversityMatch");
let ar = document.getElementById("applicationRoadmap");
let fullPackage = document.getElementById("buttons-full-package");

function submitInquiry() {
    if () {

    }
    else if () {

    }
}
*/