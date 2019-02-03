document.addEventListener("DOMContentLoaded", function(event) {
    let painText;
    let colors = [
        "#16a085",
        "#27ae60",
        "#73A857",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9"
    ];
    let button = document.querySelector(".btn");
    let author = document.querySelector(".author");
    let wrapper = document.querySelector("#wrapper");
    let loader = document.querySelector("#preloader");
    let textForQuote = document.querySelector(".text");
    wrapper.style.display = "none";
    let req = new XMLHttpRequest();
    req.open("GET", "quotes.json");
    req.onload = function() {
        let quote = "";
        painText = JSON.parse(req.responseText);
        loader.style.display = "none";
        wrapper.style.display = "flex";
        generate();
    };
    req.send();

    function generate() {
        let quote =
            painText.quotes[Math.floor(Math.random() * painText.quotes.length)];
        textForQuote.innerHTML = quote.quote;
        author.innerHTML = quote.author;
        wrapper.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        button.style.backgroundColor = wrapper.style.backgroundColor;
    }

    button.addEventListener("click", generate);
});

// Добавляем конструктор частиц

particlesJS("wrapper", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
