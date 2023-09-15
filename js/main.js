// toggleDarkMode()

const chk = document.getElementById('chk');
const logo = document.getElementById('logo')

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

toggleDarkMode()
toggleLogo()

function toggleLogo() {
    if (logo.getAttribute('src') == "/assets/logo-header.svg") {
      logo.setAttribute('src', "/assets/logo-header-dark.svg");
    } else {
      logo.setAttribute('src', "/assets/logo-header.svg");
    }
}

chk.addEventListener('change', () => {
	toggleDarkMode();
    toggleLogo();
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

// clonar slider p/ efeito infinito

const copy = document.querySelector(".card-wrapper").cloneNode(true);
document.querySelector(".auto-slider").appendChild(copy);


// parallax

const bg = document.getElementById('bg');
const parallax = document.getElementById('parallax');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    parallax.style.top = 200 - value * 0.5 + 'px';
    parallax.style.left = 350 - value * 0.2 + 'px';
})


//dialog

const dialog = document.getElementById('modal');
const btnDialog = document.querySelectorAll('#btnCta')

btnDialog.forEach(button => {
    button.addEventListener('click', () => {
        dialog.showModal();
    });
});

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