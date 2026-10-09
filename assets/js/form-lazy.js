/* O formulario CRM do Bitrix puxa 3 ficheiros externos (loader + app.js +
   app.bundle.min.js, ~400 KB) e ainda a Roboto do Google. Carrega-se so quando
   o bloco entra no ecra: tira tudo isso do caminho critico. */
(function(){
  var alvos=[].slice.call(document.querySelectorAll('[data-ev-form]'));
  if(!alvos.length)return;
  function montar(el){
    if(el.dataset.evMontado)return; el.dataset.evMontado='1';
    var s=document.createElement('script');
    s.setAttribute('data-b24-form', el.getAttribute('data-ev-form'));
    s.setAttribute('data-skip-moving','true');
    el.appendChild(s);
    var u=el.getAttribute('data-ev-loader');
    var t=document.createElement('script');t.async=true;t.src=u+'?'+(Date.now()/180000|0);
    document.head.appendChild(t);
  }
  if(!('IntersectionObserver' in window)){alvos.forEach(montar);return;}
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ montar(e.target); io.unobserve(e.target); } });
  },{rootMargin:'600px 0px'});
  alvos.forEach(function(el){io.observe(el);});
})();
