
document.addEventListener("DOMContentLoaded", () => {
    const h = document.getElementById("hamburger");
    const n = document.getElementById("nav-menu");
    const links = document.querySelectorAll("#nav-menu a");
    
    if(h) {
        h.addEventListener("click", e => {
            e.stopPropagation();
            h.classList.toggle("active");
            n.classList.toggle("active");
        });
    }
    
    links.forEach(l => l.addEventListener("click", () => {
        h.classList.remove("active");
        n.classList.remove("active");
    }));
    
    document.addEventListener("click", e => {
        if(n.classList.contains("active") && !n.contains(e.target) && !h.contains(e.target)) {
            h.classList.remove("active");
            n.classList.remove("active");
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

