// certification slideshow
let slideIndex = 1;
let ExpCurrentDisplay = 0;
showSlides(slideIndex);
showExperienceContent(ExpCurrentDisplay);

// button functions here
function changeSlides(n) {
    showSlides(slideIndex += n);
}

function changeExpDisplay(n) {
    showExperienceContent(n);
}

//for button functionality
function showSlides(n) {
    let slides = document.getElementsByClassName("CertSlide");
    let slidesText = document.getElementsByClassName("CertSlideTxt");

    //reset all slides to invisible
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slidesText[i].style.display = "none";
    }

    //ensure bounds of array
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    //display current slide and text
    slides[slideIndex - 1].style.display = "block";
    slidesText[slideIndex - 1].style.display = "block";
}

function showExperienceContent(n) {
    let lang = document.getElementById("lang");
    let proj = document.getElementById("proj");

    lang.style.display = "none";
    proj.style.display = "none";

    if (n === 0) 
        lang.style.display = "block";
    else
        proj.style.display = "block";
}