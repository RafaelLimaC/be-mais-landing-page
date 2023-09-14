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

// toggleDarkMode()

chk.addEventListener('change', () => {
	toggleDarkMode();
    toggleLogo();
});

const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el));

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