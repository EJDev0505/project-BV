const Blog = document.querySelector('.page-container');
const home = document.querySelector('.first-page-content-description');
const css = document.querySelector('.css-container');
const buttonHeroCss = document.querySelector('.button-content-hero');
const buttonHeroHome = document.querySelector('#home');
const buttonHeroCsstoHome = document.querySelector('.a-css');
const buttonHeroBlog = document.querySelector('#Blog');



buttonHeroCss.addEventListener('click', (e) => {
    e.preventDefault();
    Blog.style.display = "none";
    home.style.display = "none";
    css.style.display = "flex";
    Blog.style.opacity = "0";
    home.style.opacity = "0";
    css.style.opacity = "1";
    window.scrollTo(0, 0);
});


buttonHeroBlog.addEventListener('click', () => {
    Blog.style.display = "flex";
    home.style.display = "none";
    css.style.display = "none";
    Blog.style.flexDirection = "coloumn";
    Blog.style.opacity = "1";
    home.style.opacity = "0";
    css.style.opacity = "0";
});



buttonHeroHome.addEventListener('click', () => {
    Blog.style.display = "none";
    home.style.display = "flex";
    home.style.flexDirection = "coloumn";
    css.style.display = "none";
    Blog.style.opacity = "0";
    home.style.opacity = "1";
    css.style.opacity = "0";
});



buttonHeroCsstoHome.addEventListener('click', () => {
    Blog.style.display = "none";
    home.style.display = "flex";
    css.style.display = "none";
    home.style.flexDirection = "coloumn";
    Blog.style.opacity = "0";
    home.style.opacity = "1";
    css.style.opacity = "0"
});

