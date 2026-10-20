/* Hand-drawn period-style icons (our own drawings, no Microsoft artwork).
   Usage: <i data-icon="computer" data-size="32"></i>, title buttons: <b class="tbtn" data-g="x"></b> */
(function(){
  var G={
    min:'<svg width="8" height="7"><rect x="0" y="5" width="6" height="2" fill="#000"/></svg>',
    max:'<svg width="9" height="9"><rect x="0.5" y="0.5" width="8" height="8" fill="none" stroke="#000"/><rect x="0" y="0" width="9" height="2" fill="#000"/></svg>',
    x:'<svg width="8" height="7"><path d="M0 0h2l2 2 2-2h2v1l-3 2.5 3 2.5v1h-2l-2-2-2 2h-2v-1l3-2.5-3-2.5z" fill="#000"/></svg>',
    help:'<svg width="6" height="9"><path d="M0 1l1-1h4l1 1v2l-2 2v1h-2v-2l2-2v-1h-2v1h-2z M2 7h2v2h-2z" fill="#000"/></svg>'
  };
  var I={
    computer:'<svg viewBox="0 0 32 32"><rect x="4" y="3" width="24" height="18" fill="#c0c0c0" stroke="#000"/><rect x="7" y="6" width="18" height="12" fill="#00807f"/><rect x="11" y="21" width="10" height="3" fill="#808080"/><rect x="3" y="24" width="26" height="5" fill="#c0c0c0" stroke="#000"/><rect x="20" y="26" width="6" height="1" fill="#000"/></svg>',
    folder:'<svg viewBox="0 0 32 32"><path d="M2 8h10l2 3h16v16H2z" fill="#e8c34a" stroke="#806000"/><path d="M2 13h28v14H2z" fill="#f7dc6f" stroke="#806000"/></svg>',
    docs:'<svg viewBox="0 0 32 32"><path d="M2 8h10l2 3h16v16H2z" fill="#e8c34a" stroke="#806000"/><rect x="8" y="5" width="15" height="17" fill="#fff" stroke="#000"/><path d="M10 9h11M10 12h11M10 15h8" stroke="#000080"/><path d="M2 15h28v12H2z" fill="#f7dc6f" stroke="#806000"/></svg>',
    network:'<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#3a7bd5" stroke="#000"/><path d="M8 9c4 3 4 6 2 9s1 6 4 7M20 6c-2 4 2 6 5 5M18 26c1-4 5-4 7-7" stroke="#2e8b2e" stroke-width="3" fill="none"/><rect x="18" y="20" width="12" height="9" fill="#c0c0c0" stroke="#000"/><rect x="20" y="22" width="8" height="5" fill="#00807f"/></svg>',
    bin:'<svg viewBox="0 0 32 32"><path d="M8 9h16l-2 20H10z" fill="#d8d8d8" stroke="#000"/><rect x="6" y="6" width="20" height="3" fill="#c0c0c0" stroke="#000"/><path d="M12 12l1 14M16 12v14M20 12l-1 14" stroke="#808080"/></svg>',
    notepad:'<svg viewBox="0 0 16 16"><rect x="2" y="1" width="11" height="14" fill="#fff" stroke="#000"/><path d="M4 4h7M4 6h7M4 8h7M4 10h5" stroke="#000080"/><rect x="2" y="0" width="11" height="2" fill="#3a7bd5"/></svg>',
    cmd:'<svg viewBox="0 0 16 16"><rect x="0.5" y="1.5" width="15" height="13" fill="#000" stroke="#c0c0c0"/><rect x="0.5" y="1.5" width="15" height="2" fill="#0A246A"/><path d="M3 6l3 2-3 2" stroke="#c0c0c0" fill="none"/><path d="M7 11h4" stroke="#c0c0c0"/></svg>',
    chat:'<svg viewBox="0 0 16 16"><path d="M1 2h11v8H6l-3 3v-3H1z" fill="#fff" stroke="#000"/><path d="M8 6h7v6h-2v2l-2-2H8z" fill="#ffd34a" stroke="#000"/></svg>',
    hex:'<svg viewBox="0 0 16 16"><rect x="1" y="1" width="14" height="14" fill="#fff" stroke="#000"/><path d="M3 4h2M7 4h2M11 4h2M3 7h2M7 7h2M11 7h2M3 10h2M7 10h2M3 13h2" stroke="#000080" stroke-width="1.5"/></svg>',
    taskmgr:'<svg viewBox="0 0 16 16"><rect x="1" y="1" width="14" height="14" fill="#000" stroke="#808080"/><path d="M2 12l3-4 3 2 3-6 3 3" stroke="#00ff00" fill="none"/></svg>',
    regedit:'<svg viewBox="0 0 16 16"><rect x="1" y="2" width="5" height="5" fill="#3a7bd5" stroke="#000"/><rect x="8" y="5" width="5" height="5" fill="#d33" stroke="#000"/><rect x="3" y="9" width="5" height="5" fill="#2e8b2e" stroke="#000"/></svg>',
    warn:'<svg viewBox="0 0 32 32"><path d="M16 2L31 29H1z" fill="#ffd800" stroke="#000"/><rect x="14.5" y="10" width="3" height="11" fill="#000"/><rect x="14.5" y="23" width="3" height="3" fill="#000"/></svg>',
    stop:'<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#e00" stroke="#600"/><path d="M10 10l12 12M22 10L10 22" stroke="#fff" stroke-width="4"/></svg>',
    doc:'<svg viewBox="0 0 16 16"><path d="M3 1h7l3 3v11H3z" fill="#fff" stroke="#000"/><path d="M5 6h6M5 8h6M5 10h6M5 12h4" stroke="#808080"/></svg>',
    page:'<svg viewBox="0 0 16 16"><path d="M3 1h7l3 3v11H3z" fill="#fff" stroke="#6a7b94"/><path d="M10 1v3h3" fill="none" stroke="#6a7b94"/></svg>'
  };
  window.ICONS=I;
  function paint(root){
    (root||document).querySelectorAll('[data-g]').forEach(function(e){if(!e.innerHTML)e.innerHTML=G[e.dataset.g]||'';});
    (root||document).querySelectorAll('[data-icon]').forEach(function(e){
      if(e.innerHTML)return;var s=e.dataset.size||16;
      e.innerHTML=(I[e.dataset.icon]||'').replace('<svg ','<svg width="'+s+'" height="'+s+'" ');
      e.style.display='inline-block';e.style.width=s+'px';e.style.height=s+'px';e.style.flex='none';
    });
  }
  window.paintIcons=paint;
  document.addEventListener('DOMContentLoaded',function(){paint();});
})();
