document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.getElementsByClassName('depoimento-item');
    const totalSlides = slides.length;

    function showSlides(n) {
        if (n >= totalSlides) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = n;
        }

        Array.from(slides).forEach(slide => {
            slide.style.display = "none";
        });

        slides[slideIndex].style.display = "block";
    }

    showSlides(slideIndex);

    window.moveCarousel = function (step) {
        showSlides(slideIndex += step);
    };

    setInterval(function () {
        showSlides(slideIndex += 1);
    }, 3000);
});

document.getElementById('formContato').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Mensagem:', mensagem);

        this.reset();

        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

