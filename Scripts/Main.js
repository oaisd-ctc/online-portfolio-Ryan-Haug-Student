const particleCont = document.getElementById("ParticleContainer");
const pageHeight = document.body.scrollHeight;

const plsScroll = document.getElementById("uselessThingy");

let Projects = document.getElementsByClassName("Project_Card");
let counter = document.getElementById("ProjCounter");
let currentProjDisplay = 1;

DisplayProject();

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        particle.className = "js-particle";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.width = particle.style.height = Math.random() * 8 + 4 + "px";
        particle.style.top = pageHeight - 5 + "px";

        particle.style.animationDuration = 5 + Math.random() * 10 + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";

        particleCont.appendChild(particle);
    }
});

function DisplayProject() {
    Array.from(Projects).forEach(element => {
        element.style.display = "none";

        if (element.id === "pCard" + currentProjDisplay) {
            counter.innerText = currentProjDisplay + "/" + Projects.length;
            element.style.display = "grid"
        }
    });
}

function SwapProject(i) {
    currentProjDisplay += i;

    // check for bounds to loop around
    if (currentProjDisplay > Projects.length) 
        currentProjDisplay = 1;
    else if (currentProjDisplay < 1) 
        currentProjDisplay = Projects.length;

    DisplayProject();
}

