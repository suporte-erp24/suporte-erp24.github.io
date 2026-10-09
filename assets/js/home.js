
(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded',function(){
    var burger=document.getElementById('ev-burger');
    var nav=document.getElementById('ev-nav');
    if(!burger||!nav)return;

    burger.addEventListener('click',function(e){
      e.stopPropagation();
      burger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(function(l){
      l.addEventListener('click',function(){
        burger.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    document.addEventListener('click',function(e){
      if(nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)){
        burger.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  });

  document.addEventListener('click',function(e){
    var t=e.target.closest('a[href^="#"]');
    if(!t)return;
    var href=t.getAttribute('href');
    if(!href||href==='#'||href==='#!')return;
    var el=document.getElementById(href.substring(1));
    if(!el)return;
    e.preventDefault();
    var top=el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({top:top,behavior:'smooth'});
  });

  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(x){
        if(x.isIntersecting){
          x.target.classList.add('on');
          io.unobserve(x.target);
        }
      });
    },{threshold:.1,rootMargin:'0px 0px -24px 0px'});
    document.querySelectorAll('.e-rv').forEach(function(el){io.observe(el);});
  }else{
    document.querySelectorAll('.e-rv').forEach(function(el){el.classList.add('on');});
  }

  var statEls=document.querySelectorAll('.e-stat-n[data-target]');
  if(statEls.length && 'IntersectionObserver' in window){
    var cio=new IntersectionObserver(function(entries){
      entries.forEach(function(x){
        if(x.isIntersecting){countUp(x.target);cio.unobserve(x.target);}
      });
    },{threshold:.5});
    statEls.forEach(function(el){el.style.opacity=0;cio.observe(el);});
  }
  function countUp(el){
    var t=+el.dataset.target;
    var s=el.dataset.suffix||'';
    var d=1400;
    var start=performance.now();
    el.style.opacity=1;
    function step(now){
      var p=Math.min((now-start)/d,1);
      var e=1-Math.pow(1-p,4);
      el.textContent=Math.floor(e*t)+s;
      if(p<1)requestAnimationFrame(step);
      else el.textContent=t+s;
    }
    requestAnimationFrame(step);
  }
})();
