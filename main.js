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