function(){return function(){var c=!0,f=!1,g=this;var aa=window;function h(a,w){for(var b=0,p=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),x=String(w).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),D=Math.max(p.length,x.length),y=0;0==b&&y<D;y++){var ea=p[y]||"",fa=x[y]||"",ga=RegExp("(\\d*)(\\D*)","g"),ha=RegExp("(\\d*)(\\D*)","g");do{var d=ga.exec(ea)||["","",""],e=ha.exec(fa)||["","",""];if(0==d[0].length&&0==e[0].length)break;b=((0==d[1].length?0:parseInt(d[1],10))<(0==e[1].length?0:parseInt(e[1],10))?-1:(0==d[1].length?0:parseInt(d[1],10))>
(0==e[1].length?0:parseInt(e[1],10))?1:0)||((0==d[2].length)<(0==e[2].length)?-1:(0==d[2].length)>(0==e[2].length)?1:0)||(d[2]<e[2]?-1:d[2]>e[2]?1:0)}while(0==b)}return b};var k,l,m,n;function q(){return g.navigator?g.navigator.userAgent:null}n=m=l=k=f;var r;if(r=q()){var ba=g.navigator;k=0==r.indexOf("Opera");l=!k&&-1!=r.indexOf("MSIE");m=!k&&-1!=r.indexOf("WebKit");n=!k&&!m&&"Gecko"==ba.product}var s=k,t=l,u=n,v=m;function z(){var a=g.document;return a?a.documentMode:void 0}var A;
a:{var B="",C;if(s&&g.opera)var E=g.opera.version,B="function"==typeof E?E():E;else if(u?C=/rv\:([^\);]+)(\)|;)/:t?C=/MSIE\s+([^\);]+)(\)|;)/:v&&(C=/WebKit\/(\S+)/),C)var F=C.exec(q()),B=F?F[1]:"";if(t){var G=z();if(G>parseFloat(B)){A=String(G);break a}}A=B}var H={},I=g.document,ca=!I||!t?void 0:z()||("CSS1Compat"==I.compatMode?parseInt(A,10):5);var J,K,L,M,N,O,P;P=O=N=M=L=K=J=f;var Q=q();Q&&(-1!=Q.indexOf("Firefox")?J=c:-1!=Q.indexOf("Camino")?K=c:-1!=Q.indexOf("iPhone")||-1!=Q.indexOf("iPod")?L=c:-1!=Q.indexOf("iPad")?M=c:-1!=Q.indexOf("Android")?N=c:-1!=Q.indexOf("Chrome")?O=c:-1!=Q.indexOf("Safari")&&(P=c));var da=J,ia=K,ja=L,ka=M,R=N,la=O,ma=P;function S(a){return(a=a.exec(q()))?a[1]:""}var na=function(){if(da)return S(/Firefox\/([0-9.]+)/);if(t||s)return A;if(la)return S(/Chrome\/([0-9.]+)/);if(ma)return S(/Version\/([0-9.]+)/);if(ja||ka){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(q());if(a)return a[1]+"."+a[2]}else{if(R)return(a=S(/Android\s+([0-9.]+)/))?a:S(/Version\/([0-9.]+)/);if(ia)return S(/Camino\/([0-9.]+)/)}return""}();var T,U,V=function(){if(!u)return f;var a=g.Components;if(!a)return f;try{if(!a.classes)return f}catch(w){return f}var b=a.classes,a=a.interfaces,p=b["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),b=b["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),x=b.platformVersion,D=b.version;T=function(a){p.a(x,""+a)};U=function(a){p.a(D,""+a)};return c}(),W;if(R){var oa=/Android\s+([0-9\.]+)/.exec(q());W=oa?oa[1]:"0"}else W="0";var pa=W;
R&&(V?U(2.3):R?h(pa,2.3):h(na,2.3));function qa(a,w){this.width=a;this.height=w}qa.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};!s&&v&&(V?T("533"):t?h(ca,"533"):H["533"]||(H["533"]=0<=h(A,"533")));function ra(a){a=a||aa;return new qa(a.outerWidth,a.outerHeight)}var X=["_"],Y=g;!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());){var $;if($=!X.length)$=void 0!==ra;$?Y[Z]=ra:Y=Y[Z]?Y[Z]:Y[Z]={}};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
