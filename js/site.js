(function(){
  var t=document.querySelector('.menu-toggle'),n=document.getElementById('main-nav');
  if(t)t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
  document.querySelectorAll('.carousel').forEach(function(c){
    var s=c.querySelectorAll('.slide'),i=0,timer;
    function go(k){s[i].classList.remove('active');i=(k+s.length)%s.length;s[i].classList.add('active');var im=s[i].querySelector('img');if(im)im.loading='eager'}
    function auto(){clearInterval(timer);timer=setInterval(function(){go(i+1)},5000)}
    c.querySelector('.c-prev').onclick=function(){go(i-1);auto()};
    c.querySelector('.c-next').onclick=function(){go(i+1);auto()};
    auto();
  });
  var lb=document.querySelector('.lightbox'),links=[].slice.call(document.querySelectorAll('a.lb')),cur=0;
  function show(k){cur=(k+links.length)%links.length;var im=lb.querySelector('img');im.src=links[cur].href;im.alt=links[cur].querySelector('img').alt;lb.hidden=false}
  links.forEach(function(a,k){a.addEventListener('click',function(e){e.preventDefault();show(k)})});
  if(lb){lb.querySelector('.lb-close').onclick=function(){lb.hidden=true};
    lb.querySelector('.lb-prev').onclick=function(){show(cur-1)};lb.querySelector('.lb-next').onclick=function(){show(cur+1)};
    lb.addEventListener('click',function(e){if(e.target===lb)lb.hidden=true});
    document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)})}
  var p=new URLSearchParams(location.search).get('package'),m=document.querySelector('textarea[name=message]');
  if(p&&m)m.value='I\'d like to book: '+p+'\n\n';
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
