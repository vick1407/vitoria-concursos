/*========================================

VITÓRIA CONCURSOS
SCRIPT.JS

========================================*/


/*==========================
NAVBAR
==========================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/*==========================
COUNTERS
==========================*/

const counters = document.querySelectorAll(".counter");

const animateCounter = counter => {

    const target = +counter.dataset.target;

    let count = 0;

    const increment = target / 120;

    const update = () => {

        count += increment;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    update();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==========================
SCROLL REVEAL
==========================*/

const revealElements = document.querySelectorAll(

".product-card,.feature,.coming-soon,.cta-box,.section-title,.hero"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: .15

});

revealElements.forEach(el => {

    revealObserver.observe(el);

});


/*==========================
3D TILT
==========================*/

const cards = document.querySelectorAll(".tilt");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 12;

        const rotateY = (x - centerX) / 12;

        card.style.transform =

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)
             scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/*==========================
PARALLAX FOTO
==========================*/

const photo = document.querySelector(".hero-photo");

window.addEventListener("mousemove", e => {

    if (!photo) return;

    const x = (window.innerWidth / 2 - e.clientX) / 45;

    const y = (window.innerHeight / 2 - e.clientY) / 45;

    photo.style.transform =

        `translate(${x}px,${y}px)`;

});


/*==========================
BOTÕES
==========================*/

document.querySelectorAll(

".btn-main,.btn-buy"

).forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.animate([

            {

                transform: "translateY(0px)"

            },

            {

                transform: "translateY(-5px)"

            }

        ], {

            duration: 220,

            fill: "forwards"

        });

    });

});


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/*==========================
PARTICLES JS
==========================*/

particlesJS("particles-js", {

    particles: {

        number: {

            value: 80,

            density: {

                enable: true,

                value_area: 900

            }

        },

        color: {

            value: "#ff0000"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: .5,

            random: true

        },

        size: {

            value: 3,

            random: true

        },

        move: {

            enable: true,

            speed: 1.2,

            direction: "none",

            random: true,

            out_mode: "out"

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#ff0000",

            opacity: .15,

            width: 1

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

            }

        },

        modes: {

            grab: {

                distance: 180,

                line_linked: {

                    opacity: .5

                }

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});


/*==========================
BRILHO ALEATÓRIO
==========================*/

setInterval(() => {

    document.querySelectorAll(".btn-buy").forEach(btn => {

        btn.classList.remove("flash");

        void btn.offsetWidth;

        btn.classList.add("flash");

    });

}, 4000);


/*==========================
MENU MOBILE
==========================*/

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.querySelector(".navbar-collapse");

        if (menu.classList.contains("show")) {

            bootstrap.Collapse.getInstance(menu).hide();

        }

    });

});

/*==========================
REMOVE FOCO DO LINK
==========================*/

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function () {

        this.blur();

    });

});


/*==========================
PRELOAD
==========================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});






new Swiper(".apostilasSwiper", {

    loop: true,

    speed: 700,

    effect: "slide",

    spaceBetween: 30,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev"

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true

    },

    breakpoints: {

        0: {

            slidesPerView: 1

        },

        768: {

            slidesPerView: 2

        },

        1200: {

            slidesPerView: 3

        }

    }

});
/*==========================
NAVBAR ACTIVE
==========================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");
const nav = document.querySelector(".navbar");

function updateActiveLink() {

    let current = "";

    const scroll = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {

        if (
            scroll >= section.offsetTop &&
            scroll < section.offsetTop + section.offsetHeight
        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

    const isActive = link.getAttribute("href") === "#" + current;

    link.classList.toggle("active", isActive);

});

}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

/*==========================
HOVER DA NAVBAR
==========================*/

nav.addEventListener("mouseenter", () => {

    nav.classList.add("hovering");

});

nav.addEventListener("mouseleave", () => {

    nav.classList.remove("hovering");

});

/*==========================
PRIORIDADE DO HOVER
==========================*/

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        navLinks.forEach(item => {

            if (
                item.classList.contains("active") &&
                item !== link
            ) {
                item.style.color = "white";
                item.style.setProperty("--linha", "0%");
            }

        });

    });

    link.addEventListener("mouseleave", () => {

        updateActiveLink();

        navLinks.forEach(item => {

            item.style.color = "";
            item.style.removeProperty("--linha");

        });

    });

});

/*==========================
FILTRO DAS APOSTILAS
==========================*/

const filtros = {
    banca: "",
    escolaridade: "",
    disciplina: ""
};

const botoesFiltro = document.querySelectorAll(".filter-btn");
const aviso = document.getElementById("noResults");

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        const grupo = botao.dataset.filter;
        const valor = botao.dataset.value;

        document.querySelectorAll(`.filter-btn[data-filter="${grupo}"]`)
            .forEach(btn => btn.classList.remove("active"));

        botao.classList.add("active");

        filtros[grupo] = valor;

        filtrarCards();

    });

});

function filtrarCards() {

    let encontrados = 0;

    document.querySelectorAll(".apostilasSwiper .swiper-slide").forEach(slide => {

        const bancaOk =
            !filtros.banca ||
            slide.dataset.banca === filtros.banca;

        const escolaridadeOk =
            !filtros.escolaridade ||
            slide.dataset.escolaridade === filtros.escolaridade;

        const disciplinaOk =
            !filtros.disciplina ||
            slide.dataset.disciplina === filtros.disciplina;

        if (bancaOk && escolaridadeOk && disciplinaOk) {

            slide.style.display = "";

            encontrados++;

        } else {

            slide.style.display = "none";

        }

    });

    swiper.update();

    if (encontrados === 0) {

        aviso.style.display = "block";

    } else {

        aviso.style.display = "none";

    }

}