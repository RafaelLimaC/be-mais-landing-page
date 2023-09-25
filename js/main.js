// toggleDarkMode()

const chk = document.getElementById('chk');
const logos = document.querySelectorAll('#logo')

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

function toggleLogo(logo) {
    if (logo.getAttribute('src') == "/assets/logo-header.svg") {
      logo.setAttribute('src', "/assets/logo-header-dark.svg");
    } else {
      logo.setAttribute('src', "/assets/logo-header.svg");
    }
}

function handleLogoClick() {
    logos.forEach(logo => {
        toggleLogo(logo);
    });
}

chk.addEventListener('change', () => {
	toggleDarkMode();
    handleLogoClick();  
});

// navbar link active

const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', () => {
            links.forEach((link) => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
}

// efeito movimento e blur

const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el));

// clonar slider p/ efeito infinito - slider marcas e slider de serviços

const copy = document.querySelector(".card-wrapper").cloneNode(true);
const copyMarcas = document.querySelector(".slider-marcas__container").cloneNode(true);

document.querySelector(".auto-slider").appendChild(copy);
document.querySelector(".slider-marcas__wrapper").appendChild(copyMarcas);


// parallax

const bg = document.getElementById('bg');
const parallax = document.getElementById('parallax');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    parallax.style.top = (bg.offsetHeight * 0.4) - value * 0.5 + 'px';
    parallax.style.left = (bg.offsetWidth * 0.7) - value * 0.2 + 'px';
})

//dialog

const dialog = document.getElementById('modal');
const close = document.getElementById('btnClose');
const btnDialog = document.querySelectorAll('#btnCta')

btnDialog.forEach(button => {
    button.addEventListener('click', () => {
        dialog.showModal();
    });
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
})


// swiper 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });

// loading screen

const lottie = document.getElementById('lottie');

function loadingScreen() {
    if (form.checkValidity()) {
        lottie.classList.add('lottie-load');
    }
}

// hamburger menu

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header-nav__wrapper');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    })
)