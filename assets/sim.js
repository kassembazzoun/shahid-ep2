/* Ep2 shared runtime. Inert: no network, no storage, no form ever submits.
   Controls while recording:
     Space / Right arrow  next step in this scene
     Left arrow           restart this scene
     N / B                next / previous scene
   URL options:
     ?clean=1   hide the SIMULATION badge and the reconstruction tags
     ?step=N    open the scene with the first N steps already done
     ?auto=MS   play the steps by themselves, MS milliseconds apart */
(function(){
  var ORDER=['a1-exploit.html','a2-strings.html','a3-irc.html','a4-chat.html','a5-infection.html','a6-scan.html',
    'b1-desktop.html','b2-taskmgr.html','b3-hosts.html','b4-shutdown.html','b5-newsroom.html',
    'c1-lookup.html','c2-clues.html','c3-verdict.html',
    'd1-email.html','d2-3dsecure.html','d3-funnel.html'];

  window.SIM_ORDER=ORDER;window.SIM_BUSY=0;
  var EMBED=(window.parent!==window);
  var q={};location.search.replace(/[?&]([^=&]+)=?([^&]*)/g,function(_,k,v){q[k]=decodeURIComponent(v);});
  var clean=q.clean==='1';
  window.SIM_CLEAN=clean;

  document.addEventListener('submit',function(e){e.preventDefault();},true);

  function fit(){
    var s=document.querySelector('.stage');if(!s)return;
    var w=+s.dataset.w||1280,h=+s.dataset.h||720;
    var z=Math.min(innerWidth/w,innerHeight/h);
    s.style.zoom=z;
  }
  addEventListener('resize',fit);

  var steps=[],at=0,busy=false;
  window.scene=function(list){steps=list;};
  function next(fast){
    if(at>=steps.length)return false;
    var fn=steps[at++];fn(!!fast);return true;
  }
  window.nextStep=next;

  function go(d){
    var f=location.pathname.split('/').pop(),i=ORDER.indexOf(f);
    if(i<0)return;var t=ORDER[i+d];if(!t)return;
    var keep=clean?'?clean=1':'';location.href=t+keep;
  }
  window.goScene=go;

  addEventListener('keydown',function(e){
    if(EMBED){parent.postMessage({sim:'key',key:e.key},'*');e.preventDefault();return;}
    if(e.target&&(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.isContentEditable)&&e.key!=='Enter')return;
    if(e.key===' '||e.key==='ArrowRight'){e.preventDefault();next(false);}
    else if(e.key==='ArrowLeft'){location.reload();}
    else if(e.key==='n'||e.key==='N'){go(1);}
    else if(e.key==='b'||e.key==='B'){go(-1);}
  });

  // Mouse: a click on a real control (link, field, button, checkbox, list row) does
  // what that control does. A click anywhere else on the screen moves to the next step.
  var CTRL='[contenteditable],a,input,textarea,select,button,label,[data-click],.btn,.task,.tbtn,tr,.ff-tab';
  document.addEventListener('click',function(e){
    if(!e.target.closest||!e.target.closest('.stage'))return;
    if(e.target.closest(CTRL))return;
    next(false);
  });
  /* Camera: Z pushes in on the important element of the current step, Z again pulls back.
     The scene decides what is important: [data-focus] first, then the highlighted thing. */
  var FOCUS=['[data-focus]','#dlg','mark.on','tr.hl','tr.sel','.sig','.mark','.ff-warn','#lw'];
  var camIn=false;
  function vis(e){return e.offsetParent!==null&&getComputedStyle(e).visibility!=='hidden'&&!e.closest('#rd');}
  function camera(){
    var s=document.querySelector('.stage'),cam=document.getElementById('cam');if(!s||!cam)return;
    if(camIn){cam.style.transform='none';camIn=false;return;}
    var els=[];for(var i=0;i<FOCUS.length&&!els.length;i++)els=[].slice.call(cam.querySelectorAll(FOCUS[i])).filter(vis);
    if(!els.length)return;
    cam.style.transform='none';
    var z=parseFloat(s.style.zoom)||1,sr=s.getBoundingClientRect(),x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
    els.forEach(function(e){var t=e.tagName==='TR'?e.lastElementChild:e,rg=document.createRange();rg.selectNodeContents(t);var r=rg.getBoundingClientRect();if(!r.width)r=e.getBoundingClientRect();x0=Math.min(x0,r.left);y0=Math.min(y0,r.top);x1=Math.max(x1,r.right);y1=Math.max(y1,r.bottom);});
    var W=s.offsetWidth,H=s.offsetHeight;
    x0=(x0-sr.left)/z;x1=(x1-sr.left)/z;y0=(y0-sr.top)/z;y1=(y1-sr.top)/z;
    var k=Math.min(2.4,Math.max(1.3,Math.min(W*0.85/(x1-x0),H*0.8/(y1-y0))));
    var tx=W/2-k*(x0+x1)/2,ty=H/2-k*(y0+y1)/2;
    tx=Math.min(0,Math.max(W-k*W,tx));ty=Math.min(0,Math.max(H-k*H,ty));
    cam.style.transform='translate('+tx+'px,'+ty+'px) scale('+k+')';camIn=true;
  }
  window.camera=camera;
  addEventListener('keydown',function(e){if(e.key==='z'||e.key==='Z'){if(e.target&&(e.target.tagName==='INPUT'||e.target.isContentEditable))return;camera();}});

  document.addEventListener('DOMContentLoaded',function(){
    var st=document.querySelector('.stage');
    if(st&&!document.getElementById('cam')){
      var cam=document.createElement('div');cam.id='cam';
      [].slice.call(st.childNodes).forEach(function(n){if(!(n.classList&&n.classList.contains('recon')))cam.appendChild(n);});
      st.insertBefore(cam,st.firstChild);
    }
    if(q.nocursor==='1')document.documentElement.classList.add('nocursor');
    if(clean)document.documentElement.classList.add('clean');
    else{var b=document.createElement('div');b.className='sim-badge';b.textContent='SIMULATION';document.body.appendChild(b);}
    fit();
    var n=+q.step||0;
    if(n){document.documentElement.classList.add('nofx');for(var i=0;i<n;i++)next(true);setTimeout(function(){document.documentElement.classList.remove('nofx');},50);}
    if(q.zoom==='1')setTimeout(function(){document.documentElement.classList.add('nofx');camera();},60);
    if(q.auto){var ms=+q.auto||2500,paused=false;
      var idle=function(cb){(function w(){if(window.SIM_BUSY>0||paused)setTimeout(w,150);else cb();})();};
      var loop=function(){setTimeout(function(){idle(function(){if(next(false))loop();else setTimeout(function(){idle(function(){if(EMBED)parent.postMessage({sim:'done'},'*');});},+(q.hold||ms*1.4));});},ms);};
      loop();
      addEventListener('message',function(e){var d=e.data||{};if(d.sim==='pause')paused=!!d.on;else if(d.sim==='next')next(false);});
    }
  });

  /* Helpers used by the scenes */
  window.$=function(s){return document.querySelector(s);};
  window.show=function(s){document.querySelectorAll(s).forEach(function(e){e.classList.remove('hide');});};
  window.hide=function(s){document.querySelectorAll(s).forEach(function(e){e.classList.add('hide');});};
  // Type text into an element one char at a time (instant when fast).
  window.typeText=function(el,text,fast,speed,done){
    if(typeof el==='string')el=$(el);
    var inp=el.tagName==='INPUT'||el.tagName==='TEXTAREA';
    function put(c){if(inp)el.value+=c;else el.textContent+=c;}
    if(fast){put(text);if(done)done();return;}
    window.SIM_BUSY++;var i=0;(function t(){if(i<text.length){put(text.charAt(i++));setTimeout(t,speed||55);}else{window.SIM_BUSY--;if(done)done();}})();
  };
  // Clicking a row in any list view selects it, like Windows does.
  document.addEventListener('click',function(e){
    var tr=e.target.closest&&e.target.closest('table.lv tbody tr');if(!tr)return;
    tr.parentNode.querySelectorAll('tr').forEach(function(r){r.classList.remove('sel');});tr.classList.add('sel');
  });
  // Append lines one after another with a delay (instant when fast).
  window.addLines=function(box,lines,fast,gap,done){
    if(typeof box==='string')box=$(box);
    var i=0;if(!fast)window.SIM_BUSY++;
    function one(){
      if(i>=lines.length){if(!fast)window.SIM_BUSY--;if(done)done();return;}
      var l=lines[i++],d=document.createElement('div');
      if(typeof l==='string')d.textContent=l;else{d.innerHTML=l.html;if(l.cls)d.className=l.cls;}
      box.appendChild(d);box.scrollTop=box.scrollHeight;
      if(fast)one();else setTimeout(one,gap||400);
    }
    one();
  };
  window.pad=function(n,w){n=String(n);while(n.length<w)n='0'+n;return n;};
})();
