

const navLi = document.querySelectorAll('div li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 145) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('li a[href*= ' + current + ']').classList.add('active');
    });
});