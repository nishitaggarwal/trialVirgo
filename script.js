// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('nav ul li a');
//     const tabContents = document.querySelectorAll('.tab-content');

//     navLinks.forEach(link => {
//         link.addEventListener('click', event => {
//             event.preventDefault();
//             navLinks.forEach(nav => nav.classList.remove('active'));
//             link.classList.add('active');

//             const target = link.getAttribute('href').substring(1);
//             tabContents.forEach(content => {
//                 content.classList.remove('active');
//                 if (content.getAttribute('id') === target) {
//                     content.classList.add('active');
//                 }
//             });
//         });
//     });
// });


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click',function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

prev.addEventListener('click',function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length -1]);
})























// let menu = document.querySelector('.menu');
// let menuItems = document.querySelectorAll('.menu li');

// menu.addEventListener('mouseover', () => {
//   menuItems.forEach((item, index) => {
//     item.style.transform = `translateY(${index * 5}px)`;
//   });
// });

// menu.addEventListener('mouseout', () => {
//   menuItems.forEach((item) => {
//     item.style.transform = `translateY(0)`;
//   });
// });
