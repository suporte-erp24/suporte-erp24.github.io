
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
    const sticky = document.getElementById('workshopSticky');
    if (sticky) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 800) sticky.classList.add('visible');
            else sticky.classList.remove('visible');
        });
    }
})();

;

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.js-check-item');
    const diagnosticFill = document.getElementById('diagnosticFill');
    const diagnosticText = document.getElementById('diagnosticText');
    const diagnosticBar = document.getElementById('diagnosticBar');
    
    if (!diagnosticFill || !items.length) return;

    const total = items.length;

    function updateState() {
        const checkedCount = document.querySelectorAll('.js-check-item.checked').length;
        const percentage = (checkedCount / total) * 100;
        
        diagnosticFill.style.width = percentage + '%';
        
        // Reset de estados críticos
        diagnosticBar.classList.remove('system-meltdown');
        diagnosticFill.style.boxShadow = '0 0 10px currentColor';

        if (checkedCount === 0) {
            diagnosticText.textContent = 'Sistema Estável';
            diagnosticFill.style.backgroundColor = '#4CAF50';
            diagnosticText.style.color = '#4CAF50';
        } else if (checkedCount === 1) {
            diagnosticText.textContent = '⚠️ 1 Sinal de Alerta';
            diagnosticFill.style.backgroundColor = '#FFC107';
            diagnosticText.style.color = '#FFC107';
        } else if (checkedCount >= 2 && checkedCount <= 3) {
            diagnosticText.textContent = '⚠️ Indigestão Confirmada';
            diagnosticFill.style.backgroundColor = '#FF9800';
            diagnosticText.style.color = '#FF9800';
        } else {
            // COLAPSO OPERACIONAL (4 ou 5 itens)
            diagnosticText.textContent = '🔥 COLAPSO OPERACIONAL 🔥';
            diagnosticFill.style.backgroundColor = '#FF5252';
            diagnosticBar.classList.add('system-meltdown');
        }
    }

    items.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('checked');
            const checkbox = this.querySelector('.workshop-checkbox');
            checkbox.textContent = this.classList.contains('checked') ? '✓' : '';
            checkbox.style.background = this.classList.contains('checked') ? '#D4AF37' : 'transparent';
            checkbox.style.borderColor = this.classList.contains('checked') ? '#D4AF37' : '#444';
            updateState();
        });
    });
});

;

(function() {
    const testimonials = [
        {
            text: "Estes parceiros não vendem teoria. Implementam sistemas reais, em empresas reais, todos os dias.",
            author: "Gabriel Gonçalves, CEO ERP24"
        },
        {
            text: "A nossa rede de parceiros garante que a estratégia de IA sai do papel e gera lucro imediato na tua operação.",
            author: "Andreas Vilela, CEO Sharkcoders"
        }
    ];

    let currentIndex = 0;
    const tText = document.getElementById('tText');
    const tAuthor = document.getElementById('tAuthor');

    if (!tText || !tAuthor) return;

    setInterval(() => {
        tText.classList.add('fade-out');
        tAuthor.classList.add('fade-out');

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            tText.textContent = `"${testimonials[currentIndex].text}"`;
            tAuthor.textContent = testimonials[currentIndex].author;

            tText.classList.remove('fade-out');
            tAuthor.classList.remove('fade-out');
        }, 400);
    }, 5000);
})();

;

function toggleFAQ(button) {
    const item = button.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-answer').style.maxHeight = '0';
    });
    if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

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

