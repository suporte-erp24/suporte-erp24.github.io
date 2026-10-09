
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
    document.querySelectorAll('.rv').forEach(function(el){io.observe(el);});
  }else{
    document.querySelectorAll('.rv').forEach(function(el){el.classList.add('on');});
  }
})();

function showPilar(ev,letter){
  document.querySelectorAll('.ev-letter').forEach(function(el){el.classList.remove('active');});
  document.querySelectorAll('.ev-detail').forEach(function(el){el.classList.remove('active');});
  ev.currentTarget.classList.add('active');
  document.getElementById('pilar-'+letter).classList.add('active');
}
