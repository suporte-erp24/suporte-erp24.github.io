
(function(){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(x){
      if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target);}
    });
  },{threshold:.1,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el);});

  var cio=new IntersectionObserver(function(entries){
    entries.forEach(function(x){
      if(x.isIntersecting){countUp(x.target);cio.unobserve(x.target);}
    });
  },{threshold:.5});
  document.querySelectorAll('[data-target]').forEach(function(el){el.style.opacity=0;cio.observe(el);});

  function countUp(el){
    var t=+el.dataset.target,d=1200,start=performance.now();
    el.style.opacity=1;
    (function step(now){
      var p=Math.min((now-start)/d,1);
      var e=1-Math.pow(1-p,4);
      el.textContent=Math.floor(e*t);
      if(p<1)requestAnimationFrame(step);
      else el.textContent=t;
    })(start);
  }

  document.addEventListener('click',function(e){
    var target=e.target.closest('a[href^="#"]');
    if(!target)return;
    var href=target.getAttribute('href');
    if(!href||href==='#'||href==='#!')return;
    var el=document.querySelector(href);
    if(el){
      e.preventDefault();
      var top=el.getBoundingClientRect().top+window.pageYOffset-90;
      window.scrollTo({top:top,behavior:'smooth'});
    }
  });
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

