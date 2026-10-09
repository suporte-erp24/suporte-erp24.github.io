

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");

    const navMenu = document.getElementById("nav-menu");

    // Seleciona todos os links, incluindo o botão CTA

    const navLinks = document.querySelectorAll("#nav-menu a"); 



    // 1. Abrir/Fechar Menu

    if(hamburger) {

        hamburger.addEventListener("click", (e) => {

            e.stopPropagation(); // Previne cliques fantasma

            hamburger.classList.toggle("active");

            navMenu.classList.toggle("active");

        });

    }



    // 2. Fechar ao clicar em QUALQUER link do menu

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (hamburger.classList.contains("active")) {

                hamburger.classList.remove("active");

                navMenu.classList.remove("active");

            }

        });

    });



    // 3. Fechar ao clicar fora do menu (opcional, bom para UX)

    document.addEventListener('click', (e) => {

        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {

            hamburger.classList.remove("active");

            navMenu.classList.remove("active");

        }

    });

});


;


(function() {

    'use strict';

    

    // 1. SMOOTH SCROLL (faz links #problema, #quem funcionarem)

    document.addEventListener('click', function(e) {

        const target = e.target.closest('a[href^="#"]');

        if (!target) return;

        

        const href = target.getAttribute('href');

        if (!href || href === '#' || href === '#!') return;

        

        const targetId = href.replace('#', '');

        const targetElement = document.getElementById(targetId);

        

        if (targetElement) {

            e.preventDefault();

            

            // Fecha mobile menu

            const nav = document.getElementById('workshopHeaderNav');

            const toggle = document.getElementById('workshopMobileToggle');

            if (nav && nav.classList.contains('active')) {

                nav.classList.remove('active');

                if (toggle) toggle.textContent = '☰';

            }

            

            // Scroll com offset

            const headerHeight = 100;

            const elementPosition = targetElement.getBoundingClientRect().top;

            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            

            window.scrollTo({

                top: offsetPosition,

                behavior: 'smooth'

            });

        }

    });

    

    // 2. MOBILE MENU TOGGLE

    const toggle = document.getElementById('workshopMobileToggle');

    const nav = document.getElementById('workshopHeaderNav');

    

    if (toggle && nav) {

        toggle.addEventListener('click', function(e) {

            e.stopPropagation();

            nav.classList.toggle('active');

            this.textContent = nav.classList.contains('active') ? '✕' : '☰';

        });

        

        document.addEventListener('click', function(e) {

            if (!nav.contains(e.target) && e.target !== toggle) {

                nav.classList.remove('active');

                toggle.textContent = '☰';

            }

        });

    }

    

    // 3. STICKY CTA

    const stickyCTA = document.getElementById('workshopStickyCTA');

    const hero = document.querySelector('.workshop-hero');

    

    if (stickyCTA && hero) {

        window.addEventListener('scroll', function() {

            if (window.pageYOffset > hero.offsetHeight) {

                stickyCTA.classList.add('visible');

            } else {

                stickyCTA.classList.remove('visible');

            }

        });

    }

    

    // 4. HIDE HEADER

    const header = document.getElementById('workshopHeader');

    if (header) {

        window.addEventListener('scroll', function() {

            if (window.pageYOffset > 300) {

                header.classList.add('hidden');

            } else {

                header.classList.remove('hidden');

            }

        });

    }

    

})();

