/* Firefox 3.6 era browser frame, German UI, as seen in MELANI's 2012 screenshots.
   buildFF(stage,{url,host,tab,secure}) -> returns the page element. */
window.buildFF=function(stage,o){
  var back='<svg width="30" height="30" viewBox="0 0 30 30"><circle cx="15" cy="15" r="13.5" fill="url(#gb)" stroke="#3b6a1f"/><defs><linearGradient id="gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd36a"/><stop offset="1" stop-color="#4c8f22"/></linearGradient></defs><path d="M18 8l-7 7 7 7" stroke="#fff" stroke-width="3.2" fill="none"/></svg>';
  var fwd='<svg width="20" height="22" viewBox="0 0 20 22"><rect x="0.5" y="0.5" width="19" height="21" rx="3" fill="#e9eef3" stroke="#9aa7b4"/><path d="M7 6l5 5-5 5" stroke="#9aa7b4" stroke-width="2.2" fill="none"/></svg>';
  var h='<div class="ff">'+
   '<div class="ff-menu"><span><u>D</u>atei</span><span><u>B</u>earbeiten</span><span><u>A</u>nsicht</span><span><u>C</u>hronik</span><span><u>L</u>esezeichen</span><span><u>E</u>xtras</span><span><u>H</u>ilfe</span></div>'+
   '<div class="ff-nav">'+back+fwd+'<span class="ff-ico" style="color:#2f6db5">&#x21bb;</span><span class="ff-ico" style="color:#b9c2cb">&#x2715;</span><span class="ff-ico" style="color:#c88b2d">&#x2302;</span>'+
   '<div class="ff-url"><span class="ff-id'+(o.secure?' sec':'')+(o.dv?' dv':'')+'">'+(o.host||'')+'</span><span class="ff-u">'+(o.url||'')+'</span></div>'+
   '<div class="ff-search">Google</div></div>'+
   '<div class="ff-bm"><span>Meistbesuchte Seiten</span><span>Erste Schritte</span><span>Aktuelle Nachrichten</span></div>'+
   '<div class="ff-tabs"><div class="ff-tab">'+(o.tab||'')+'</div><div class="ff-plus">+</div></div>'+
   '<div class="ff-warn hide">Als Betrugsversuch gemeldete Website!</div>'+
   '<div class="ff-page"></div>'+
   '<div class="ff-status"><span id="ffst">Fertig</span></div></div>';
  stage.insertAdjacentHTML('afterbegin',h);
  return stage.querySelector('.ff-page');
};
