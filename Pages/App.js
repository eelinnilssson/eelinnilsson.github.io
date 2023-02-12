/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const navLi = document.querySelectorAll('nav ul li a');
// document.getElementById("sidebar-menu-ul")
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
            current = section.getAttribute('id');
        }
    });
    console.log(navLi)
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*= ' + current + ']').classList.add('active');
    });
});






