/* iframes de video decorativo (autoplay) so depois de a pagina carregar */
(function(){
  function arrancar(){
    [].forEach.call(document.querySelectorAll('iframe[data-ev-src]'), function(f){
      f.src = f.getAttribute('data-ev-src'); f.removeAttribute('data-ev-src');
    });
  }
  if(document.readyState === 'complete') setTimeout(arrancar, 400);
  else window.addEventListener('load', function(){ setTimeout(arrancar, 400); });
})();
