import{r as w,j as n,u as Ei,a as Di,T as Ai,C as Li,b as Tn,E as ii,F as zi,c as Ii,S as Cn,V as Oi,A as Bi,D as Fi,d as oi,e as Yi,f as ln,R as si,g as Xi}from"./vendor-three-_elsi3OQ.js";import{g as T,L as qi}from"./vendor-animation-BGbbmiRj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function Hi(o,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Wi(o,e,i){return e&&Hi(o.prototype,e),o}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ye,Vr,Ke,Dt,At,sr,ai,qt,wr,li,jt,lt,ci,di=function(){return ye||typeof window<"u"&&(ye=window.gsap)&&ye.registerPlugin&&ye},ui=1,or=[],D=[],gt=[],_r=Date.now,bn=function(e,i){return i},Gi=function(){var e=wr.core,i=e.bridge||{},r=e._scrollers,t=e._proxies;r.push.apply(r,D),t.push.apply(t,gt),D=r,gt=t,bn=function(l,a){return i[l](a)}},Lt=function(e,i){return~gt.indexOf(e)&&gt[gt.indexOf(e)+1][i]},jr=function(e){return!!~li.indexOf(e)},ze=function(e,i,r,t,s){return e.addEventListener(i,r,{passive:t!==!1,capture:!!s})},Le=function(e,i,r,t){return e.removeEventListener(i,r,!!t)},zr="scrollLeft",Ir="scrollTop",vn=function(){return jt&&jt.isPressed||D.cache++},tn=function(e,i){var r=function t(s){if(s||s===0){ui&&(Ke.history.scrollRestoration="manual");var l=jt&&jt.isPressed;s=t.v=Math.round(s)||(jt&&jt.iOS?1:0),e(s),t.cacheID=D.cache,l&&bn("ss",s)}else(i||D.cache!==t.cacheID||bn("ref"))&&(t.cacheID=D.cache,t.v=e());return t.v+t.offset};return r.offset=0,e&&r},Fe={s:zr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tn(function(o){return arguments.length?Ke.scrollTo(o,ue.sc()):Ke.pageXOffset||Dt[zr]||At[zr]||sr[zr]||0})},ue={s:Ir,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fe,sc:tn(function(o){return arguments.length?Ke.scrollTo(Fe.sc(),o):Ke.pageYOffset||Dt[Ir]||At[Ir]||sr[Ir]||0})},qe=function(e,i){return(i&&i._ctx&&i._ctx.selector||ye.utils.toArray)(e)[0]||(typeof e=="string"&&ye.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ui=function(e,i){for(var r=i.length;r--;)if(i[r]===e||i[r].contains(e))return!0;return!1},zt=function(e,i){var r=i.s,t=i.sc;jr(e)&&(e=Dt.scrollingElement||At);var s=D.indexOf(e),l=t===ue.sc?1:2;!~s&&(s=D.push(e)-1),D[s+l]||ze(e,"scroll",vn);var a=D[s+l],p=a||(D[s+l]=tn(Lt(e,r),!0)||(jr(e)?t:tn(function(m){return arguments.length?e[r]=m:e[r]})));return p.target=e,a||(p.smooth=ye.getProperty(e,"scrollBehavior")==="smooth"),p},yn=function(e,i,r){var t=e,s=e,l=_r(),a=l,p=i||50,m=Math.max(500,p*3),A=function(x,H){var X=_r();H||X-l>p?(s=t,t=x,a=l,l=X):r?t+=x:t=s+(x-s)/(X-a)*(l-a)},b=function(){s=t=r?0:t,a=l=0},g=function(x){var H=a,X=s,se=_r();return(x||x===0)&&x!==t&&A(x),l===a||se-a>m?0:(t+(r?X:-X))/((r?se:l)-H)*1e3};return{update:A,reset:b,getVelocity:g}},gr=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Bn=function(e){var i=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(r)?i:r},pi=function(){wr=ye.core.globals().ScrollTrigger,wr&&wr.core&&Gi()},fi=function(e){return ye=e||di(),!Vr&&ye&&typeof document<"u"&&document.body&&(Ke=window,Dt=document,At=Dt.documentElement,sr=Dt.body,li=[Ke,Dt,At,sr],ye.utils.clamp,ci=ye.core.context||function(){},qt="onpointerenter"in sr?"pointer":"mouse",ai=ee.isTouch=Ke.matchMedia&&Ke.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ke||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,lt=ee.eventTypes=("ontouchstart"in At?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in At?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ui=0},500),pi(),Vr=1),Vr};Fe.op=ue;D.cache=0;var ee=function(){function o(i){this.init(i)}var e=o.prototype;return e.init=function(r){Vr||fi(ye)||console.warn("Please gsap.registerPlugin(Observer)"),wr||pi();var t=r.tolerance,s=r.dragMinimum,l=r.type,a=r.target,p=r.lineHeight,m=r.debounce,A=r.preventDefault,b=r.onStop,g=r.onStopDelay,u=r.ignore,x=r.wheelSpeed,H=r.event,X=r.onDragStart,se=r.onDragEnd,U=r.onDrag,xe=r.onPress,M=r.onRelease,Ze=r.onRight,W=r.onLeft,S=r.onUp,Ce=r.onDown,Ye=r.onChangeX,v=r.onChangeY,pe=r.onChange,k=r.onToggleX,ht=r.onToggleY,ae=r.onHover,Me=r.onHoverEnd,Pe=r.onMove,F=r.ignoreCheck,te=r.isNormalizer,re=r.onGestureStart,c=r.onGestureEnd,le=r.onWheel,It=r.onEnable,St=r.onDisable,Qe=r.onClick,mt=r.scrollSpeed,we=r.capture,ne=r.allowClicks,Ee=r.lockAxis,_e=r.onLockAxis;this.target=a=qe(a)||At,this.vars=r,u&&(u=ye.utils.toArray(u)),t=t||1e-9,s=s||0,x=x||1,mt=mt||1,l=l||"wheel,touch,pointer",m=m!==!1,p||(p=parseFloat(Ke.getComputedStyle(sr).lineHeight)||22);var Nt,De,Ae,I,Z,Xe,He,d=this,We=0,xt=0,Rt=r.passive||!A&&r.passive!==!1,V=zt(a,Fe),bt=zt(a,ue),Tt=V(),Ot=bt(),fe=~l.indexOf("touch")&&!~l.indexOf("pointer")&&lt[0]==="pointerdown",Ct=jr(a),Q=a.ownerDocument||Dt,nt=[0,0,0],Je=[0,0,0],vt=0,dr=function(){return vt=_r()},ie=function(_,O){return(d.event=_)&&u&&Ui(_.target,u)||O&&fe&&_.pointerType!=="touch"||F&&F(_,O)},Dr=function(){d._vx.reset(),d._vy.reset(),De.pause(),b&&b(d)},yt=function(){var _=d.deltaX=Bn(nt),O=d.deltaY=Bn(Je),f=Math.abs(_)>=t,N=Math.abs(O)>=t;pe&&(f||N)&&pe(d,_,O,nt,Je),f&&(Ze&&d.deltaX>0&&Ze(d),W&&d.deltaX<0&&W(d),Ye&&Ye(d),k&&d.deltaX<0!=We<0&&k(d),We=d.deltaX,nt[0]=nt[1]=nt[2]=0),N&&(Ce&&d.deltaY>0&&Ce(d),S&&d.deltaY<0&&S(d),v&&v(d),ht&&d.deltaY<0!=xt<0&&ht(d),xt=d.deltaY,Je[0]=Je[1]=Je[2]=0),(I||Ae)&&(Pe&&Pe(d),Ae&&(X&&Ae===1&&X(d),U&&U(d),Ae=0),I=!1),Xe&&!(Xe=!1)&&_e&&_e(d),Z&&(le(d),Z=!1),Nt=0},Qt=function(_,O,f){nt[f]+=_,Je[f]+=O,d._vx.update(_),d._vy.update(O),m?Nt||(Nt=requestAnimationFrame(yt)):yt()},Jt=function(_,O){Ee&&!He&&(d.axis=He=Math.abs(_)>Math.abs(O)?"x":"y",Xe=!0),He!=="y"&&(nt[2]+=_,d._vx.update(_,!0)),He!=="x"&&(Je[2]+=O,d._vy.update(O,!0)),m?Nt||(Nt=requestAnimationFrame(yt)):yt()},Mt=function(_){if(!ie(_,1)){_=gr(_,A);var O=_.clientX,f=_.clientY,N=O-d.x,y=f-d.y,R=d.isDragging;d.x=O,d.y=f,(R||(N||y)&&(Math.abs(d.startX-O)>=s||Math.abs(d.startY-f)>=s))&&(Ae||(Ae=R?2:1),R||(d.isDragging=!0),Jt(N,y))}},Bt=d.onPress=function(C){ie(C,1)||C&&C.button||(d.axis=He=null,De.pause(),d.isPressed=!0,C=gr(C),We=xt=0,d.startX=d.x=C.clientX,d.startY=d.y=C.clientY,d._vx.reset(),d._vy.reset(),ze(te?a:Q,lt[1],Mt,Rt,!0),d.deltaX=d.deltaY=0,xe&&xe(d))},L=d.onRelease=function(C){if(!ie(C,1)){Le(te?a:Q,lt[1],Mt,!0);var _=!isNaN(d.y-d.startY),O=d.isDragging,f=O&&(Math.abs(d.x-d.startX)>3||Math.abs(d.y-d.startY)>3),N=gr(C);!f&&_&&(d._vx.reset(),d._vy.reset(),A&&ne&&ye.delayedCall(.08,function(){if(_r()-vt>300&&!C.defaultPrevented){if(C.target.click)C.target.click();else if(Q.createEvent){var y=Q.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,Ke,1,N.screenX,N.screenY,N.clientX,N.clientY,!1,!1,!1,!1,0,null),C.target.dispatchEvent(y)}}})),d.isDragging=d.isGesturing=d.isPressed=!1,b&&O&&!te&&De.restart(!0),Ae&&yt(),se&&O&&se(d),M&&M(d,f)}},Ft=function(_){return _.touches&&_.touches.length>1&&(d.isGesturing=!0)&&re(_,d.isDragging)},it=function(){return(d.isGesturing=!1)||c(d)},ot=function(_){if(!ie(_)){var O=V(),f=bt();Qt((O-Tt)*mt,(f-Ot)*mt,1),Tt=O,Ot=f,b&&De.restart(!0)}},st=function(_){if(!ie(_)){_=gr(_,A),le&&(Z=!0);var O=(_.deltaMode===1?p:_.deltaMode===2?Ke.innerHeight:1)*x;Qt(_.deltaX*O,_.deltaY*O,0),b&&!te&&De.restart(!0)}},Yt=function(_){if(!ie(_)){var O=_.clientX,f=_.clientY,N=O-d.x,y=f-d.y;d.x=O,d.y=f,I=!0,b&&De.restart(!0),(N||y)&&Jt(N,y)}},er=function(_){d.event=_,ae(d)},wt=function(_){d.event=_,Me(d)},ur=function(_){return ie(_)||gr(_,A)&&Qe(d)};De=d._dc=ye.delayedCall(g||.25,Dr).pause(),d.deltaX=d.deltaY=0,d._vx=yn(0,50,!0),d._vy=yn(0,50,!0),d.scrollX=V,d.scrollY=bt,d.isDragging=d.isGesturing=d.isPressed=!1,ci(this),d.enable=function(C){return d.isEnabled||(ze(Ct?Q:a,"scroll",vn),l.indexOf("scroll")>=0&&ze(Ct?Q:a,"scroll",ot,Rt,we),l.indexOf("wheel")>=0&&ze(a,"wheel",st,Rt,we),(l.indexOf("touch")>=0&&ai||l.indexOf("pointer")>=0)&&(ze(a,lt[0],Bt,Rt,we),ze(Q,lt[2],L),ze(Q,lt[3],L),ne&&ze(a,"click",dr,!0,!0),Qe&&ze(a,"click",ur),re&&ze(Q,"gesturestart",Ft),c&&ze(Q,"gestureend",it),ae&&ze(a,qt+"enter",er),Me&&ze(a,qt+"leave",wt),Pe&&ze(a,qt+"move",Yt)),d.isEnabled=!0,d.isDragging=d.isGesturing=d.isPressed=I=Ae=!1,d._vx.reset(),d._vy.reset(),Tt=V(),Ot=bt(),C&&C.type&&Bt(C),It&&It(d)),d},d.disable=function(){d.isEnabled&&(or.filter(function(C){return C!==d&&jr(C.target)}).length||Le(Ct?Q:a,"scroll",vn),d.isPressed&&(d._vx.reset(),d._vy.reset(),Le(te?a:Q,lt[1],Mt,!0)),Le(Ct?Q:a,"scroll",ot,we),Le(a,"wheel",st,we),Le(a,lt[0],Bt,we),Le(Q,lt[2],L),Le(Q,lt[3],L),Le(a,"click",dr,!0),Le(a,"click",ur),Le(Q,"gesturestart",Ft),Le(Q,"gestureend",it),Le(a,qt+"enter",er),Le(a,qt+"leave",wt),Le(a,qt+"move",Yt),d.isEnabled=d.isPressed=d.isDragging=!1,St&&St(d))},d.kill=d.revert=function(){d.disable();var C=or.indexOf(d);C>=0&&or.splice(C,1),jt===d&&(jt=0)},or.push(d),te&&jr(a)&&(jt=d),d.enable(H)},Wi(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();ee.version="3.14.2";ee.create=function(o){return new ee(o)};ee.register=fi;ee.getAll=function(){return or.slice()};ee.getById=function(o){return or.filter(function(e){return e.vars.id===o})[0]};di()&&ye.registerPlugin(ee);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var h,nr,E,q,Ve,B,Mn,rn,Pr,kr,mr,Or,Ne,sn,wn,Oe,Fn,Yn,ir,gi,cn,hi,Ie,_n,mi,xi,Et,jn,Pn,ar,En,Sr,kn,dn,Br=1,Re=Date.now,un=Re(),rt=0,xr=0,Xn=function(e,i,r){var t=$e(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+i+"Clamp"]=t,t?e.substr(6,e.length-7):e},qn=function(e,i){return i&&(!$e(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},$i=function o(){return xr&&requestAnimationFrame(o)},Hn=function(){return sn=1},Wn=function(){return sn=0},pt=function(e){return e},br=function(e){return Math.round(e*1e5)/1e5||0},bi=function(){return typeof window<"u"},vi=function(){return h||bi()&&(h=window.gsap)&&h.registerPlugin&&h},Vt=function(e){return!!~Mn.indexOf(e)},yi=function(e){return(e==="Height"?En:E["inner"+e])||Ve["client"+e]||B["client"+e]},wi=function(e){return Lt(e,"getBoundingClientRect")||(Vt(e)?function(){return en.width=E.innerWidth,en.height=En,en}:function(){return _t(e)})},Vi=function(e,i,r){var t=r.d,s=r.d2,l=r.a;return(l=Lt(e,"getBoundingClientRect"))?function(){return l()[t]}:function(){return(i?yi(s):e["client"+s])||0}},Ki=function(e,i){return!i||~gt.indexOf(e)?wi(e):function(){return en}},ft=function(e,i){var r=i.s,t=i.d2,s=i.d,l=i.a;return Math.max(0,(r="scroll"+t)&&(l=Lt(e,r))?l()-wi(e)()[s]:Vt(e)?(Ve[r]||B[r])-yi(t):e[r]-e["offset"+t])},Fr=function(e,i){for(var r=0;r<ir.length;r+=3)(!i||~i.indexOf(ir[r+1]))&&e(ir[r],ir[r+1],ir[r+2])},$e=function(e){return typeof e=="string"},Te=function(e){return typeof e=="function"},vr=function(e){return typeof e=="number"},Ht=function(e){return typeof e=="object"},hr=function(e,i,r){return e&&e.progress(i?0:1)&&r&&e.pause()},pn=function(e,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return i(e)}):i(e);r&&r.totalTime&&(e.callbackAnimation=r)}},tr=Math.abs,_i="left",ji="top",Dn="right",An="bottom",Gt="width",Ut="height",Nr="Right",Rr="Left",Tr="Top",Cr="Bottom",oe="padding",et="margin",cr="Width",Ln="Height",de="px",tt=function(e){return E.getComputedStyle(e)},Zi=function(e){var i=tt(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},Gn=function(e,i){for(var r in i)r in e||(e[r]=i[r]);return e},_t=function(e,i){var r=i&&tt(e)[wn]!=="matrix(1, 0, 0, 1, 0, 0)"&&h.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),t=e.getBoundingClientRect();return r&&r.progress(0).kill(),t},nn=function(e,i){var r=i.d2;return e["offset"+r]||e["client"+r]||0},ki=function(e){var i=[],r=e.labels,t=e.duration(),s;for(s in r)i.push(r[s]/t);return i},Qi=function(e){return function(i){return h.utils.snap(ki(e),i)}},zn=function(e){var i=h.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(t,s){return t-s});return r?function(t,s,l){l===void 0&&(l=.001);var a;if(!s)return i(t);if(s>0){for(t-=l,a=0;a<r.length;a++)if(r[a]>=t)return r[a];return r[a-1]}else for(a=r.length,t+=l;a--;)if(r[a]<=t)return r[a];return r[0]}:function(t,s,l){l===void 0&&(l=.001);var a=i(t);return!s||Math.abs(a-t)<l||a-t<0==s<0?a:i(s<0?t-e:t+e)}},Ji=function(e){return function(i,r){return zn(ki(e))(i,r.direction)}},Yr=function(e,i,r,t){return r.split(",").forEach(function(s){return e(i,s,t)})},me=function(e,i,r,t,s){return e.addEventListener(i,r,{passive:!t,capture:!!s})},he=function(e,i,r,t){return e.removeEventListener(i,r,!!t)},Xr=function(e,i,r){r=r&&r.wheelHandler,r&&(e(i,"wheel",r),e(i,"touchmove",r))},Un={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qr={toggleActions:"play",anticipatePin:0},on={top:0,left:0,center:.5,bottom:1,right:1},Kr=function(e,i){if($e(e)){var r=e.indexOf("="),t=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(t*=i/100),e=e.substr(0,r-1)),e=t+(e in on?on[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},Hr=function(e,i,r,t,s,l,a,p){var m=s.startColor,A=s.endColor,b=s.fontSize,g=s.indent,u=s.fontWeight,x=q.createElement("div"),H=Vt(r)||Lt(r,"pinType")==="fixed",X=e.indexOf("scroller")!==-1,se=H?B:r,U=e.indexOf("start")!==-1,xe=U?m:A,M="border-color:"+xe+";font-size:"+b+";color:"+xe+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((X||p)&&H?"fixed;":"absolute;"),(X||p||!H)&&(M+=(t===ue?Dn:An)+":"+(l+parseFloat(g))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),x._isStart=U,x.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),x.style.cssText=M,x.innerText=i||i===0?e+"-"+i:e,se.children[0]?se.insertBefore(x,se.children[0]):se.appendChild(x),x._offset=x["offset"+t.op.d2],Zr(x,0,t,U),x},Zr=function(e,i,r,t){var s={display:"block"},l=r[t?"os2":"p2"],a=r[t?"p2":"os2"];e._isFlipped=t,s[r.a+"Percent"]=t?-100:0,s[r.a]=t?"1px":0,s["border"+l+cr]=1,s["border"+a+cr]=0,s[r.p]=i+"px",h.set(e,s)},P=[],Sn={},Er,$n=function(){return Re()-rt>34&&(Er||(Er=requestAnimationFrame(kt)))},rr=function(){(!Ie||!Ie.isPressed||Ie.startX>B.clientWidth)&&(D.cache++,Ie?Er||(Er=requestAnimationFrame(kt)):kt(),rt||Zt("scrollStart"),rt=Re())},fn=function(){xi=E.innerWidth,mi=E.innerHeight},yr=function(e){D.cache++,(e===!0||!Ne&&!hi&&!q.fullscreenElement&&!q.webkitFullscreenElement&&(!_n||xi!==E.innerWidth||Math.abs(E.innerHeight-mi)>E.innerHeight*.25))&&rn.restart(!0)},Kt={},eo=[],Si=function o(){return he(j,"scrollEnd",o)||Wt(!0)},Zt=function(e){return Kt[e]&&Kt[e].map(function(i){return i()})||eo},Ue=[],Ni=function(e){for(var i=0;i<Ue.length;i+=5)(!e||Ue[i+4]&&Ue[i+4].query===e)&&(Ue[i].style.cssText=Ue[i+1],Ue[i].getBBox&&Ue[i].setAttribute("transform",Ue[i+2]||""),Ue[i+3].uncache=1)},Ri=function(){return D.forEach(function(e){return Te(e)&&++e.cacheID&&(e.rec=e())})},In=function(e,i){var r;for(Oe=0;Oe<P.length;Oe++)r=P[Oe],r&&(!i||r._ctx===i)&&(e?r.kill(1):r.revert(!0,!0));Sr=!0,i&&Ni(i),i||Zt("revert")},Ti=function(e,i){D.cache++,(i||!Be)&&D.forEach(function(r){return Te(r)&&r.cacheID++&&(r.rec=0)}),$e(e)&&(E.history.scrollRestoration=Pn=e)},Be,$t=0,Vn,to=function(){if(Vn!==$t){var e=Vn=$t;requestAnimationFrame(function(){return e===$t&&Wt(!0)})}},Ci=function(){B.appendChild(ar),En=!Ie&&ar.offsetHeight||E.innerHeight,B.removeChild(ar)},Kn=function(e){return Pr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},Wt=function(e,i){if(Ve=q.documentElement,B=q.body,Mn=[E,q,Ve,B],rt&&!e&&!Sr){me(j,"scrollEnd",Si);return}Ci(),Be=j.isRefreshing=!0,Sr||Ri();var r=Zt("refreshInit");gi&&j.sort(),i||In(),D.forEach(function(t){Te(t)&&(t.smooth&&(t.target.style.scrollBehavior="auto"),t(0))}),P.slice(0).forEach(function(t){return t.refresh()}),Sr=!1,P.forEach(function(t){if(t._subPinOffset&&t.pin){var s=t.vars.horizontal?"offsetWidth":"offsetHeight",l=t.pin[s];t.revert(!0,1),t.adjustPinSpacing(t.pin[s]-l),t.refresh()}}),kn=1,Kn(!0),P.forEach(function(t){var s=ft(t.scroller,t._dir),l=t.vars.end==="max"||t._endClamp&&t.end>s,a=t._startClamp&&t.start>=s;(l||a)&&t.setPositions(a?s-1:t.start,l?Math.max(a?s:t.start+1,s):t.end,!0)}),Kn(!1),kn=0,r.forEach(function(t){return t&&t.render&&t.render(-1)}),D.forEach(function(t){Te(t)&&(t.smooth&&requestAnimationFrame(function(){return t.target.style.scrollBehavior="smooth"}),t.rec&&t(t.rec))}),Ti(Pn,1),rn.pause(),$t++,Be=2,kt(2),P.forEach(function(t){return Te(t.vars.onRefresh)&&t.vars.onRefresh(t)}),Be=j.isRefreshing=!1,Zt("refresh")},Nn=0,Qr=1,Mr,kt=function(e){if(e===2||!Be&&!Sr){j.isUpdating=!0,Mr&&Mr.update(0);var i=P.length,r=Re(),t=r-un>=50,s=i&&P[0].scroll();if(Qr=Nn>s?-1:1,Be||(Nn=s),t&&(rt&&!sn&&r-rt>200&&(rt=0,Zt("scrollEnd")),mr=un,un=r),Qr<0){for(Oe=i;Oe-- >0;)P[Oe]&&P[Oe].update(0,t);Qr=1}else for(Oe=0;Oe<i;Oe++)P[Oe]&&P[Oe].update(0,t);j.isUpdating=!1}Er=0},Rn=[_i,ji,An,Dn,et+Cr,et+Nr,et+Tr,et+Rr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Jr=Rn.concat([Gt,Ut,"boxSizing","max"+cr,"max"+Ln,"position",et,oe,oe+Tr,oe+Nr,oe+Cr,oe+Rr]),ro=function(e,i,r){lr(r);var t=e._gsap;if(t.spacerIsNative)lr(t.spacerState);else if(e._gsap.swappedIn){var s=i.parentNode;s&&(s.insertBefore(e,i),s.removeChild(i))}e._gsap.swappedIn=!1},gn=function(e,i,r,t){if(!e._gsap.swappedIn){for(var s=Rn.length,l=i.style,a=e.style,p;s--;)p=Rn[s],l[p]=r[p];l.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(l.display="inline-block"),a[An]=a[Dn]="auto",l.flexBasis=r.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[Gt]=nn(e,Fe)+de,l[Ut]=nn(e,ue)+de,l[oe]=a[et]=a[ji]=a[_i]="0",lr(t),a[Gt]=a["max"+cr]=r[Gt],a[Ut]=a["max"+Ln]=r[Ut],a[oe]=r[oe],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},no=/([A-Z])/g,lr=function(e){if(e){var i=e.t.style,r=e.length,t=0,s,l;for((e.t._gsap||h.core.getCache(e.t)).uncache=1;t<r;t+=2)l=e[t+1],s=e[t],l?i[s]=l:i[s]&&i.removeProperty(s.replace(no,"-$1").toLowerCase())}},Wr=function(e){for(var i=Jr.length,r=e.style,t=[],s=0;s<i;s++)t.push(Jr[s],r[Jr[s]]);return t.t=e,t},io=function(e,i,r){for(var t=[],s=e.length,l=r?8:0,a;l<s;l+=2)a=e[l],t.push(a,a in i?i[a]:e[l+1]);return t.t=e.t,t},en={left:0,top:0},Zn=function(e,i,r,t,s,l,a,p,m,A,b,g,u,x){Te(e)&&(e=e(p)),$e(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Kr("0"+e.substr(3),r):0));var H=u?u.time():0,X,se,U;if(u&&u.seek(0),isNaN(e)||(e=+e),vr(e))u&&(e=h.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,g,e)),a&&Zr(a,r,t,!0);else{Te(i)&&(i=i(p));var xe=(e||"0").split(" "),M,Ze,W,S;U=qe(i,p)||B,M=_t(U)||{},(!M||!M.left&&!M.top)&&tt(U).display==="none"&&(S=U.style.display,U.style.display="block",M=_t(U),S?U.style.display=S:U.style.removeProperty("display")),Ze=Kr(xe[0],M[t.d]),W=Kr(xe[1]||"0",r),e=M[t.p]-m[t.p]-A+Ze+s-W,a&&Zr(a,W,t,r-W<20||a._isStart&&W>20),r-=r-W}if(x&&(p[x]=e||-.001,e<0&&(e=0)),l){var Ce=e+r,Ye=l._isStart;X="scroll"+t.d2,Zr(l,Ce,t,Ye&&Ce>20||!Ye&&(b?Math.max(B[X],Ve[X]):l.parentNode[X])<=Ce+1),b&&(m=_t(a),b&&(l.style[t.op.p]=m[t.op.p]-t.op.m-l._offset+de))}return u&&U&&(X=_t(U),u.seek(g),se=_t(U),u._caScrollDist=X[t.p]-se[t.p],e=e/u._caScrollDist*g),u&&u.seek(H),u?e:Math.round(e)},oo=/(webkit|moz|length|cssText|inset)/i,Qn=function(e,i,r,t){if(e.parentNode!==i){var s=e.style,l,a;if(i===B){e._stOrig=s.cssText,a=tt(e);for(l in a)!+l&&!oo.test(l)&&a[l]&&typeof s[l]=="string"&&l!=="0"&&(s[l]=a[l]);s.top=r,s.left=t}else s.cssText=e._stOrig;h.core.getCache(e).uncache=1,i.appendChild(e)}},Mi=function(e,i,r){var t=i,s=t;return function(l){var a=Math.round(e());return a!==t&&a!==s&&Math.abs(a-t)>3&&Math.abs(a-s)>3&&(l=a,r&&r()),s=t,t=Math.round(l),t}},Gr=function(e,i,r){var t={};t[i.p]="+="+r,h.set(e,t)},Jn=function(e,i){var r=zt(e,i),t="_scroll"+i.p2,s=function l(a,p,m,A,b){var g=l.tween,u=p.onComplete,x={};m=m||r();var H=Mi(r,m,function(){g.kill(),l.tween=0});return b=A&&b||0,A=A||a-m,g&&g.kill(),p[t]=a,p.inherit=!1,p.modifiers=x,x[t]=function(){return H(m+A*g.ratio+b*g.ratio*g.ratio)},p.onUpdate=function(){D.cache++,l.tween&&kt()},p.onComplete=function(){l.tween=0,u&&u.call(g)},g=l.tween=h.to(e,p),g};return e[t]=r,r.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},me(e,"wheel",r.wheelHandler),j.isTouch&&me(e,"touchmove",r.wheelHandler),s},j=function(){function o(i,r){nr||o.register(h)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jn(this),this.init(i,r)}var e=o.prototype;return e.init=function(r,t){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xr){this.update=this.refresh=this.kill=pt;return}r=Gn($e(r)||vr(r)||r.nodeType?{trigger:r}:r,qr);var s=r,l=s.onUpdate,a=s.toggleClass,p=s.id,m=s.onToggle,A=s.onRefresh,b=s.scrub,g=s.trigger,u=s.pin,x=s.pinSpacing,H=s.invalidateOnRefresh,X=s.anticipatePin,se=s.onScrubComplete,U=s.onSnapComplete,xe=s.once,M=s.snap,Ze=s.pinReparent,W=s.pinSpacer,S=s.containerAnimation,Ce=s.fastScrollEnd,Ye=s.preventOverlaps,v=r.horizontal||r.containerAnimation&&r.horizontal!==!1?Fe:ue,pe=!b&&b!==0,k=qe(r.scroller||E),ht=h.core.getCache(k),ae=Vt(k),Me=("pinType"in r?r.pinType:Lt(k,"pinType")||ae&&"fixed")==="fixed",Pe=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],F=pe&&r.toggleActions.split(" "),te="markers"in r?r.markers:qr.markers,re=ae?0:parseFloat(tt(k)["border"+v.p2+cr])||0,c=this,le=r.onRefreshInit&&function(){return r.onRefreshInit(c)},It=Vi(k,ae,v),St=Ki(k,ae),Qe=0,mt=0,we=0,ne=zt(k,v),Ee,_e,Nt,De,Ae,I,Z,Xe,He,d,We,xt,Rt,V,bt,Tt,Ot,fe,Ct,Q,nt,Je,vt,dr,ie,Dr,yt,Qt,Jt,Mt,Bt,L,Ft,it,ot,st,Yt,er,wt;if(c._startClamp=c._endClamp=!1,c._dir=v,X*=45,c.scroller=k,c.scroll=S?S.time.bind(S):ne,De=ne(),c.vars=r,t=t||r.animation,"refreshPriority"in r&&(gi=1,r.refreshPriority===-9999&&(Mr=c)),ht.tweenScroll=ht.tweenScroll||{top:Jn(k,ue),left:Jn(k,Fe)},c.tweenTo=Ee=ht.tweenScroll[v.p],c.scrubDuration=function(f){Ft=vr(f)&&f,Ft?L?L.duration(f):L=h.to(t,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ft,paused:!0,onComplete:function(){return se&&se(c)}}):(L&&L.progress(1).kill(),L=0)},t&&(t.vars.lazy=!1,t._initted&&!c.isReverted||t.vars.immediateRender!==!1&&r.immediateRender!==!1&&t.duration()&&t.render(0,!0,!0),c.animation=t.pause(),t.scrollTrigger=c,c.scrubDuration(b),Mt=0,p||(p=t.vars.id)),M&&((!Ht(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in B.style&&h.set(ae?[B,Ve]:k,{scrollBehavior:"auto"}),D.forEach(function(f){return Te(f)&&f.target===(ae?q.scrollingElement||Ve:k)&&(f.smooth=!1)}),Nt=Te(M.snapTo)?M.snapTo:M.snapTo==="labels"?Qi(t):M.snapTo==="labelsDirectional"?Ji(t):M.directional!==!1?function(f,N){return zn(M.snapTo)(f,Re()-mt<500?0:N.direction)}:h.utils.snap(M.snapTo),it=M.duration||{min:.1,max:2},it=Ht(it)?kr(it.min,it.max):kr(it,it),ot=h.delayedCall(M.delay||Ft/2||.1,function(){var f=ne(),N=Re()-mt<500,y=Ee.tween;if((N||Math.abs(c.getVelocity())<10)&&!y&&!sn&&Qe!==f){var R=(f-I)/V,ge=t&&!pe?t.totalProgress():R,z=N?0:(ge-Bt)/(Re()-mr)*1e3||0,J=h.utils.clamp(-R,1-R,tr(z/2)*z/.185),je=R+(M.inertia===!1?0:J),K,G,Y=M,at=Y.onStart,$=Y.onInterrupt,Ge=Y.onComplete;if(K=Nt(je,c),vr(K)||(K=je),G=Math.max(0,Math.round(I+K*V)),f<=Z&&f>=I&&G!==f){if(y&&!y._initted&&y.data<=tr(G-f))return;M.inertia===!1&&(J=K-R),Ee(G,{duration:it(tr(Math.max(tr(je-ge),tr(K-ge))*.185/z/.05||0)),ease:M.ease||"power3",data:tr(G-f),onInterrupt:function(){return ot.restart(!0)&&$&&$(c)},onComplete:function(){c.update(),Qe=ne(),t&&!pe&&(L?L.resetTo("totalProgress",K,t._tTime/t._tDur):t.progress(K)),Mt=Bt=t&&!pe?t.totalProgress():c.progress,U&&U(c),Ge&&Ge(c)}},f,J*V,G-f-J*V),at&&at(c,Ee.tween)}}else c.isActive&&Qe!==f&&ot.restart(!0)}).pause()),p&&(Sn[p]=c),g=c.trigger=qe(g||u!==!0&&u),wt=g&&g._gsap&&g._gsap.stRevert,wt&&(wt=wt(c)),u=u===!0?g:qe(u),$e(a)&&(a={targets:g,className:a}),u&&(x===!1||x===et||(x=!x&&u.parentNode&&u.parentNode.style&&tt(u.parentNode).display==="flex"?!1:oe),c.pin=u,_e=h.core.getCache(u),_e.spacer?bt=_e.pinState:(W&&(W=qe(W),W&&!W.nodeType&&(W=W.current||W.nativeElement),_e.spacerIsNative=!!W,W&&(_e.spacerState=Wr(W))),_e.spacer=fe=W||q.createElement("div"),fe.classList.add("pin-spacer"),p&&fe.classList.add("pin-spacer-"+p),_e.pinState=bt=Wr(u)),r.force3D!==!1&&h.set(u,{force3D:!0}),c.spacer=fe=_e.spacer,Jt=tt(u),dr=Jt[x+v.os2],Q=h.getProperty(u),nt=h.quickSetter(u,v.a,de),gn(u,fe,Jt),Ot=Wr(u)),te){xt=Ht(te)?Gn(te,Un):Un,d=Hr("scroller-start",p,k,v,xt,0),We=Hr("scroller-end",p,k,v,xt,0,d),Ct=d["offset"+v.op.d2];var ur=qe(Lt(k,"content")||k);Xe=this.markerStart=Hr("start",p,ur,v,xt,Ct,0,S),He=this.markerEnd=Hr("end",p,ur,v,xt,Ct,0,S),S&&(er=h.quickSetter([Xe,He],v.a,de)),!Me&&!(gt.length&&Lt(k,"fixedMarkers")===!0)&&(Zi(ae?B:k),h.set([d,We],{force3D:!0}),Dr=h.quickSetter(d,v.a,de),Qt=h.quickSetter(We,v.a,de))}if(S){var C=S.vars.onUpdate,_=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){c.update(0,0,1),C&&C.apply(S,_||[])})}if(c.previous=function(){return P[P.indexOf(c)-1]},c.next=function(){return P[P.indexOf(c)+1]},c.revert=function(f,N){if(!N)return c.kill(!0);var y=f!==!1||!c.enabled,R=Ne;y!==c.isReverted&&(y&&(st=Math.max(ne(),c.scroll.rec||0),we=c.progress,Yt=t&&t.progress()),Xe&&[Xe,He,d,We].forEach(function(ge){return ge.style.display=y?"none":"block"}),y&&(Ne=c,c.update(y)),u&&(!Ze||!c.isActive)&&(y?ro(u,fe,bt):gn(u,fe,tt(u),ie)),y||c.update(y),Ne=R,c.isReverted=y)},c.refresh=function(f,N,y,R){if(!((Ne||!c.enabled)&&!N)){if(u&&f&&rt){me(o,"scrollEnd",Si);return}!Be&&le&&le(c),Ne=c,Ee.tween&&!y&&(Ee.tween.kill(),Ee.tween=0),L&&L.pause(),H&&t&&(t.revert({kill:!1}).invalidate(),t.getChildren?t.getChildren(!0,!0,!1).forEach(function(Pt){return Pt.vars.immediateRender&&Pt.render(0,!0,!0)}):t.vars.immediateRender&&t.render(0,!0,!0)),c.isReverted||c.revert(!0,!0),c._subPinOffset=!1;var ge=It(),z=St(),J=S?S.duration():ft(k,v),je=V<=.01||!V,K=0,G=R||0,Y=Ht(y)?y.end:r.end,at=r.endTrigger||g,$=Ht(y)?y.start:r.start||(r.start===0||!g?0:u?"0 0":"0 100%"),Ge=c.pinnedContainer=r.pinnedContainer&&qe(r.pinnedContainer,c),ct=g&&Math.max(0,P.indexOf(c))||0,be=ct,ve,ke,Xt,Ar,Se,ce,dt,an,On,pr,ut,fr,Lr;for(te&&Ht(y)&&(fr=h.getProperty(d,v.p),Lr=h.getProperty(We,v.p));be-- >0;)ce=P[be],ce.end||ce.refresh(0,1)||(Ne=c),dt=ce.pin,dt&&(dt===g||dt===u||dt===Ge)&&!ce.isReverted&&(pr||(pr=[]),pr.unshift(ce),ce.revert(!0,!0)),ce!==P[be]&&(ct--,be--);for(Te($)&&($=$(c)),$=Xn($,"start",c),I=Zn($,g,ge,v,ne(),Xe,d,c,z,re,Me,J,S,c._startClamp&&"_startClamp")||(u?-.001:0),Te(Y)&&(Y=Y(c)),$e(Y)&&!Y.indexOf("+=")&&(~Y.indexOf(" ")?Y=($e($)?$.split(" ")[0]:"")+Y:(K=Kr(Y.substr(2),ge),Y=$e($)?$:(S?h.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,I):I)+K,at=g)),Y=Xn(Y,"end",c),Z=Math.max(I,Zn(Y||(at?"100% 0":J),at,ge,v,ne()+K,He,We,c,z,re,Me,J,S,c._endClamp&&"_endClamp"))||-.001,K=0,be=ct;be--;)ce=P[be]||{},dt=ce.pin,dt&&ce.start-ce._pinPush<=I&&!S&&ce.end>0&&(ve=ce.end-(c._startClamp?Math.max(0,ce.start):ce.start),(dt===g&&ce.start-ce._pinPush<I||dt===Ge)&&isNaN($)&&(K+=ve*(1-ce.progress)),dt===u&&(G+=ve));if(I+=K,Z+=K,c._startClamp&&(c._startClamp+=K),c._endClamp&&!Be&&(c._endClamp=Z||-.001,Z=Math.min(Z,ft(k,v))),V=Z-I||(I-=.01)&&.001,je&&(we=h.utils.clamp(0,1,h.utils.normalize(I,Z,st))),c._pinPush=G,Xe&&K&&(ve={},ve[v.a]="+="+K,Ge&&(ve[v.p]="-="+ne()),h.set([Xe,He],ve)),u&&!(kn&&c.end>=ft(k,v)))ve=tt(u),Ar=v===ue,Xt=ne(),Je=parseFloat(Q(v.a))+G,!J&&Z>1&&(ut=(ae?q.scrollingElement||Ve:k).style,ut={style:ut,value:ut["overflow"+v.a.toUpperCase()]},ae&&tt(B)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+v.a.toUpperCase()]="scroll")),gn(u,fe,ve),Ot=Wr(u),ke=_t(u,!0),an=Me&&zt(k,Ar?Fe:ue)(),x?(ie=[x+v.os2,V+G+de],ie.t=fe,be=x===oe?nn(u,v)+V+G:0,be&&(ie.push(v.d,be+de),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=be+de)),lr(ie),Ge&&P.forEach(function(Pt){Pt.pin===Ge&&Pt.vars.pinSpacing!==!1&&(Pt._subPinOffset=!0)}),Me&&ne(st)):(be=nn(u,v),be&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=be+de)),Me&&(Se={top:ke.top+(Ar?Xt-I:an)+de,left:ke.left+(Ar?an:Xt-I)+de,boxSizing:"border-box",position:"fixed"},Se[Gt]=Se["max"+cr]=Math.ceil(ke.width)+de,Se[Ut]=Se["max"+Ln]=Math.ceil(ke.height)+de,Se[et]=Se[et+Tr]=Se[et+Nr]=Se[et+Cr]=Se[et+Rr]="0",Se[oe]=ve[oe],Se[oe+Tr]=ve[oe+Tr],Se[oe+Nr]=ve[oe+Nr],Se[oe+Cr]=ve[oe+Cr],Se[oe+Rr]=ve[oe+Rr],Tt=io(bt,Se,Ze),Be&&ne(0)),t?(On=t._initted,cn(1),t.render(t.duration(),!0,!0),vt=Q(v.a)-Je+V+G,yt=Math.abs(V-vt)>1,Me&&yt&&Tt.splice(Tt.length-2,2),t.render(0,!0,!0),On||t.invalidate(!0),t.parent||t.totalTime(t.totalTime()),cn(0)):vt=V,ut&&(ut.value?ut.style["overflow"+v.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+v.a));else if(g&&ne()&&!S)for(ke=g.parentNode;ke&&ke!==B;)ke._pinOffset&&(I-=ke._pinOffset,Z-=ke._pinOffset),ke=ke.parentNode;pr&&pr.forEach(function(Pt){return Pt.revert(!1,!0)}),c.start=I,c.end=Z,De=Ae=Be?st:ne(),!S&&!Be&&(De<st&&ne(st),c.scroll.rec=0),c.revert(!1,!0),mt=Re(),ot&&(Qe=-1,ot.restart(!0)),Ne=0,t&&pe&&(t._initted||Yt)&&t.progress()!==Yt&&t.progress(Yt||0,!0).render(t.time(),!0,!0),(je||we!==c.progress||S||H||t&&!t._initted)&&(t&&!pe&&(t._initted||we||t.vars.immediateRender!==!1)&&t.totalProgress(S&&I<-.001&&!we?h.utils.normalize(I,Z,0):we,!0),c.progress=je||(De-I)/V===we?0:we),u&&x&&(fe._pinOffset=Math.round(c.progress*vt)),L&&L.invalidate(),isNaN(fr)||(fr-=h.getProperty(d,v.p),Lr-=h.getProperty(We,v.p),Gr(d,v,fr),Gr(Xe,v,fr-(R||0)),Gr(We,v,Lr),Gr(He,v,Lr-(R||0))),je&&!Be&&c.update(),A&&!Be&&!Rt&&(Rt=!0,A(c),Rt=!1)}},c.getVelocity=function(){return(ne()-Ae)/(Re()-mr)*1e3||0},c.endAnimation=function(){hr(c.callbackAnimation),t&&(L?L.progress(1):t.paused()?pe||hr(t,c.direction<0,1):hr(t,t.reversed()))},c.labelToScroll=function(f){return t&&t.labels&&(I||c.refresh()||I)+t.labels[f]/t.duration()*V||0},c.getTrailing=function(f){var N=P.indexOf(c),y=c.direction>0?P.slice(0,N).reverse():P.slice(N+1);return($e(f)?y.filter(function(R){return R.vars.preventOverlaps===f}):y).filter(function(R){return c.direction>0?R.end<=I:R.start>=Z})},c.update=function(f,N,y){if(!(S&&!y&&!f)){var R=Be===!0?st:c.scroll(),ge=f?0:(R-I)/V,z=ge<0?0:ge>1?1:ge||0,J=c.progress,je,K,G,Y,at,$,Ge,ct;if(N&&(Ae=De,De=S?ne():R,M&&(Bt=Mt,Mt=t&&!pe?t.totalProgress():z)),X&&u&&!Ne&&!Br&&rt&&(!z&&I<R+(R-Ae)/(Re()-mr)*X?z=1e-4:z===1&&Z>R+(R-Ae)/(Re()-mr)*X&&(z=.9999)),z!==J&&c.enabled){if(je=c.isActive=!!z&&z<1,K=!!J&&J<1,$=je!==K,at=$||!!z!=!!J,c.direction=z>J?1:-1,c.progress=z,at&&!Ne&&(G=z&&!J?0:z===1?1:J===1?2:3,pe&&(Y=!$&&F[G+1]!=="none"&&F[G+1]||F[G],ct=t&&(Y==="complete"||Y==="reset"||Y in t))),Ye&&($||ct)&&(ct||b||!t)&&(Te(Ye)?Ye(c):c.getTrailing(Ye).forEach(function(Xt){return Xt.endAnimation()})),pe||(L&&!Ne&&!Br?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",z,t._tTime/t._tDur):(L.vars.totalProgress=z,L.invalidate().restart())):t&&t.totalProgress(z,!!(Ne&&(mt||f)))),u){if(f&&x&&(fe.style[x+v.os2]=dr),!Me)nt(br(Je+vt*z));else if(at){if(Ge=!f&&z>J&&Z+1>R&&R+1>=ft(k,v),Ze)if(!f&&(je||Ge)){var be=_t(u,!0),ve=R-I;Qn(u,B,be.top+(v===ue?ve:0)+de,be.left+(v===ue?0:ve)+de)}else Qn(u,fe);lr(je||Ge?Tt:Ot),yt&&z<1&&je||nt(Je+(z===1&&!Ge?vt:0))}}M&&!Ee.tween&&!Ne&&!Br&&ot.restart(!0),a&&($||xe&&z&&(z<1||!dn))&&Pr(a.targets).forEach(function(Xt){return Xt.classList[je||xe?"add":"remove"](a.className)}),l&&!pe&&!f&&l(c),at&&!Ne?(pe&&(ct&&(Y==="complete"?t.pause().totalProgress(1):Y==="reset"?t.restart(!0).pause():Y==="restart"?t.restart(!0):t[Y]()),l&&l(c)),($||!dn)&&(m&&$&&pn(c,m),Pe[G]&&pn(c,Pe[G]),xe&&(z===1?c.kill(!1,1):Pe[G]=0),$||(G=z===1?1:3,Pe[G]&&pn(c,Pe[G]))),Ce&&!je&&Math.abs(c.getVelocity())>(vr(Ce)?Ce:2500)&&(hr(c.callbackAnimation),L?L.progress(1):hr(t,Y==="reverse"?1:!z,1))):pe&&l&&!Ne&&l(c)}if(Qt){var ke=S?R/S.duration()*(S._caScrollDist||0):R;Dr(ke+(d._isFlipped?1:0)),Qt(ke)}er&&er(-R/S.duration()*(S._caScrollDist||0))}},c.enable=function(f,N){c.enabled||(c.enabled=!0,me(k,"resize",yr),ae||me(k,"scroll",rr),le&&me(o,"refreshInit",le),f!==!1&&(c.progress=we=0,De=Ae=Qe=ne()),N!==!1&&c.refresh())},c.getTween=function(f){return f&&Ee?Ee.tween:L},c.setPositions=function(f,N,y,R){if(S){var ge=S.scrollTrigger,z=S.duration(),J=ge.end-ge.start;f=ge.start+J*f/z,N=ge.start+J*N/z}c.refresh(!1,!1,{start:qn(f,y&&!!c._startClamp),end:qn(N,y&&!!c._endClamp)},R),c.update()},c.adjustPinSpacing=function(f){if(ie&&f){var N=ie.indexOf(v.d)+1;ie[N]=parseFloat(ie[N])+f+de,ie[1]=parseFloat(ie[1])+f+de,lr(ie)}},c.disable=function(f,N){if(f!==!1&&c.revert(!0,!0),c.enabled&&(c.enabled=c.isActive=!1,N||L&&L.pause(),st=0,_e&&(_e.uncache=1),le&&he(o,"refreshInit",le),ot&&(ot.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!ae)){for(var y=P.length;y--;)if(P[y].scroller===k&&P[y]!==c)return;he(k,"resize",yr),ae||he(k,"scroll",rr)}},c.kill=function(f,N){c.disable(f,N),L&&!N&&L.kill(),p&&delete Sn[p];var y=P.indexOf(c);y>=0&&P.splice(y,1),y===Oe&&Qr>0&&Oe--,y=0,P.forEach(function(R){return R.scroller===c.scroller&&(y=1)}),y||Be||(c.scroll.rec=0),t&&(t.scrollTrigger=null,f&&t.revert({kill:!1}),N||t.kill()),Xe&&[Xe,He,d,We].forEach(function(R){return R.parentNode&&R.parentNode.removeChild(R)}),Mr===c&&(Mr=0),u&&(_e&&(_e.uncache=1),y=0,P.forEach(function(R){return R.pin===u&&y++}),y||(_e.spacer=0)),r.onKill&&r.onKill(c)},P.push(c),c.enable(!1,!1),wt&&wt(c),t&&t.add&&!V){var O=c.update;c.update=function(){c.update=O,D.cache++,I||Z||c.refresh()},h.delayedCall(.01,c.update),V=.01,I=Z=0}else c.refresh();u&&to()},o.register=function(r){return nr||(h=r||vi(),bi()&&window.document&&o.enable(),nr=xr),nr},o.defaults=function(r){if(r)for(var t in r)qr[t]=r[t];return qr},o.disable=function(r,t){xr=0,P.forEach(function(l){return l[t?"kill":"disable"](r)}),he(E,"wheel",rr),he(q,"scroll",rr),clearInterval(Or),he(q,"touchcancel",pt),he(B,"touchstart",pt),Yr(he,q,"pointerdown,touchstart,mousedown",Hn),Yr(he,q,"pointerup,touchend,mouseup",Wn),rn.kill(),Fr(he);for(var s=0;s<D.length;s+=3)Xr(he,D[s],D[s+1]),Xr(he,D[s],D[s+2])},o.enable=function(){if(E=window,q=document,Ve=q.documentElement,B=q.body,h&&(Pr=h.utils.toArray,kr=h.utils.clamp,jn=h.core.context||pt,cn=h.core.suppressOverwrites||pt,Pn=E.history.scrollRestoration||"auto",Nn=E.pageYOffset||0,h.core.globals("ScrollTrigger",o),B)){xr=1,ar=document.createElement("div"),ar.style.height="100vh",ar.style.position="absolute",Ci(),$i(),ee.register(h),o.isTouch=ee.isTouch,Et=ee.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_n=ee.isTouch===1,me(E,"wheel",rr),Mn=[E,q,Ve,B],h.matchMedia?(o.matchMedia=function(m){var A=h.matchMedia(),b;for(b in m)A.add(b,m[b]);return A},h.addEventListener("matchMediaInit",function(){Ri(),In()}),h.addEventListener("matchMediaRevert",function(){return Ni()}),h.addEventListener("matchMedia",function(){Wt(0,1),Zt("matchMedia")}),h.matchMedia().add("(orientation: portrait)",function(){return fn(),fn})):console.warn("Requires GSAP 3.11.0 or later"),fn(),me(q,"scroll",rr);var r=B.hasAttribute("style"),t=B.style,s=t.borderTopStyle,l=h.core.Animation.prototype,a,p;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",a=_t(B),ue.m=Math.round(a.top+ue.sc())||0,Fe.m=Math.round(a.left+Fe.sc())||0,s?t.borderTopStyle=s:t.removeProperty("border-top-style"),r||(B.setAttribute("style",""),B.removeAttribute("style")),Or=setInterval($n,250),h.delayedCall(.5,function(){return Br=0}),me(q,"touchcancel",pt),me(B,"touchstart",pt),Yr(me,q,"pointerdown,touchstart,mousedown",Hn),Yr(me,q,"pointerup,touchend,mouseup",Wn),wn=h.utils.checkPrefix("transform"),Jr.push(wn),nr=Re(),rn=h.delayedCall(.2,Wt).pause(),ir=[q,"visibilitychange",function(){var m=E.innerWidth,A=E.innerHeight;q.hidden?(Fn=m,Yn=A):(Fn!==m||Yn!==A)&&yr()},q,"DOMContentLoaded",Wt,E,"load",Wt,E,"resize",yr],Fr(me),P.forEach(function(m){return m.enable(0,1)}),p=0;p<D.length;p+=3)Xr(he,D[p],D[p+1]),Xr(he,D[p],D[p+2])}},o.config=function(r){"limitCallbacks"in r&&(dn=!!r.limitCallbacks);var t=r.syncInterval;t&&clearInterval(Or)||(Or=t)&&setInterval($n,t),"ignoreMobileResize"in r&&(_n=o.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Fr(he)||Fr(me,r.autoRefreshEvents||"none"),hi=(r.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(r,t){var s=qe(r),l=D.indexOf(s),a=Vt(s);~l&&D.splice(l,a?6:2),t&&(a?gt.unshift(E,t,B,t,Ve,t):gt.unshift(s,t))},o.clearMatchMedia=function(r){P.forEach(function(t){return t._ctx&&t._ctx.query===r&&t._ctx.kill(!0,!0)})},o.isInViewport=function(r,t,s){var l=($e(r)?qe(r):r).getBoundingClientRect(),a=l[s?Gt:Ut]*t||0;return s?l.right-a>0&&l.left+a<E.innerWidth:l.bottom-a>0&&l.top+a<E.innerHeight},o.positionInViewport=function(r,t,s){$e(r)&&(r=qe(r));var l=r.getBoundingClientRect(),a=l[s?Gt:Ut],p=t==null?a/2:t in on?on[t]*a:~t.indexOf("%")?parseFloat(t)*a/100:parseFloat(t)||0;return s?(l.left+p)/E.innerWidth:(l.top+p)/E.innerHeight},o.killAll=function(r){if(P.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),r!==!0){var t=Kt.killAll||[];Kt={},t.forEach(function(s){return s()})}},o}();j.version="3.14.2";j.saveStyles=function(o){return o?Pr(o).forEach(function(e){if(e&&e.style){var i=Ue.indexOf(e);i>=0&&Ue.splice(i,5),Ue.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),h.core.getCache(e),jn())}}):Ue};j.revert=function(o,e){return In(!o,e)};j.create=function(o,e){return new j(o,e)};j.refresh=function(o){return o?yr(!0):(nr||j.register())&&Wt(!0)};j.update=function(o){return++D.cache&&kt(o===!0?2:0)};j.clearScrollMemory=Ti;j.maxScroll=function(o,e){return ft(o,e?Fe:ue)};j.getScrollFunc=function(o,e){return zt(qe(o),e?Fe:ue)};j.getById=function(o){return Sn[o]};j.getAll=function(){return P.filter(function(o){return o.vars.id!=="ScrollSmoother"})};j.isScrolling=function(){return!!rt};j.snapDirectional=zn;j.addEventListener=function(o,e){var i=Kt[o]||(Kt[o]=[]);~i.indexOf(e)||i.push(e)};j.removeEventListener=function(o,e){var i=Kt[o],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)};j.batch=function(o,e){var i=[],r={},t=e.interval||.016,s=e.batchMax||1e9,l=function(m,A){var b=[],g=[],u=h.delayedCall(t,function(){A(b,g),b=[],g=[]}).pause();return function(x){b.length||u.restart(!0),b.push(x.trigger),g.push(x),s<=b.length&&u.progress(1)}},a;for(a in e)r[a]=a.substr(0,2)==="on"&&Te(e[a])&&a!=="onRefreshInit"?l(a,e[a]):e[a];return Te(s)&&(s=s(),me(j,"refresh",function(){return s=e.batchMax()})),Pr(o).forEach(function(p){var m={};for(a in r)m[a]=r[a];m.trigger=p,i.push(j.create(m))}),i};var ei=function(e,i,r,t){return i>t?e(t):i<0&&e(0),r>t?(t-i)/(r-i):r<0?i/(i-r):1},hn=function o(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(ee.isTouch?" pinch-zoom":""):"none",e===Ve&&o(B,i)},Ur={auto:1,scroll:1},so=function(e){var i=e.event,r=e.target,t=e.axis,s=(i.changedTouches?i.changedTouches[0]:i).target,l=s._gsap||h.core.getCache(s),a=Re(),p;if(!l._isScrollT||a-l._isScrollT>2e3){for(;s&&s!==B&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ur[(p=tt(s)).overflowY]||Ur[p.overflowX]));)s=s.parentNode;l._isScroll=s&&s!==r&&!Vt(s)&&(Ur[(p=tt(s)).overflowY]||Ur[p.overflowX]),l._isScrollT=a}(l._isScroll||t==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Pi=function(e,i,r,t){return ee.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:t=t&&so,onPress:t,onDrag:t,onScroll:t,onEnable:function(){return r&&me(q,ee.eventTypes[0],ri,!1,!0)},onDisable:function(){return he(q,ee.eventTypes[0],ri,!0)}})},ao=/(input|label|select|textarea)/i,ti,ri=function(e){var i=ao.test(e.target.tagName);(i||ti)&&(e._gsapAllow=!0,ti=i)},lo=function(e){Ht(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,r=i.normalizeScrollX,t=i.momentum,s=i.allowNestedScroll,l=i.onRelease,a,p,m=qe(e.target)||Ve,A=h.core.globals().ScrollSmoother,b=A&&A.get(),g=Et&&(e.content&&qe(e.content)||b&&e.content!==!1&&!b.smooth()&&b.content()),u=zt(m,ue),x=zt(m,Fe),H=1,X=(ee.isTouch&&E.visualViewport?E.visualViewport.scale*E.visualViewport.width:E.outerWidth)/E.innerWidth,se=0,U=Te(t)?function(){return t(a)}:function(){return t||2.8},xe,M,Ze=Pi(m,e.type,!0,s),W=function(){return M=!1},S=pt,Ce=pt,Ye=function(){p=ft(m,ue),Ce=kr(Et?1:0,p),r&&(S=kr(0,ft(m,Fe))),xe=$t},v=function(){g._gsap.y=br(parseFloat(g._gsap.y)+u.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},pe=function(){if(M){requestAnimationFrame(W);var te=br(a.deltaY/2),re=Ce(u.v-te);if(g&&re!==u.v+u.offset){u.offset=re-u.v;var c=br((parseFloat(g&&g._gsap.y)||0)-u.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+c+", 0, 1)",g._gsap.y=c+"px",u.cacheID=D.cache,kt()}return!0}u.offset&&v(),M=!0},k,ht,ae,Me,Pe=function(){Ye(),k.isActive()&&k.vars.scrollY>p&&(u()>p?k.progress(1)&&u(p):k.resetTo("scrollY",p))};return g&&h.set(g,{y:"+=0"}),e.ignoreCheck=function(F){return Et&&F.type==="touchmove"&&pe()||H>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){M=!1;var F=H;H=br((E.visualViewport&&E.visualViewport.scale||1)/X),k.pause(),F!==H&&hn(m,H>1.01?!0:r?!1:"x"),ht=x(),ae=u(),Ye(),xe=$t},e.onRelease=e.onGestureStart=function(F,te){if(u.offset&&v(),!te)Me.restart(!0);else{D.cache++;var re=U(),c,le;r&&(c=x(),le=c+re*.05*-F.velocityX/.227,re*=ei(x,c,le,ft(m,Fe)),k.vars.scrollX=S(le)),c=u(),le=c+re*.05*-F.velocityY/.227,re*=ei(u,c,le,ft(m,ue)),k.vars.scrollY=Ce(le),k.invalidate().duration(re).play(.01),(Et&&k.vars.scrollY>=p||c>=p-1)&&h.to({},{onUpdate:Pe,duration:re})}l&&l(F)},e.onWheel=function(){k._ts&&k.pause(),Re()-se>1e3&&(xe=0,se=Re())},e.onChange=function(F,te,re,c,le){if($t!==xe&&Ye(),te&&r&&x(S(c[2]===te?ht+(F.startX-F.x):x()+te-c[1])),re){u.offset&&v();var It=le[2]===re,St=It?ae+F.startY-F.y:u()+re-le[1],Qe=Ce(St);It&&St!==Qe&&(ae+=Qe-St),u(Qe)}(re||te)&&kt()},e.onEnable=function(){hn(m,r?!1:"x"),j.addEventListener("refresh",Pe),me(E,"resize",Pe),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=x.smooth=!1),Ze.enable()},e.onDisable=function(){hn(m,!0),he(E,"resize",Pe),j.removeEventListener("refresh",Pe),Ze.kill()},e.lockAxis=e.lockAxis!==!1,a=new ee(e),a.iOS=Et,Et&&!u()&&u(1),Et&&h.ticker.add(pt),Me=a._dc,k=h.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Mi(u,u(),function(){return k.pause()})},onUpdate:kt,onComplete:Me.vars.onComplete}),a};j.sort=function(o){if(Te(o))return P.sort(o);var e=E.pageYOffset||0;return j.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+E.innerHeight}),P.sort(o||function(i,r){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};j.observe=function(o){return new ee(o)};j.normalizeScroll=function(o){if(typeof o>"u")return Ie;if(o===!0&&Ie)return Ie.enable();if(o===!1){Ie&&Ie.kill(),Ie=o;return}var e=o instanceof ee?o:lo(o);return Ie&&Ie.target===e.target&&Ie.kill(),Vt(e.target)&&(Ie=e),e};j.core={_getVelocityProp:yn,_inputObserver:Pi,_scrollers:D,_proxies:gt,bridge:{ss:function(){rt||Zt("scrollStart"),rt=Re()},ref:function(){return Ne}}};vi()&&h.registerPlugin(j);const ni=[{name:"الرئيسية",href:"#home"},{name:"لماذا لازورد",href:"#about"},{name:"خدمات المختبرات",href:"#services"},{name:"الحلول",href:"#solutions"},{name:"التسعير",href:"#pricing"},{name:"التعلم",href:"#learning"}],co=()=>{const[o,e]=w.useState(!1),[i,r]=w.useState(!1),[t,s]=w.useState("home");w.useEffect(()=>{const a=()=>{e(window.scrollY>50)},p={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},m=b=>{b.forEach(g=>{g.isIntersecting&&s(g.target.id)})},A=new IntersectionObserver(m,p);return ni.forEach(b=>{const g=document.getElementById(b.href.substring(1));g&&A.observe(g)}),window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a),A.disconnect()}},[]);const l=a=>{s(a),r(!1)};return n.jsxs("nav",{className:`navbar glass-panel ${o?"scrolled":""}`,children:[n.jsxs("div",{className:"navbar-container",children:[n.jsxs("div",{className:"logo",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[n.jsx("div",{className:"logo-icon",children:n.jsxs("svg",{width:"42",height:"42",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:"logoGrad",x1:"20",y1:"10",x2:"80",y2:"90",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#0A1922"}),n.jsx("stop",{offset:"0.5",stopColor:"#6fa8dc"}),n.jsx("stop",{offset:"1",stopColor:"#7ec8b8"})]}),n.jsxs("filter",{id:"glow",children:[n.jsx("feGaussianBlur",{stdDeviation:"2",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:"M50 8 L85 28 L85 72 L50 92 L15 72 L15 28 Z",fill:"url(#logoGrad)",opacity:"0.8"}),n.jsx("path",{d:"M50 18 L72 32 L72 68 L50 82 L28 68 L28 32 Z",stroke:"#7ec8b8",strokeWidth:"1.5",fill:"none",filter:"url(#glow)"}),n.jsx("path",{d:"M50 30 L62 38 L62 62 L50 70 L38 62 L38 38 Z",stroke:"rgba(126,200,184,0.4)",strokeWidth:"1",fill:"none"}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"#7ec8b8",filter:"url(#glow)"}),n.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fff"})]})}),n.jsx("span",{className:"logo-text",children:"لازورد"})]}),n.jsx("div",{className:`nav-links ${i?"open":""}`,children:ni.map(a=>n.jsx("a",{href:a.href,className:t===a.href.substring(1)?"active":"",onClick:()=>l(a.href.substring(1)),children:a.name},a.href))}),n.jsxs("div",{className:"nav-actions",children:[n.jsx("span",{className:"nav-phone",style:{marginLeft:"15px",color:"var(--text-muted)",fontSize:"0.9rem"},children:"هاتف: 0599998531-(970)"}),n.jsx("a",{href:"#",className:"login-link",children:"تسجيل الدخول"}),n.jsx("button",{className:"btn-primary",children:"ابدأ الآن"})]}),n.jsxs("button",{className:"menu-toggle","aria-label":"القائمة","aria-expanded":i,onClick:()=>r(!i),children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})]}),n.jsx("style",{children:`
        .nav-links a.active {
          color: var(--accent-cyan) !important;
        }
        .nav-links a.active::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-links.open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(10, 25, 34, 0.95);
            padding: 20px;
            border-radius: var(--border-radius-sm);
            border: 1px solid rgba(126, 200, 184, 0.2);
            gap: 15px;
            text-align: center;
          }
        }
      `})]})},uo=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.timeline({defaults:{ease:"power4.out"}}).from(".hero-badge",{opacity:0,y:30,duration:1.2,delay:.5}).from(".hero-title .brand",{opacity:0,y:80,duration:1.5,scale:.95},"-=0.8").from(".hero-subtitle",{opacity:0,y:50,duration:1.2},"-=1").from(".hero-description",{opacity:0,scale:.9,duration:1.2},"-=1").from(".hero-actions button",{opacity:0,y:30,duration:1,stagger:.2},"-=0.8").from(".hero-ui-line",{width:0,duration:1.5,opacity:0},"-=1.2")},o);return()=>e.revert()},[]),n.jsxs("section",{id:"home",className:"hero-section",ref:o,children:[n.jsxs("div",{className:"hero-ui-decor",children:[n.jsx("div",{className:"hero-ui-line",style:{position:"absolute",top:"20%",left:"10%",height:"1px",background:"rgba(126, 200, 184, 0.15)",opacity:.3}}),n.jsx("div",{className:"hero-ui-line",style:{position:"absolute",bottom:"20%",right:"10%",height:"1px",background:"rgba(111, 168, 220, 0.15)",opacity:.3}})]}),n.jsxs("div",{className:"hero-content container",children:[n.jsx("div",{className:"hero-badge",children:"مستقبل طب الأسنان الرقمي"}),n.jsx("h1",{className:"hero-title",children:n.jsx("span",{className:"brand glow-text",children:"مختبر الأسنان الرقمي مع التواصل في الوقت الحقيقي"})}),n.jsx("p",{className:"hero-description reveal",style:{opacity:1,transform:"none"},children:"نحن نعمل على تمكين الآلاف من عيادات طب الأسنان من خلال تدفقات عمل مبتكرة لتعزيز رعاية المرضى وإحداث ثورة في طريقة فحصهم وطلبهم والتعاون في العمل المختبري."}),n.jsxs("div",{className:"hero-actions",children:[n.jsx("button",{className:"btn-primary",children:"ابدأ الآن"}),n.jsx("button",{className:"btn-secondary",children:"شاهد الفيديو"})]})]}),n.jsxs("div",{className:"scroll-indicator",children:[n.jsx("div",{className:"mouse"}),n.jsx("span",{style:{letterSpacing:"2px",textTransform:"uppercase"},children:"SCROLL TO EXPLORE"})]}),n.jsx("style",{children:`
        .hero-ui-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .hero-ui-line {
          width: 250px;
        }
      `})]})};T.registerPlugin(j);const mn=({target:o,prefix:e="",suffix:i=""})=>{const[r,t]=w.useState(0),s=w.useRef(null);return w.useEffect(()=>{if(!s.current)return;const l={val:0};j.create({trigger:s.current,start:"top 90%",once:!0,onEnter:()=>{T.to(l,{val:o,duration:2.5,ease:"power3.out",onUpdate:()=>{const p=o%1!==0?l.val.toFixed(1):Math.round(l.val).toString();s.current.innerText=`${e}${p}${i}`}})}})},[o,e,i]),n.jsxs("h2",{className:"stat-value",ref:s,style:{direction:"ltr",display:"inline-block"},children:[e,"0",i]})},po=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".stat-card",{y:60,opacity:0,duration:.9,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 80%"}}),T.from(".stats-title",{y:30,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 85%"}})},o);return()=>e.revert()},[]),n.jsxs("section",{className:"stats-section container",ref:o,children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{className:"stats-title",style:{maxWidth:"800px",margin:"0 auto",lineHeight:"1.4"},children:"الآلاف من الممارسات تثق في لازورد في أعمالها المخبرية"})}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(mn,{target:50,prefix:"+",suffix:"K"}),n.jsx("p",{className:"stat-label",children:"تقييمات حالة 5 نجوم"})]}),n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(mn,{target:30,prefix:"$",suffix:"K"}),n.jsx("p",{className:"stat-label",children:"تم الحفظ مقدماً"})]}),n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(mn,{target:1.5,prefix:"+",suffix:"M"}),n.jsx("p",{className:"stat-label",children:"تم تسليم الابتسامات السعيدة"})]})]}),n.jsx("style",{children:`
        .stats-section {
          padding: 140px 0; /* Plenty of whitespace */
        }
        
        .breathable-card {
          padding: 60px 40px !important;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          background: rgba(10, 25, 34, 0.6) !important;
          border-color: rgba(126, 200, 184, 0.15) !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2) !important;
        }

        .breathable-card:hover {
          border-color: rgba(126, 200, 184, 0.4) !important;
          box-shadow: 0 20px 50px rgba(126, 200, 184, 0.1) !important;
        }

        .stat-value {
          font-size: 4.5rem !important;
          font-weight: 800 !important;
          margin: 0;
          line-height: 1;
          color: var(--accent-cyan) !important;
          background: none !important;
          -webkit-text-fill-color: var(--accent-cyan) !important;
          text-shadow: 0 0 30px rgba(126, 200, 184, 0.2);
          font-family: 'Inter', sans-serif; /* High contrast numbers */
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 1.25rem !important;
          color: var(--text-main) !important;
          font-weight: 500;
          margin: 0;
          opacity: 0.95;
        }

        .stats-title {
          font-size: 2.8rem;
          color: var(--text-main);
          margin-bottom: 70px;
        }

        @media (max-width: 1024px) {
          .stat-value {
            font-size: 3.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 100px 0;
          }
          .stats-title {
            font-size: 2.2rem;
            margin-bottom: 50px;
          }
          .breathable-card {
            padding: 45px 30px !important;
          }
        }
      `})]})},fo=""+new URL("best1-BdXNPnIu.png",import.meta.url).href,go=""+new URL("best2-C45whcBq.png",import.meta.url).href,ho=""+new URL("best3-DwcBH6Cm.png",import.meta.url).href;T.registerPlugin(j);const mo=[{title:"تطوير مهارات كل عضو من الموظفين",description:"اجعل مساعديك يقومون بالمسح بثقة لكل سير عمل رقمي - استفد من التدريب غير المحدود لفريقك كلما دعت الحاجة.",image:fo},{title:"تحسين تجربة المريض",description:"ارفع مستوى رعاية المرضى من خلال ابتكارات مثل أطقم الأسنان ذات الموعد النهائي، والأجزاء الجزئية المباشرة إلى النهاية، والماسح الضوئي رقم 1 في طب الأسنان الترميمي.",image:go},{title:"زيادة القدرة على التنبؤ بالعلاج",description:"استخدم أدوات المسح المتقدمة - تصور التصميمات الرقمية والموافقة عليها، وتعزيز نتائج قبول الحالة، وتقديم نتائج ناجحة للمرضى مع التحكم المطلق.",image:ho}],xo=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".about-card-rich",{y:60,opacity:0,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 75%"}})},o);return()=>e.revert()},[]),n.jsxs("section",{id:"about",ref:o,className:"about-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"تحقيق نتائج أفضل لممارستك ومرضاك"})}),n.jsx("div",{className:"about-rich-grid",children:mo.map((e,i)=>n.jsxs("div",{className:"about-card-rich glass-panel",children:[n.jsx("div",{className:"image-glow-backdrop"}),n.jsx("div",{className:"about-card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.title,className:"about-card-img"})}),n.jsxs("div",{className:"about-card-content",children:[n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.description})]})]},i))}),n.jsx("style",{children:`
        .about-rich-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .about-card-rich {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: var(--border-radius);
          overflow: hidden;
          padding: 0;
          transition: transform 0.6s var(--transition-smooth), box-shadow 0.6s;
          background: rgba(10, 25, 34, 0.5); /* Deep dark navy base */
          border: 1px solid rgba(126, 200, 184, 0.1);
        }

        .about-card-rich:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(126, 200, 184, 0.08);
          border-color: rgba(126, 200, 184, 0.3);
        }

        /* Soft glow behind the image for high-tech aesthetic */
        .image-glow-backdrop {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 180px;
          background: radial-gradient(ellipse at center, rgba(126, 200, 184, 0.15) 0%, transparent 70%);
          filter: blur(20px);
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.6s;
        }

        .about-card-rich:hover .image-glow-backdrop {
          opacity: 1;
          background: radial-gradient(ellipse at center, rgba(126, 200, 184, 0.25) 0%, transparent 70%);
        }

        .about-card-image-wrapper {
          width: 100%;
          height: 220px;
          position: relative;
          z-index: 1;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .about-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--border-radius) - 2px) calc(var(--border-radius) - 2px) 0 0;
          transition: transform 0.8s var(--transition-smooth);
        }

        /* Adding the subtle floating element animation */
        @keyframes float-img {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-4px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }

        .about-card-rich:hover .about-card-img {
          animation: float-img 4s ease-in-out infinite;
        }

        .about-card-content {
          padding: 25px 30px 35px;
          text-align: center;
          position: relative;
          z-index: 2;
          background: linear-gradient(to bottom, transparent, rgba(10, 25, 34, 0.8));
          flex-grow: 1;
        }

        .about-card-content h3 {
          color: var(--accent-cyan);
          font-size: 1.25rem;
          margin-bottom: 15px;
          font-weight: 700;
          transition: color 0.4s;
        }

        .about-card-content p {
          color: var(--text-main); /* White/very light grey for body text as requested */
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .about-rich-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-rich-grid {
            grid-template-columns: 1fr;
          }
          .about-card-image-wrapper {
            height: 200px;
          }
        }
      `})]})},bo=""+new URL("Collaborative Workflow-DNgr2HsI.png",import.meta.url).href,vo=""+new URL("Innovative Products-DoSiVwE4.png",import.meta.url).href,yo=""+new URL("Fully Digital Lab-DE_9_uxZ.png",import.meta.url).href,wo=""+new URL("Expertise on Demand-yRwmJxkd.png",import.meta.url).href;T.registerPlugin(j);const _o=[{title:"سير العمل التعاوني",text:"احصل على مراجعات المسح في الوقت الفعلي واعتمد تصميمات الحالات ثلاثية الأبعاد للتحكم النهائي في عملك المختبري.",image:bo},{title:"المنتجات المبتكرة",text:"قم بتقديم خدمات تغير قواعد اللعبة مثل التيجان لمدة 5 أيام، وأطقم الأسنان ذات الموعد النهائي، والأجزاء الجزئية المباشرة حتى النهاية.",image:vo},{title:"مختبر رقمي بالكامل",text:"يمكنك الوصول إلى فنيينا ذوي المستوى العالمي الذين يتمتعون بأحدث تقنيات طب الأسنان وأوقات التسليم الرائدة في الصناعة.",image:yo},{title:"الخبرة عند الطلب",text:"يمكنك الوصول إلى خبراتنا السريريين للحصول على إرشادات ودعم شخصيين عبر الهاتف أو الرسائل النصية أو البريد الإلكتروني أو الدردشة المباشرة خلال دقائق.",image:wo}],jo=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".feature-card-cinematic",{y:60,opacity:0,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 75%"}})},o);return()=>e.revert()},[]),n.jsxs("section",{id:"solutions",ref:o,className:"innovation-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"الابتكار"}),n.jsx("h2",{children:"تعزيز مستقبل طب الأسنان الرقمي"}),n.jsx("p",{children:"لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض."})]}),n.jsx("div",{className:"about-grid innovation-cards-grid",children:_o.map((e,i)=>n.jsxs("div",{className:"feature-card-cinematic glass-panel",children:[n.jsx("div",{className:"card-highlight"}),n.jsx("div",{className:"card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.title,className:"card-image"})}),n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.text})]},i))}),n.jsx("style",{children:`
        .innovation-cards-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 28px !important;
        }
        .feature-card-cinematic {
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
          display: flex;
          flex-direction: column;
        }
        .feature-card-cinematic:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }
        .card-image-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          position: relative;
        }
        .card-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 25, 34, 0.5), transparent 50%);
          pointer-events: none;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--transition-smooth);
          display: block;
        }
        .feature-card-cinematic:hover .card-image {
          transform: scale(1.05);
        }
        .feature-card-cinematic h3 {
          color: var(--accent-cyan);
          margin-bottom: 12px;
          font-size: 1.3rem;
          padding: 0 30px;
          padding-top: 24px;
        }
        .feature-card-cinematic p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.95rem;
          padding: 0 30px;
          padding-bottom: 30px;
        }
        .card-highlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(126, 200, 184, 0.3), transparent);
          opacity: 0.6;
          z-index: 2;
        }
        @media (max-width: 768px) {
          .innovation-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .card-image-wrapper {
            height: 180px;
          }
        }
      `})]})},ko=""+new URL("digital scanlond-9d4MXyOt.png",import.meta.url).href;T.registerPlugin(j);const So=[{num:"١",title:"المسح الضوئي بدقة و ثقة ودقة",desc:"استخدم الماسح الضوئي 3Shape TRIOS المجاني للحصول على مسح رقمي دقيق مع مراجعات فورية."},{num:"٢",title:"اطلب العمل المختبري باستخدام الوصفات الطبية الرقمية",desc:"إرسال طلبات العمل المخبري بسهولة مع وصفات رقمية متكاملة وكاملة."},{num:"٣",title:"الموافقة على التصاميم الرقمية قبل التصنيع",desc:"راجع ووافق على التصميمات ثلاثية الأبعاد للحالات قبل عملية التصنيع."},{num:"٤",title:"تتبع الحالات في الوقت الفعلي",desc:"متابعة حالة العمل المخبري وتقدمه في أي وقت ومن أي مكان."},{num:"٥",title:"تسليم العلاج للمريض في أيام",desc:"تسليم نتائج عالية الجودة في فترة زمنية قصيرة مع ضمان رضا المريض."},{num:"٦",title:"كيف يتم مقارنة لازورد مع مختبرات الأسنان الأخرى",desc:"اكتشف الفرق في الجودة والسرعة والتواصل الرقمي المتكامل."}],No=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".workflow-image-wrapper",{x:60,opacity:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 70%"}}),T.from(".workflow-step",{x:-40,opacity:0,duration:.7,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 70%"}})},o);return()=>e.revert()},[]),n.jsxs("section",{id:"workflow",ref:o,className:"workflow-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"سير العمل"}),n.jsx("h2",{children:"قم بتحويل ممارساتك باستخدام سير عمل رقمي مثبت"}),n.jsx("p",{children:"استمتع بمستوى من التحكم لم يكن ممكنًا من قبل."}),n.jsx("p",{style:{marginTop:"15px"},children:"لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض."})]}),n.jsxs("div",{className:"workflow-layout",children:[n.jsx("div",{className:"workflow-image-column",children:n.jsx("div",{className:"workflow-image-wrapper glass-panel",children:n.jsx("img",{src:ko,alt:"سير العمل الرقمي والتواصل",className:"workflow-img"})})}),n.jsx("div",{className:"workflow-steps-column",children:n.jsx("div",{className:"workflow-steps",children:So.map((e,i)=>n.jsxs("div",{className:"workflow-step",children:[n.jsx("div",{className:"workflow-step-number",children:e.num}),n.jsxs("div",{className:"workflow-step-content",children:[n.jsx("h4",{children:e.title}),n.jsx("p",{children:e.desc})]})]},i))})})]}),n.jsx("style",{children:`
        .workflow-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-top: 50px;
        }

        .workflow-image-wrapper {
          width: 100%;
          border-radius: var(--border-radius);
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(126, 200, 184, 0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2), 0 0 40px rgba(126, 200, 184, 0.05);
        }

        .workflow-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(126, 200, 184, 0.05), transparent 50%);
          pointer-events: none;
        }

        .workflow-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: var(--border-radius);
          transition: transform 1s var(--transition-smooth);
        }

        .workflow-image-wrapper:hover .workflow-img {
          transform: scale(1.03);
        }

        .workflow-steps-column {
          position: relative;
        }

        .workflow-steps {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .workflow-steps::before {
          content: '';
          position: absolute;
          right: 28px;
          top: 20px;
          bottom: 40px;
          width: 1.5px;
          background: linear-gradient(to bottom, transparent, rgba(126, 200, 184, 0.3), rgba(111, 168, 220, 0.2), transparent);
          z-index: 1;
        }

        .workflow-step {
          display: flex;
          gap: 25px;
          padding: 24px 0;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .workflow-step-number {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 1px solid rgba(126, 200, 184, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-cyan);
          position: relative;
          z-index: 3;
          box-shadow: 0 0 20px rgba(126, 200, 184, 0.05);
          transition: all 0.5s var(--transition-smooth);
        }

        .workflow-step:hover .workflow-step-number {
          background: rgba(126, 200, 184, 0.1);
          box-shadow: 0 0 30px rgba(126, 200, 184, 0.15);
          transform: scale(1.1);
          border-color: var(--accent-cyan);
        }

        .workflow-step-content {
          flex: 1;
          padding-top: 8px;
        }

        .workflow-step-content h4 {
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 8px;
          transition: color 0.4s;
        }

        .workflow-step:hover h4 {
          color: var(--accent-cyan);
        }

        .workflow-step-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .workflow-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .workflow-image-column {
            order: -1;
          }
        }
      `})]})},Ro=""+new URL("Zirconia Crowns-ua-TryUW.png",import.meta.url).href,To=""+new URL("Implant Solutions-dFtQr6W5.png",import.meta.url).href,Co=""+new URL("Full Dentures-9fJQE7NI.png",import.meta.url).href,Mo=""+new URL("Removable Partial Dentures-BSIfQsfS.png",import.meta.url).href,Po=""+new URL("3D Printed Night Guards-Bkw7xPMZ.png",import.meta.url).href,Eo=""+new URL("Clear Aligners-DvbczjPD.png",import.meta.url).href,Do=""+new URL("Sleep Apnea Devices-BjC_lTTD.png",import.meta.url).href;T.registerPlugin(j);const Ao=[{name:"تيجان الزركونيا لمدة 5 أيام",image:Ro},{name:"حلول زراعة الأسنان الشاملة",image:To},{name:"طقم الأسنان ذو الموعد الثاني",image:Co},{name:"أجزاء مباشرة إلى النهاية",image:Mo},{name:"واقيات ليلية مطبوعة بتقنية ثلاثية الأبعاد",image:Po},{name:"تقويم الأسنان الشفاف",image:Eo},{name:"أجهزة علاج انقطاع التنفس أثناء النوم",image:Do}],Lo=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".product-card",{y:40,opacity:0,duration:.7,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 75%"}})},o);return()=>e.revert()},[]),n.jsxs("section",{id:"services",ref:o,className:"services-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"المنتجات"}),n.jsx("h2",{children:"أطلق العنان للابتكار الرائد في السوق مع مختبر طب الأسنان الخاص بنا"}),n.jsx("p",{children:"لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض."})]}),n.jsx("div",{className:"services-grid products-grid",children:Ao.map((e,i)=>n.jsxs("div",{className:"product-card glass-panel flex-card",children:[n.jsx("div",{className:"card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.name,className:"card-image"})}),n.jsx("div",{className:"card-content",children:n.jsx("h4",{children:e.name})})]},i))}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:n.jsx("button",{className:"btn-primary",children:"استكشف جميع منتجات المختبر"})}),n.jsx("style",{children:`
        .products-grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 28px !important;
        }
        .product-card.flex-card {
          padding: 0 !important;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
        }
        .product-card.flex-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }
        .product-card .card-image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          position: relative;
        }
        .product-card .card-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 25, 34, 0.5), transparent 60%);
          pointer-events: none;
        }
        .product-card .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--transition-smooth);
          display: block;
        }
        .product-card.flex-card:hover .card-image {
          transform: scale(1.05);
        }
        .product-card .card-content {
          padding: 24px;
          text-align: center;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-card .card-content h4 {
          margin: 0;
          color: var(--text-main);
          font-size: 1.15rem;
          line-height: 1.5;
        }
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
          .product-card .card-image-wrapper {
            height: 200px;
          }
        }
      `})]})};T.registerPlugin(j);const zo=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".restorative-card",{x:i=>i===0?50:-50,opacity:0,duration:1,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 75%"}})},o);return()=>e.revert()},[]),n.jsxs("section",{id:"restorative",ref:o,className:"restorative-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"حلول طب الأسنان الترميمية لتناسب احتياجاتك"})}),n.jsxs("div",{className:"restorative-grid",children:[n.jsxs("div",{className:"restorative-card glass-panel highlight",children:[n.jsx("h3",{children:"هل أنت جديد في مجال المسح الضوئي؟"}),n.jsx("p",{children:"تقديم نتائج متوقعة للمرضى باستخدام التكنولوجيا والأدوات المبتكرة التي تمنحك التحكم النهائي."}),n.jsxs("ul",{children:[n.jsx("li",{children:"✓ الماسح الضوئي 3Shape TRIOS المجاني"}),n.jsx("li",{children:"✓ سير عمل المسح الرقمي الموجه"}),n.jsx("li",{children:"✓ تدفقات العمل الرقمية لأطقم الأسنان وأكثر من ذلك"}),n.jsx("li",{children:"✓ معاينات تصميم مجانية لإضفاء اللمسات النهائية على القضايا المهمة"})]}),n.jsx("button",{className:"btn-primary",children:"سجل الآن"})]}),n.jsxs("div",{className:"restorative-card glass-panel",children:[n.jsx("h3",{children:"هل تقوم بالمسح الضوئي بالفعل؟"}),n.jsx("p",{children:"قم بتنمية ممارستك من خلال الانتقال إلى سير العمل الرقمي باستخدام مجموعة أدوات طب الأسنان الرقمية المثبتة لدينا."}),n.jsxs("ul",{children:[n.jsx("li",{children:"✓ الماسح الضوئي 3Shape TRIOS المجاني"}),n.jsx("li",{children:"✓ سير عمل المسح الرقمي الموجه"}),n.jsx("li",{children:"✓ مراجعات المسح المباشرة لمزيد من الثقة"}),n.jsx("li",{children:"✓ تدريب ودعم غير محدود"})]}),n.jsx("button",{className:"btn-secondary",children:"احصل على الماسح الضوئي المجاني الخاص بك"})]})]}),n.jsx("style",{children:`
        .restorative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 48px;
        }
        .restorative-card {
          padding: 42px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border: 1px solid rgba(126, 200, 184, 0.06);
          transition: border-color 0.5s, transform 0.5s var(--transition-smooth);
        }
        .restorative-card:hover {
          transform: translateY(-4px);
        }
        .restorative-card.highlight {
          border-color: rgba(126, 200, 184, 0.2);
          background: rgba(126, 200, 184, 0.02);
        }
        .restorative-card h3 {
          font-size: 1.5rem;
          color: var(--text-main);
        }
        .restorative-card p {
          color: var(--text-muted);
          line-height: 1.75;
        }
        .restorative-card ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .restorative-card li {
          color: var(--accent-cyan);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .restorative-card button {
          margin-top: auto;
          width: fit-content;
        }
        @media (max-width: 768px) {
          .restorative-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Io=""+new URL("labs-BQjGWLhv.png",import.meta.url).href,Oo=""+new URL("team-CQ9K8RDc.png",import.meta.url).href,Bo=""+new URL("before-BvA3lgK4.png",import.meta.url).href,Fo=""+new URL("After-Czowy5Kj.png",import.meta.url).href;T.registerPlugin(j);const Yo=({before:o,after:e})=>{const[i,r]=w.useState(50),t=w.useRef(null),s=w.useRef(!1),l=b=>{if(!s.current||!t.current)return;const g=t.current.getBoundingClientRect(),x=Math.max(0,Math.min(b-g.left,g.width))/g.width*100;r(x)},a=b=>{s.current=!0,l(b.clientX),t.current&&(t.current.style.touchAction="none")},p=b=>{l(b.clientX)},m=()=>{s.current=!1,t.current&&(t.current.style.touchAction="auto")},A=b=>{b.key==="ArrowLeft"?r(Math.max(0,i-5)):b.key==="ArrowRight"&&r(Math.min(100,i+5))};return n.jsxs("div",{ref:t,className:"slider-container",onPointerDown:a,onPointerMove:p,onPointerUp:m,onPointerLeave:m,role:"slider",tabIndex:0,"aria-valuenow":Math.round(i),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Before and after comparison slider",onKeyDown:A,children:[n.jsx("div",{className:"slider-image after-img",style:{backgroundImage:`url(${e})`},children:n.jsx("div",{className:"slider-badge",style:{right:"20px"},children:"AFTER"})}),n.jsx("div",{className:"slider-image before-img",style:{backgroundImage:`url(${o})`,clipPath:`inset(0 ${100-i}% 0 0)`},children:n.jsx("div",{className:"slider-badge",style:{left:"20px"},children:"BEFORE"})}),n.jsx("div",{className:"slider-divider",style:{left:`${i}%`},children:n.jsxs("div",{className:"slider-handle",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})}),n.jsx("svg",{style:{transform:"rotate(180deg)"},width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})})]})}),n.jsx("style",{children:`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: ew-resize;
          user-select: none;
          touch-action: pan-y; /* Allow vertical scroll unless dragging */
          border-radius: var(--border-radius);
          overflow: hidden;
        }

        .slider-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .slider-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--text-main);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .slider-handle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(10, 25, 34, 0.85); /* Warm navy */
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(126, 200, 184, 0.3); /* Teal border */
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          gap: 2px;
          transition: transform 0.2s, background 0.2s;
        }

        .slider-handle svg {
          width: 16px;
          height: 16px;
        }

        .slider-container:active .slider-handle {
          transform: scale(0.95);
          background: rgba(10, 25, 34, 1);
        }

        .slider-badge {
          position: absolute;
          bottom: 25px;
          background: rgba(10, 25, 34, 0.8);
          backdrop-filter: blur(4px);
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-main);
          border: 1px solid rgba(126, 200, 184, 0.2);
          z-index: 5;
        }
      `})]})},Xo=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".article-layout-card",{y:50,opacity:0,duration:.9,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 75%"}})},o);return()=>e.revert()},[]),n.jsxs("section",{id:"articles",ref:o,className:"articles-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"تعرف على المزيد حول مستقبل طب الأسنان وكيف يشكله لازورد."})}),n.jsxs("div",{className:"articles-layout",children:[n.jsxs("div",{className:"article-layout-card case-study-card glass-panel",children:[n.jsx("div",{className:"case-study-media",children:n.jsx(Yo,{before:Bo,after:Fo})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"دراسة حالة: 10 وحدات لتحويل ابتسامة الزركونيا"}),n.jsx("button",{className:"login-link",children:"اقرأ المزيد ←"})]})]}),n.jsxs("div",{className:"side-articles",children:[n.jsxs("div",{className:"article-layout-card side-card glass-panel",children:[n.jsx("div",{className:"side-card-media",children:n.jsx("img",{src:Io,alt:"داخل معمل لازورد للمستقبل",loading:"lazy"})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"داخل معمل لازورد للمستقبل"}),n.jsx("button",{className:"login-link",children:"اقرأ المزيد ←"})]})]}),n.jsxs("div",{className:"article-layout-card side-card glass-panel",children:[n.jsx("div",{className:"side-card-media",children:n.jsx("img",{src:Oo,alt:"كيف يعمل لازورد",loading:"lazy"})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"كيف يعمل لازورد"}),n.jsx("button",{className:"login-link",children:"اقرأ المزيد ←"})]})]})]})]}),n.jsx("style",{children:`
        .articles-layout {
          display: grid;
          grid-template-columns: 1.8fr 1fr; /* Emphasis on the slider card */
          gap: 30px;
          margin-top: 40px;
        }

        .article-layout-card {
          display: flex;
          flex-direction: column;
          padding: 24px;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
        }

        .article-layout-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }

        .case-study-media {
          width: 100%;
          height: 480px; /* Large height for the Before/After comparison */
          border-radius: var(--border-radius);
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
        }

        .side-articles {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .side-card-media {
          width: 100%;
          height: 180px;
          border-radius: var(--border-radius);
          overflow: hidden;
          margin-bottom: 20px;
        }

        .side-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s var(--transition-smooth);
        }

        .side-card:hover .side-card-media img {
          transform: scale(1.05);
        }

        .article-card-content {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-grow: 1;
        }

        .article-card-content h3 {
          font-size: 1.35rem;
          color: var(--text-main);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .login-link {
          margin-top: auto;
          color: var(--accent-cyan);
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }

        @media (max-width: 1024px) {
          .articles-layout {
            grid-template-columns: 1fr;
          }
          .case-study-media {
            height: 400px;
          }
          .side-articles {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .side-articles {
            grid-template-columns: 1fr;
          }
          .case-study-media {
            height: 300px;
          }
        }
      `})]})};T.registerPlugin(j);const qo=[{q:"ما هو لازورد؟",a:"لازورد هو مختبر أسنان رقمي متكامل يوفر تواصلاً في الوقت الحقيقي بين أطباء الأسنان والمختبر، مع تقنيات مبتكرة لتحسين جودة العمل وسرعة التسليم."},{q:"ما هي فوائد طب الأسنان الرقمي؟",a:"طب الأسنان الرقمي يوفر دقة أعلى في التصميم والتصنيع، أوقات تسليم أسرع، تكاليف أقل، وتجربة أفضل للمريض مع إمكانية المعاينة قبل التصنيع."},{q:"ما هو مختبر الأسنان الرقمي؟",a:"هو مختبر يستخدم التقنيات الرقمية المتقدمة مثل المسح الضوئي داخل الفم والتصميم بمساعدة الكمبيوتر (CAD) والتصنيع بمساعدة الكمبيوتر (CAM) لإنتاج ترميمات أسنان دقيقة للغاية."},{q:"ما هي سير العمل المبتكرة التي تقدمها لازورد؟",a:"نقدم سير عمل رقمي موجه يشمل المسح الضوئي الدقيق، الوصفات الرقمية، معاينة التصاميم ثلاثية الأبعاد، تتبع الحالات في الوقت الفعلي، والتسليم السريع."},{q:"ما هي منتجات مختبر الأسنان التي تقدمها لازورد؟",a:"نقدم مجموعة واسعة تشمل تيجان الزركونيا، حلول زراعة الأسنان، أطقم الأسنان الرقمية، الواقيات الليلية، والتقويم الشفاف."},{q:"كيف يتم مقارنة لازورد مع مختبرات الأسنان الأخرى؟",a:"لازورد يتميز بالتواصل في الوقت الحقيقي، مختبر رقمي بالكامل، منتجات مبتكرة، خبرة عند الطلب، وأوقات تسليم رائدة في الصناعة مقارنة بالمختبرات التقليدية."}],Ho=()=>{const[o,e]=w.useState(null),i=w.useRef(null),r=t=>{e(o===t?null:t)};return w.useEffect(()=>{const t=T.context(()=>{T.fromTo(".faq-item",{y:40,opacity:0},{y:0,opacity:1,duration:.6,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:i.current,start:"top 80%"}})},i);return()=>t.revert()},[]),n.jsxs("section",{id:"learning",ref:i,className:"faq-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"الأسئلة الشائعة حول لازورد"})}),n.jsx("div",{className:"faq-list",children:qo.map((t,s)=>n.jsxs("div",{className:`faq-item glass-panel ${o===s?"active":""}`,children:[n.jsxs("button",{className:"faq-question",onClick:()=>r(s),"aria-expanded":o===s,"aria-controls":`faq-answer-${s}`,id:`faq-question-${s}`,children:[n.jsx("span",{children:t.q}),n.jsx("span",{className:"faq-toggle",children:o===s?"−":"+"})]}),n.jsx("div",{id:`faq-answer-${s}`,role:"region","aria-labelledby":`faq-question-${s}`,className:"faq-answer",children:n.jsx("p",{children:t.a})})]},s))})]})};T.registerPlugin(j);const Wo=()=>{const o=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".contact-content",{y:60,opacity:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:o.current,start:"top 75%"}})},o);return()=>e.revert()},[]),n.jsxs("section",{id:"contact",ref:o,className:"contact-section container",children:[n.jsxs("div",{className:"contact-content glass-panel",style:{padding:"50px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[n.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"20px"},children:"تواصل معنا"}),n.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"700px",margin:"0 auto"},children:"قم بتطوير ممارساتك مع لازورد - الشريك الرقمي الوحيد المتكامل وقم بتحسين تجربة المريض والحلول السريرية ونمو الأعمال."}),n.jsx("h3",{style:{marginTop:"20px",color:"#fff"},children:"ابدأ اليوم عن طريق ملء النموذج."})]}),n.jsxs("form",{className:"contact-form",onSubmit:e=>e.preventDefault(),style:{maxWidth:"800px",margin:"0 auto"},children:[n.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[n.jsx("input",{type:"text",placeholder:"الاسم الأول",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:"اسم العائلة",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"email",placeholder:"عنوان البريد الإلكتروني",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"tel",placeholder:"رقم الهاتف",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:" دورك في العيادة",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:"اسم عيادتك",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}})]}),n.jsx("p",{style:{marginTop:"30px",fontSize:"0.9rem",color:"var(--text-muted)",textAlign:"center",lineHeight:"1.6"},children:"من خلال تقديم النموذج أعلاه، أؤكد على شروط الاستخدام وسياسة الخصوصية الخاصة بشركة لازورد وأوافق، على أنه يمكن الاتصال بي من قبل شركة لازورد عبر رسالة نصية باستخدام معلومات الاتصال التي قدمتها. قد يتم تطبيق أسعار الرسائل والبيانات ويمكنني الرد بـ STOP لإلغاء الاشتراك في أي وقت."}),n.jsx("div",{style:{textAlign:"center",marginTop:"30px"},children:n.jsx("button",{type:"submit",className:"btn-primary",style:{padding:"15px 60px"},children:"ابدأ الآن"})})]})]}),n.jsx("style",{children:`
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})},Go=()=>n.jsxs("footer",{className:"footer-section",children:[n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"footer-header",style:{textAlign:"center",marginBottom:"60px"},children:[n.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"20px"},children:"هل مازلت تأخذ الانطباعات الجسدية؟"}),n.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem"},children:"نقدم لك كل ما تحتاجه للبدء في طب الأسنان الرقمي — بما في ذلك الماسح الضوئي داخل الفم"})]}),n.jsxs("div",{className:"footer-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"40px"},children:[n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"لازورد"}),n.jsx("a",{href:"#",children:"الصفحة الرئيسية"}),n.jsx("a",{href:"#",children:"تقييمات"}),n.jsx("a",{href:"#",children:"وظائف"}),n.jsx("a",{href:"#",children:"سياسة الخصوصية"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"منتجات"}),n.jsx("a",{href:"#",children:"منتجات"}),n.jsx("a",{href:"#",children:"إتقان والتعلم"}),n.jsx("a",{href:"#",children:"أطقم الأسنان الرقمية"}),n.jsx("a",{href:"#",children:"أقيم الأسنان الفرع"}),n.jsx("a",{href:"#",children:"حلول الزرع"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"ممارسات"}),n.jsx("a",{href:"#",children:"هل بدأت؟ ابدأ هنا"}),n.jsx("a",{href:"#",children:"قصص النجاح"}),n.jsx("a",{href:"#",children:"أقيم إن الممارسة"}),n.jsx("a",{href:"#",children:"تسجيل الدخول"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"موارد"}),n.jsx("a",{href:"#",children:"جديد في ممارسات المسح"}),n.jsx("a",{href:"#",children:"سار مسح شامل"}),n.jsx("a",{href:"#",children:"راجع دليل خدمات مختبر داندي"}),n.jsx("a",{href:"#",children:"خذ ممارستك الرقمية"}),n.jsx("a",{href:"#",children:"اتصل على جميع شيوخ"})]})]}),n.jsx("div",{className:"footer-divider",style:{margin:"60px 0 30px",borderTop:"1px solid rgba(126,200,184,0.04)"}}),n.jsx("div",{className:"footer-bottom",children:n.jsxs("p",{className:"footer-copyright",children:["© ",new Date().getFullYear()," لازورد. جميع الحقوق محفوظة."]})})]}),n.jsx("style",{children:`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]});T.registerPlugin(j);const $r=({position:o,texture:e,title:i,delay:r=0})=>{const t=w.useRef(null),s=w.useRef(null);return Tn(l=>{t.current&&(t.current.position.y+=Math.sin(l.clock.elapsedTime+r)*8e-4,t.current.rotation.y=Math.sin(l.clock.elapsedTime*.4+r)*.03)}),n.jsxs("group",{position:o,children:[n.jsxs("mesh",{ref:s,children:[n.jsx("planeGeometry",{args:[1.6,1]}),n.jsx("meshBasicMaterial",{color:"#7ec8b8",wireframe:!0,transparent:!0,opacity:.1})]}),n.jsxs("mesh",{ref:t,children:[n.jsx("planeGeometry",{args:[1.5,.9]}),n.jsx("meshBasicMaterial",{map:e,transparent:!0,opacity:.4,side:Fi,blending:Bi})]}),n.jsxs("mesh",{position:[0,-.55,0],children:[n.jsx("planeGeometry",{args:[1.5,.015]}),n.jsx("meshBasicMaterial",{color:"#7ec8b8",transparent:!0,opacity:.2})]})]})},Uo=()=>n.jsxs("group",{rotation:[-Math.PI/2,0,0],position:[0,-2,0],children:[n.jsx("gridHelper",{args:[40,40,"#1a3a4a","#0d1a2a"]}),n.jsx(Cn,{count:60,scale:20,size:.8,speed:.15,color:"#7ec8b8"})]}),$o=()=>{const{camera:o}=Ei(),e=w.useRef(null),i=w.useRef(null),r=w.useRef(null),t=w.useRef(null),s=w.useRef(null),l=Di({clinic:"/assets/images/clinic-interior.png",tech:"/assets/images/dental-technology.png",smile:"/assets/images/smile-closeup.png",crown:"/assets/images/dental-crown.png"}),a=w.useMemo(()=>{const p=[];for(let b=0;b<=8*32;b++){const g=b/256,u=g*8*Math.PI*2,x=.2-g*.08,H=-g*1.4+1.4/2;p.push(new Oi(Math.cos(u)*x,H,Math.sin(u)*x))}return new Ai(new Li(p),128,.03,8,!1)},[]);return w.useEffect(()=>{const p=T.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:1.5}});e.current&&i.current&&r.current&&t.current&&(p.to(i.current.position,{y:3.5,z:.5,duration:2},0).to(r.current.position,{y:1.8,duration:2},0).to(t.current.position,{y:-1.2,duration:2},0).to(e.current.rotation,{y:Math.PI*1.5,duration:4},0),p.to(o.position,{x:2,z:8,duration:2},0).to(o.position,{x:-2,y:1,duration:2},2),s.current&&p.to(s.current.position,{y:-1,z:2,duration:2},1).to(s.current.rotation,{y:Math.PI*.2,duration:4},0))},[o]),Tn(p=>{const m=p.clock.elapsedTime;e.current&&(e.current.rotation.y+=.0015,e.current.position.y=Math.sin(m*.3)*.08)}),n.jsxs(n.Fragment,{children:[n.jsx(ii,{preset:"night"}),n.jsx("ambientLight",{intensity:.15}),n.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,intensity:1.2,color:"#7ec8b8",castShadow:!0}),n.jsx("spotLight",{position:[-10,5,5],angle:.2,penumbra:1,intensity:.8,color:"#6fa8dc"}),n.jsx("pointLight",{position:[0,2,5],intensity:.6,color:"#e8e5e0"}),n.jsx(Uo,{}),n.jsxs("group",{ref:e,position:[0,0,0],children:[n.jsx(zi,{speed:1.2,rotationIntensity:.15,floatIntensity:.3,children:n.jsxs("group",{children:[n.jsxs("mesh",{ref:i,position:[0,1.4,0],children:[n.jsx("cylinderGeometry",{args:[.6,.45,.9,32]}),n.jsx("meshPhysicalMaterial",{color:"#f0ede8",metalness:.05,roughness:.12,clearcoat:1,transmission:.1,thickness:.5})]}),n.jsxs("mesh",{ref:r,position:[0,.5,0],children:[n.jsx("cylinderGeometry",{args:[.3,.2,.7,32]}),n.jsx("meshPhysicalMaterial",{color:"#c0cdd8",metalness:.85,roughness:.15})]}),n.jsx("mesh",{ref:t,position:[0,-.6,0],geometry:a,children:n.jsx("meshPhysicalMaterial",{color:"#95a5b0",metalness:.95,roughness:.2})}),n.jsxs("mesh",{position:[0,-.6,0],children:[n.jsx("cylinderGeometry",{args:[.15,.08,1.4,32]}),n.jsx("meshPhysicalMaterial",{color:"#95a5b0",metalness:.95,roughness:.2})]})]})}),n.jsxs("group",{ref:s,children:[n.jsx($r,{position:[-3,1,-2],texture:l.tech,delay:0}),n.jsx($r,{position:[3,2,-3],texture:l.clinic,delay:1}),n.jsx($r,{position:[-2.5,-1.5,-1],texture:l.smile,delay:2}),n.jsx($r,{position:[3.5,-1,-2],texture:l.crown,delay:3})]})]}),n.jsx(Ii,{position:[0,-2,0],opacity:.25,scale:20,blur:2.5,far:4.5}),n.jsx(Cn,{count:180,scale:15,size:1,speed:.25,opacity:.15,color:"#7ec8b8"})]})},xn=({position:o,rotation:e,color:i,metalness:r,roughness:t,geometry:s,delay:l,name:a})=>{const p=w.useRef(null);return w.useEffect(()=>{p.current&&(T.to(p.current.position,{x:o[0]*3,y:o[1]*2.5,z:o[2]*2,duration:2.5,delay:1+l,ease:"expo.out"}),T.to(p.current.rotation,{x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,duration:3,delay:1+l,ease:"power2.out"}))},[o,l]),n.jsxs("mesh",{ref:p,position:[0,0,0],rotation:e,children:[n.jsx("primitive",{object:s,attach:"geometry"}),n.jsx("meshPhysicalMaterial",{color:i,metalness:r,roughness:t,clearcoat:1,emissive:i,emissiveIntensity:.03})]})},Vo=()=>{const o=w.useRef(null);Tn(t=>{o.current&&(o.current.rotation.y+=.004)});const e=new ln(.6,.45,.8,32),i=new ln(.3,.2,.6,32),r=new ln(.2,.1,1.2,32);return n.jsxs("group",{ref:o,children:[n.jsx(xn,{name:"Crown",geometry:e,position:[0,1.2,0],rotation:[0,0,0],color:"#f0ede8",metalness:.1,roughness:.15,delay:.2}),n.jsx(xn,{name:"Abutment",geometry:i,position:[0,.2,0],rotation:[0,0,0],color:"#c0cdd8",metalness:.85,roughness:.2,delay:.4}),n.jsx(xn,{name:"Screw",geometry:r,position:[0,-1,0],rotation:[0,0,0],color:"#95a5b0",metalness:.95,roughness:.3,delay:.6})]})},Ko=({onComplete:o})=>{const[e,i]=w.useState(!0),r=w.useRef(null),t=w.useRef(null);return w.useEffect(()=>{const s=T.timeline();return s.fromTo(t.current,{opacity:0,scale:.8,letterSpacing:"20px"},{opacity:1,scale:1,letterSpacing:"5px",duration:1.5,ease:"power4.out"}),s.to(r.current,{opacity:0,duration:1,delay:3.5,onComplete:()=>{i(!1),o()}}),()=>{s.kill()}},[o]),e?n.jsxs("div",{ref:r,className:"splash-screen",children:[n.jsx("div",{className:"splash-img-bg",style:{backgroundImage:"url(/assets/images/dental-implant.png)",opacity:.03,position:"absolute",inset:0,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"grayscale(1) brightness(1.5)"}}),n.jsx("div",{className:"splash-bg"}),n.jsx("div",{className:"splash-canvas",children:n.jsxs(oi,{camera:{position:[0,0,5],fov:45},children:[n.jsx("color",{attach:"background",args:["#0A1922"]}),n.jsx("ambientLight",{intensity:.4}),n.jsx("pointLight",{position:[10,10,10],intensity:1.5,color:"#7ec8b8"}),n.jsx("pointLight",{position:[-10,-10,-10],intensity:.8,color:"#6fa8dc"}),n.jsx(ii,{preset:"city"}),n.jsx(Yi,{children:n.jsx(Vo,{})}),n.jsx(Cn,{count:150,scale:10,size:1.5,speed:.3,opacity:.3,color:"#7ec8b8"})]})}),n.jsx("div",{className:"splash-content",children:n.jsxs("div",{ref:t,className:"splash-logo",children:[n.jsx("h1",{children:"LAZORD"}),n.jsx("div",{className:"splash-loader",children:n.jsx("div",{className:"loader-bar"})}),n.jsx("p",{children:"M O D E R N   D E N T A L   L A B"})]})}),n.jsx("style",{children:`
        .splash-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0A1922;
          overflow: hidden;
        }

        .splash-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #0F2430 0%, #0A1922 100%);
          opacity: 0.85;
        }

        .splash-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .splash-content {
          position: relative;
          z-index: 2;
          text-align: center;
          pointer-events: none;
        }

        .splash-logo h1 {
          font-family: 'Inter', 'Tajawal', sans-serif;
          font-size: 4.5rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #e8e5e0, #7ec8b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 30px rgba(126, 200, 184, 0.2));
          letter-spacing: 8px;
        }

        .splash-logo p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 15px;
          opacity: 0.7;
          letter-spacing: 3px;
        }

        .splash-loader {
          width: 180px;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.06);
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 2px;
        }

        .loader-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #7ec8b8, #6fa8dc);
          box-shadow: 0 0 12px rgba(126, 200, 184, 0.3);
          animation: load 3s ease-in-out forwards;
        }

        @keyframes load {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `})]}):null};T.registerPlugin(j);function Zo(){const[o,e]=si.useState(!0),i=w.useRef(null);return w.useEffect(()=>{o||window.scrollTo(0,0)},[o]),w.useEffect(()=>{const r=new qi({duration:1.8,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:.7,touchMultiplier:2});function t(s){r.raf(s),requestAnimationFrame(t)}return requestAnimationFrame(t),()=>{r.destroy()}},[]),w.useEffect(()=>{if(o)return;const r=setTimeout(()=>{const t=T.context(()=>{T.utils.toArray("main > section").forEach((l,a)=>{if(a===0){T.set(l,{opacity:1,y:0});return}T.fromTo(l,{opacity:0,y:60},{opacity:1,y:0,duration:1.4,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 92%",end:"top 40%",toggleActions:"play none none none"}});const p=l.querySelector(".section-header");p&&T.fromTo(p,{y:30,opacity:0},{y:0,opacity:1,duration:1.2,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 85%",toggleActions:"play none none none"}})})},i.current);return()=>t.revert()},100);return()=>clearTimeout(r)},[o]),n.jsxs(n.Fragment,{children:[o&&n.jsx(Ko,{onComplete:()=>e(!1)}),n.jsx("div",{className:"canvas-container",children:n.jsx(oi,{camera:{position:[0,0,6],fov:40},dpr:[1,2],gl:{antialias:!0,alpha:!0},children:n.jsx($o,{})})}),n.jsxs("div",{className:`app-content ${o?"hidden":"visible"}`,children:[n.jsx(co,{}),n.jsxs("main",{ref:i,children:[n.jsx(uo,{}),n.jsx(jo,{})," ",n.jsx(zo,{})," ",n.jsx(Lo,{})," ",n.jsx(No,{})," ",n.jsx(xo,{})," ",n.jsx(po,{})," ",n.jsx(Wo,{})," ",n.jsx(Xo,{})," ",n.jsx(Ho,{})," "]}),n.jsx(Go,{})]}),n.jsx("style",{children:`
        .app-content.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .app-content.visible {
          opacity: 1;
          transition: opacity 2s var(--transition-smooth);
        }
        
        /* Sections start invisible — GSAP ScrollTrigger handles reveal */
        main > section {
          opacity: 0;
          will-change: opacity, transform;
        }
        
        /* Hero always visible immediately after splash */
        main > section:first-child {
          opacity: 1;
        }
      `})]})}Xi.createRoot(document.getElementById("root")).render(n.jsx(si.StrictMode,{children:n.jsx(Zo,{})}));
