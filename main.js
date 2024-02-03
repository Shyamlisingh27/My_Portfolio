var Typed = new Typed(".extra",{
    strings: ["Java","DSA in java","c programming language","Frontend development"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

/*toggle icon*/

let menuicon=document.querySelector('#menu');
let nav=document.querySelector('nav');

menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};
window.onscroll=()=>{
    menuicon.classList.remove('bx-x');
    nav.classList.remove('active');
}