// certification slideshow
let slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) { 
    let slides = document.getElementsByClassName("CertSlide");
    let slidesText = document.getElementsByClassName("CertSlideTxt");

    //reset all slides to invisible
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slidesText[i].style.display = "none";
    }

    //ensure bounds of array
    if (n > slides.length)
        {slideIndex = 1}
    if (n < 1) 
        {slideIndex = slides.length}

    //display current slide and text
    slides[slideIndex-1].style.display = "block";
    slidesText[slideIndex-1].style.display = "block";
}