/* Fictional newsroom workstation (MNN, Meridian News Network), Windows 2000 look.
   buildDesk(stage, opts) draws icons, the rundown window and the taskbar. */
window.buildDesk=function(stage,o){
  o=o||{};
  var h='';
  [['docs','My Documents'],['computer','My Computer'],['network','My Network Places'],['bin','Recycle Bin']].forEach(function(x,i){
    h+='<div class="desk-icon" style="left:8px;top:'+(10+i*76)+'px"><i data-icon="'+x[0]+'" data-size="32"></i><span>'+x[1]+'</span></div>';
  });
  h+='<div class="win'+(o.inactive?' inactive':'')+'" id="rd" style="left:120px;top:30px;width:1000px;height:540px;display:flex;flex-direction:column">'+
   '<div class="title"><i data-icon="doc" class="ico"></i><span class="t">Rundown - EVENING 18:00 - MNN-NY-ED-0412</span><b class="tbtn" data-g="min"></b><b class="tbtn" data-g="max"></b><b class="tbtn gap" data-g="x"></b></div>'+
   '<div class="menubar"><span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>S</u>tory</span><span><u>R</u>undown</span><span><u>W</u>indow</span><span><u>H</u>elp</span></div>'+
   '<div class="sunk" style="flex:1;overflow:hidden;margin:2px"><table class="lv"><thead><tr><th>Pg</th><th>Slug</th><th>Reporter</th><th>Fmt</th><th>Est</th><th>Status</th></tr></thead><tbody>'+
   [['A1','TOP-HEAT WAVE','R. Okafor','PKG','2:10','READY'],['A2','HEAT-POWER GRID','L. Haddad','VO/SOT','0:45','READY'],
    ['A3','CITY-TRANSIT FARES','M. Brandt','PKG','1:55','EDIT'],['A4','MARKETS-CLOSE','S. Ivers','RDR','0:30','READY'],
    ['A5','STORM-GULF UPDATE','J. Alvarez','LIVE','1:30','HOLD'],['B1','CONSUMER-GAS PRICES','N. Pierce','VO/SOT','0:40','WRITING'],
    ['B2','HEALTH-SCHOOL SHOTS','T. Moreau','PKG','2:00','EDIT'],['B3','SPORTS-PREVIEW','D. Kim','RDR','0:35','READY'],
    ['C1','KICKER-ZOO BIRTH','A. Russo','VO','0:25','READY']]
   .map(function(r,i){return '<tr'+(i===5?' class="sel"':'')+'><td>'+r.join('</td><td>')+'</td></tr>';}).join('')+
   '</tbody></table></div><div class="status"><div style="flex:3">9 stories  Total 10:30  Back time 18:00:00</div><div>Connected: MNN-NY-NEWS01</div></div></div>';
  h+='<div class="taskbar"><div class="start">Start</div><div class="tsep"></div>'+
     '<div class="task on" id="tk1"><i data-icon="doc"></i>Rundown - EVENING 18:00</div>'+(o.extraTask||'')+
     '<div class="tray">'+(o.clock||'4:47 PM')+'</div></div>';
  stage.insertAdjacentHTML('afterbegin',h);
  if(window.paintIcons)paintIcons(stage);
};
