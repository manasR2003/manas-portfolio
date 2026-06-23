/* ==========================================
   AOS ANIMATION
========================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 120
});

/* ==========================================
   TYPING EFFECT
========================================== */

const typed = new Typed("#typing", {
    strings: [
        "Python Full Stack Developer",
        "Django Developer",
        "Machine Learning Enthusiast",
        "AI & ADAS Developer",
        "Backend Developer",
        "Problem Solver"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

/* ==========================================
   PARTICLES JS
========================================== */

particlesJS("particles-js", {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#00F5D4"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5,
            random: true
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00BBF9",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {

            grab: {
                distance: 180,
                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = +counter.getAttribute("data-target");

                let current = 0;

                const increment = target / 100;

                const updateCounter = () => {

                    if (current < target) {

                        current += increment;

                        counter.innerText = Math.ceil(current);

                        setTimeout(updateCounter, 20);

                    } else {

                        counter.innerText = target + "+";
                    }
                };

                updateCounter();

                counterObserver.unobserve(counter);
            }
        });
    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,0.85)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.25)";
        navbar.style.boxShadow = "none";
    }

});

/* ==========================================
   ACTIVE MENU LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href").includes(current)
        ) {
            link.classList.add("active");
        }
    });

});

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

document.addEventListener("mousemove", (e) => {

    document.body.style.setProperty(
        "--x",
        `${e.clientX}px`
    );

    document.body.style.setProperty(
        "--y",
        `${e.clientY}px`
    );

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* ==========================================
   PROJECT CARD HOVER EFFECT
========================================== */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";
    });

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML =
    '<i class="bi bi-arrow-up"></i>';

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00F5D4;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
transition:.4s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================================
   HERO IMAGE TILT EFFECT
========================================== */

const profile =
    document.querySelector(".profile-img");

if (profile) {

    profile.addEventListener("mousemove", (e) => {

        const rect = profile.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 20;

        const rotateX =
            ((y / rect.height) - 0.5) * -20;

        profile.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)`;
    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });

}

/* ==========================================
   PRELOADER (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
   CONSOLE SIGNATURE
========================================== */

console.log(`
=====================================
 Portfolio Developed for Manas Hota
 Python Full Stack Developer
 Django | AI | ML | ADAS
=====================================
`);