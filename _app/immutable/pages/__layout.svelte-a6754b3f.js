import{F as P,S,i as q,s as M,l as d,u as N,a as z,m as v,p as b,v as T,h as g,c as A,q as _,G as R,b as V,H as m,n as D,I as j,J,K as F,L as K,x as O,y as U,z as X,M as B,N as Q,O as W,f as I,t as x,C as Y}from"../chunks/index-b9ad0eed.js";const C={title:"VoterFraud2020",menus:[{name:"Home",url:"/"},{name:"Retweet Graph Analysis",url:"/retweet-graph"},{name:"The Paper (arXiv)",url:"https://arxiv.org/abs/2101.08210"},{name:"Download Data (Github)",url:"https://github.com/sTechLab/VoterFraud2020"}]},Z=()=>{const s=P("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},ee={subscribe(s){return Z().page.subscribe(s)}};function G(s,e,t){const r=s.slice();return r[2]=e[t].url,r[3]=e[t].name,r}function L(s){let e,t,r=s[3]+"",l,c;return{c(){e=d("li"),t=d("a"),l=N(r),c=z(),this.h()},l(i){e=v(i,"LI",{class:!0});var a=b(e);t=v(a,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var n=b(t);l=T(n,r),n.forEach(g),c=A(a),a.forEach(g),this.h()},h(){_(t,"sveltekit:prefetch",s[2].match("http")?null:!0),_(t,"href",s[2]),_(t,"class","svelte-1fxzmur"),F(t,"active",s[2]!=="/"?s[0].match(s[2]):s[2]===s[0]),_(e,"class","svelte-1fxzmur")},m(i,a){V(i,e,a),m(e,t),m(t,l),m(e,c)},p(i,a){a&1&&F(t,"active",i[2]!=="/"?i[0].match(i[2]):i[2]===i[0])},d(i){i&&g(e)}}}function te(s){let e,t,r,l,c,i,a,n,f,p,y=C.menus,h=[];for(let u=0;u<y.length;u+=1)h[u]=L(G(s,y,u));return{c(){e=d("header"),t=d("nav"),r=d("a"),l=d("h1"),c=N("VoterFraud2020"),i=z(),a=d("img"),f=z(),p=d("ul");for(let u=0;u<h.length;u+=1)h[u].c();this.h()},l(u){e=v(u,"HEADER",{class:!0});var $=b(e);t=v($,"NAV",{class:!0});var o=b(t);r=v(o,"A",{class:!0,href:!0});var E=b(r);l=v(E,"H1",{class:!0});var k=b(l);c=T(k,"VoterFraud2020"),k.forEach(g),E.forEach(g),i=A(o),a=v(o,"IMG",{src:!0,class:!0,alt:!0}),f=A(o),p=v(o,"UL",{class:!0});var w=b(p);for(let H=0;H<h.length;H+=1)h[H].l(w);w.forEach(g),o.forEach(g),$.forEach(g),this.h()},h(){_(l,"class","svelte-1fxzmur"),_(r,"class","logo svelte-1fxzmur"),_(r,"href","/"),R(a.src,n="https://storage.googleapis.com/voter-fraud-2020/img/logo-ct-jacobs-transparent.png")||_(a,"src",n),_(a,"class","logo-img"),_(a,"alt","CT logo"),_(p,"class","svelte-1fxzmur"),_(t,"class","svelte-1fxzmur"),_(e,"class","svelte-1fxzmur")},m(u,$){V(u,e,$),m(e,t),m(t,r),m(r,l),m(l,c),m(t,i),m(t,a),m(t,f),m(t,p);for(let o=0;o<h.length;o+=1)h[o].m(p,null)},p(u,[$]){if($&1){y=C.menus;let o;for(o=0;o<y.length;o+=1){const E=G(u,y,o);h[o]?h[o].p(E,$):(h[o]=L(E),h[o].c(),h[o].m(p,null))}for(;o<h.length;o+=1)h[o].d(1);h.length=y.length}},i:D,o:D,d(u){u&&g(e),j(h,u)}}}function se(s,e,t){let r,l;return J(s,ee,c=>t(1,l=c)),s.$$.update=()=>{s.$$.dirty&2&&t(0,r=l.url.pathname)},[r,l]}class ae extends S{constructor(e){super(),q(this,e,se,te,M,{})}}function re(s){let e,t,r,l,c;t=new ae({});const i=s[1].default,a=K(i,s,s[0],null);return{c(){e=d("div"),O(t.$$.fragment),r=z(),l=d("main"),a&&a.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var f=b(e);U(t.$$.fragment,f),r=A(f),l=v(f,"MAIN",{});var p=b(l);a&&a.l(p),p.forEach(g),f.forEach(g),this.h()},h(){_(e,"class","wrapper svelte-nfx3lu")},m(n,f){V(n,e,f),X(t,e,null),m(e,r),m(e,l),a&&a.m(l,null),c=!0},p(n,[f]){a&&a.p&&(!c||f&1)&&B(a,i,n,n[0],c?W(i,n[0],f,null):Q(n[0]),null)},i(n){c||(I(t.$$.fragment,n),I(a,n),c=!0)},o(n){x(t.$$.fragment,n),x(a,n),c=!1},d(n){n&&g(e),Y(t),a&&a.d(n)}}}function le(s,e,t){let{$$slots:r={},$$scope:l}=e;return s.$$set=c=>{"$$scope"in c&&t(0,l=c.$$scope)},[l,r]}class oe extends S{constructor(e){super(),q(this,e,le,re,M,{})}}export{oe as default};
