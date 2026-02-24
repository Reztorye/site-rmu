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
    const carousel = document.querySelector('.depoimentos-carousel');
    const slides = document.querySelectorAll('.depoimento-item');
    if (!carousel || slides.length === 0) return;
    
    let slideIndex = 0;
    const totalSlides = slides.length;

    window.moveCarousel = function (step) {
        slideIndex += step;
        if (slideIndex >= totalSlides) slideIndex = 0;
        if (slideIndex < 0) slideIndex = totalSlides - 1;
        
        // Scroll to the specific slide
        const targetSlide = slides[slideIndex];
        carousel.scrollTo({
            left: targetSlide.offsetLeft - carousel.offsetLeft,
            behavior: 'smooth'
        });
    };

    // Auto-advance
    setInterval(function () {
        moveCarousel(1);
    }, 4000);
});

document.getElementById('formContato').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    var form = this;
    var submitBtn = form.querySelector('.btn-submit');
    var originalText = submitBtn.textContent;

    if (nome && email && mensagem) {
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        var data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                alert('Mensagem enviada com sucesso!');
            } else {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
            }
        }).catch(error => {
            alert('Erro de conexão ao enviar a mensagem.');
        }).finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });

    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

