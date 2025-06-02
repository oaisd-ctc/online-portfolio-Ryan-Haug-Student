const particleCont = document.getElementById("ParticleContainer");
const pageHeight = document.body.scrollHeight;

const plsScroll = document.getElementById("uselessThingy");

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        particle.className = "js-particle";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.width = particle.style.height = Math.random() * 8 + 4 + "px";
        particle.style.top = pageHeight - 10 + "px";

        particle.style.animationDuration = 5 + Math.random() * 10 + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";

        particleCont.appendChild(particle);
    }
}); 
    
