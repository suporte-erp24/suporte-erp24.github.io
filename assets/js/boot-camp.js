
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

(function(){
    const skills = document.querySelectorAll('.bc90-skill');
    const status = document.getElementById('bc90Status');
    const metaLeft = document.getElementById('bc90MetaLeft');
    const metaRight = document.getElementById('bc90MetaRight');
    const progress = document.getElementById('bc90Progress');
    const log = document.getElementById('bc90Log');
    const reset = document.getElementById('bc90Reset');

    let active = [];

    function loaderHtml(label){
        return `
            <div class="bc90-loader">
                <span>${label}</span>
                <span class="bc90-loader-bars">
                    <span></span><span></span><span></span><span></span>
                </span>
            </div>
        `;
    }

    function renderLog(items, loaderLabel){
        log.innerHTML = items.map(item => {
            const cls = item.type ? ` ${item.type}` : '';
            return `<div class="bc90-line${cls}">${item.text}</div>`;
        }).join('') + loaderHtml(loaderLabel);
    }

    function updateUI(){
        const count = active.length;
        const pct = Math.min((count / 3) * 100, 100);

        metaLeft.textContent = `${count}/3 competências ativadas`;
        metaRight.textContent = `${Math.round(pct)}%`;
        progress.style.width = pct + '%';

        if(count === 0){
            status.textContent = 'Awaiting selection';
            renderLog([
                { text: '> Seleciona 3 competências para iniciar a simulação.', type: 'dim' }
            ], 'system idle');
            return;
        }

        if(count < 3){
            status.textContent = 'Compiling training path';
            const lines = active.map((item, i) => ({
                text: `> Módulo ${String(i + 1).padStart(2,'0')} carregado: ${item.skill}`,
                type: ''
            }));
            lines.push({
                text: `> ${active[active.length - 1].line}`,
                type: 'dim'
            });
            lines.push({
                text: `> Falta${3 - count > 1 ? 'm' : ''} ${3 - count} competência${3 - count > 1 ? 's' : ''} para arrancar.`,
                type: 'warn'
            });
            renderLog(lines, 'compiling');
            return;
        }

        status.textContent = 'Boot camp path ready';
        renderLog([
            { text: '> Estrutura base do Boot Camp ativada com sucesso.', type: 'ok' },
            { text: `> Stack selecionada: ${active.map(a => a.skill).join(' · ')}`, type: '' },
            { text: '> Resultado esperado: equipas mais rápidas, mais autónomas e menos dependentes de improviso.', type: 'dim' },
            { text: '> Estado: lista de espera pronta para abrir.', type: 'ok' }
        ], 'build complete');
    }

    skills.forEach(skill => {
        skill.addEventListener('click', function(){
            const item = {
                skill: this.dataset.skill,
                line: this.dataset.line
            };

            if(this.classList.contains('active')){
                this.classList.remove('active');
                active = active.filter(x => x.skill !== item.skill);
                updateUI();
                return;
            }

            if(active.length >= 3){
                return;
            }

            this.classList.add('active');
            active.push(item);
            updateUI();
        });
    });

    reset.addEventListener('click', function(){
        active = [];
        skills.forEach(skill => skill.classList.remove('active'));
        updateUI();
    });

    updateUI();
})();

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

