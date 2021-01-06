const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a')

    //Nav toggle
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')

        //Animacija linkova
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }else {
                link.style.animation = 'navLinkFade 1.5s ease forwards';
            }
        });
        // Burger animacija
        burger.classList.toggle('toggle');

    });
};

navSlide();