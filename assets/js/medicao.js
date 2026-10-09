/* Medicao com consentimento previo (RGPD / ePrivacy).
   Nada e carregado antes de a pessoa aceitar. */
(function(){
  var CHAVE='ev_consent';
  var CFG={ga4:'G-NT5TWBBFHJ',meta:['25633345919697717','139559983413412','25806668535698578'],
           linkedin:'9588297',clarity:'rz3nfzwhdq'};
  function carregarMedicao(){
    if(window.__evMedicao)return; window.__evMedicao=true;
    var s=document.createElement('script');s.async=true;
    s.src='https://www.googletagmanager.com/gtag/js?id='+CFG.ga4;document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){dataLayer.push(arguments);};
    gtag('js',new Date());gtag('config',CFG.ga4);
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;
      n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
      s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
      (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    CFG.meta.forEach(function(id){fbq('init',id);});
    fbq('track','PageView');
    window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];
    window._linkedin_data_partner_ids.push(CFG.linkedin);
    (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};
      window.lintrk.q=[]}var s=document.getElementsByTagName('script')[0];
      var b=document.createElement('script');b.type='text/javascript';b.async=true;
      b.src='https://snap.licdn.com/li.lms-analytics/insight.min.js';
      s.parentNode.insertBefore(b,s);})(window.lintrk);
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})
      (window,document,'clarity','script',CFG.clarity);
  }
  function guardar(v){try{localStorage.setItem(CHAVE,v);}catch(e){}}
  function lido(){try{return localStorage.getItem(CHAVE);}catch(e){return null;}}
  function banner(){
    var d=document.createElement('div');d.className='ev-cookies';d.setAttribute('role','dialog');
    d.setAttribute('aria-label','Consentimento de cookies');
    d.innerHTML='<p>Usamos cookies de medi\u00e7\u00e3o para perceber como o site \u00e9 '+
      'usado. S\u00f3 os ativamos se concordares. <a href="/politica-de-privacidade/">'+
      'Pol\u00edtica de Privacidade</a></p><div><button type="button" class="ev-nao">'+
      'Recusar</button><button type="button" class="ev-sim">Aceitar</button></div>';
    document.body.appendChild(d);
    d.querySelector('.ev-sim').onclick=function(){guardar('sim');d.remove();carregarMedicao();};
    d.querySelector('.ev-nao').onclick=function(){guardar('nao');d.remove();};
  }
  var v=lido();
  if(v==='sim'){carregarMedicao();}
  else if(v!=='nao'){ if(document.readyState==='loading')
    document.addEventListener('DOMContentLoaded',banner); else banner(); }
})();
