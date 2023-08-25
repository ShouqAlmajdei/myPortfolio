const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const Btn = document.getElementById('btn');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let numOfChar = 150;

let contents = document.querySelectorAll(".content");

contents.forEach(content => {
    if (content.textContent.length < numOfChar) {
        content.nextElementSibling.style.display = "none";
    }

    else{
        let displaytext = content.textContent.slice(0,numOfChar);
        let moreText = content.textContent.slice(numOfChar);
        content.innerHTML = `${displaytext}<span class="dots"> ... </span><span class="hide
        more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle(".hide");
    post.querySelector(".more").classList.toggle("hide");
}



