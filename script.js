
function typingAnimation() {
    var typed = new Typed('.element2', {
        strings: ['Web &amp; Frontend Developer'],
        typeSpeed: 50,
    });
}

typingAnimation()

function sidemenu() {
    const hamburger = document.querySelector('.hamburger')
    const ul = document.querySelector('ul')

    hamburger.addEventListener('click', () => {
        ul.classList.toggle('ham-active');

        let ham_child = hamburger.firstElementChild;
        if (ul.classList.contains('ham-active')) {
            ham_child.classList.replace('fa-bars', 'fa-xmark');
        } else {
            ham_child.classList.replace('fa-xmark', 'fa-bars');
        }
    })


}

sidemenu()