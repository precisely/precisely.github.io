import{S as M,i as J,s as K,e as g,t as D,c as v,a as N,h as H,d as h,b as u,g as L,I as p,j as oe,k as y,m as w,E as le,a3 as j,R as Q,a1 as F,a4 as G,w as C,x as T,f as fe,y as U,a5 as O,q as S,o as W,B}from"../chunks/index-0f0cfcbe.js";import{B as ce,C as me}from"../chunks/Button-6529748d.js";import{a as pe,S as de}from"../chunks/Seo-e0837150.js";function re(r){let e,n;return{c(){e=g("label"),n=D(r[1]),this.h()},l(t){e=v(t,"LABEL",{class:!0,for:!0});var l=N(e);n=H(l,r[1]),l.forEach(h),this.h()},h(){u(e,"class","content-label text-ink mb-2"),u(e,"for",r[2])},m(t,l){L(t,e,l),p(e,n)},p(t,l){l&2&&oe(n,t[1]),l&4&&u(e,"for",t[2])},d(t){t&&h(e)}}}function he(r){let e,n,t;return{c(){e=g("input"),this.h()},l(l){e=v(l,"INPUT",{class:!0,placeholder:!0,name:!0,type:!0}),this.h()},h(){u(e,"class","input"),u(e,"placeholder",r[3]),u(e,"name",r[2]),u(e,"type","email"),e.required=r[5]},m(l,a){L(l,e,a),j(e,r[0]),n||(t=Q(e,"input",r[7]),n=!0)},p(l,a){a&8&&u(e,"placeholder",l[3]),a&4&&u(e,"name",l[2]),a&32&&(e.required=l[5]),a&1&&e.value!==l[0]&&j(e,l[0])},d(l){l&&h(e),n=!1,t()}}}function _e(r){let e,n,t;return{c(){e=g("input"),this.h()},l(l){e=v(l,"INPUT",{class:!0,placeholder:!0,name:!0,type:!0}),this.h()},h(){u(e,"class","input"),u(e,"placeholder",r[3]),u(e,"name",r[2]),u(e,"type","text"),e.required=r[5]},m(l,a){L(l,e,a),j(e,r[0]),n||(t=Q(e,"input",r[6]),n=!0)},p(l,a){a&8&&u(e,"placeholder",l[3]),a&4&&u(e,"name",l[2]),a&32&&(e.required=l[5]),a&1&&e.value!==l[0]&&j(e,l[0])},d(l){l&&h(e),n=!1,t()}}}function ge(r){let e,n,t=r[1]!==null&&re(r);function l(o,s){if(o[4]==="text")return _e;if(o[4]==="email")return he}let a=l(r),i=a&&a(r);return{c(){e=g("div"),t&&t.c(),n=y(),i&&i.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var s=N(e);t&&t.l(s),n=w(s),i&&i.l(s),s.forEach(h),this.h()},h(){u(e,"class","input-wrapper")},m(o,s){L(o,e,s),t&&t.m(e,null),p(e,n),i&&i.m(e,null)},p(o,[s]){o[1]!==null?t?t.p(o,s):(t=re(o),t.c(),t.m(e,n)):t&&(t.d(1),t=null),a===(a=l(o))&&i?i.p(o,s):(i&&i.d(1),i=a&&a(o),i&&(i.c(),i.m(e,null)))},i:le,o:le,d(o){o&&h(e),t&&t.d(),i&&i.d()}}}function ve(r,e,n){let{label:t=null}=e,{name:l}=e,{placeholder:a=""}=e,{type:i="text"}=e,{required:o=!1}=e,{value:s}=e;function _(){s=this.value,n(0,s)}function d(){s=this.value,n(0,s)}return r.$$set=c=>{"label"in c&&n(1,t=c.label),"name"in c&&n(2,l=c.name),"placeholder"in c&&n(3,a=c.placeholder),"type"in c&&n(4,i=c.type),"required"in c&&n(5,o=c.required),"value"in c&&n(0,s=c.value)},[s,t,l,a,i,o,_,d]}class R extends M{constructor(e){super(),J(this,e,ve,ge,K,{label:1,name:2,placeholder:3,type:4,required:5,value:0})}}function be(r){let e;return{c(){e=D("Get in touch")},l(n){e=H(n,"Get in touch")},m(n,t){L(n,e,t)},d(n){n&&h(e)}}}function $e(r){let e,n,t,l,a,i,o,s,_,d,c,k,q,b,E,$,P,A,I,V,z,X;function ie(f){r[4](f)}let Y={label:"Name",name:"name",placeholder:"Name",required:!0};r[0]!==void 0&&(Y.value=r[0]),n=new R({props:Y}),F.push(()=>G(n,"value",ie));function se(f){r[5](f)}let Z={label:"Email",name:"email",placeholder:"Email",type:"email",required:!0};r[1]!==void 0&&(Z.value=r[1]),a=new R({props:Z}),F.push(()=>G(a,"value",se));function ue(f){r[6](f)}let x={label:"Comments",name:"comments",placeholder:"Comments",type:"text",required:!0};return r[2]!==void 0&&(x.value=r[2]),s=new R({props:x}),F.push(()=>G(s,"value",ue)),c=new ce({props:{color:"cardinal",$$slots:{default:[be]},$$scope:{ctx:r}}}),{c(){e=g("form"),C(n.$$.fragment),l=y(),C(a.$$.fragment),o=y(),C(s.$$.fragment),d=y(),C(c.$$.fragment),k=y(),q=g("input"),b=y(),E=g("input"),$=y(),P=g("input"),A=y(),I=g("input"),this.h()},l(f){e=v(f,"FORM",{class:!0,action:!0,method:!0});var m=N(e);T(n.$$.fragment,m),l=w(m),T(a.$$.fragment,m),o=w(m),T(s.$$.fragment,m),d=w(m),T(c.$$.fragment,m),k=w(m),q=v(m,"INPUT",{type:!0,name:!0,style:!0}),b=w(m),E=v(m,"INPUT",{type:!0,name:!0}),$=w(m),P=v(m,"INPUT",{type:!0,name:!0}),A=w(m),I=v(m,"INPUT",{type:!0,name:!0}),m.forEach(h),this.h()},h(){u(q,"type","text"),u(q,"name","_honey"),fe(q,"display","none"),u(E,"type","hidden"),u(E,"name","_next"),E.value="https://yourdomain.co/thanks.html",u(P,"type","hidden"),u(P,"name","_subject"),P.value="New submission!",u(I,"type","hidden"),u(I,"name","_template"),I.value="table",u(e,"class","flex flex-col mb-16"),u(e,"action","https://formsubmit.co/403caa07c15aabfe7a3dbdc09e083173"),u(e,"method","POST")},m(f,m){L(f,e,m),U(n,e,null),p(e,l),U(a,e,null),p(e,o),U(s,e,null),p(e,d),U(c,e,null),p(e,k),p(e,q),p(e,b),p(e,E),p(e,$),p(e,P),p(e,A),p(e,I),V=!0,z||(X=Q(e,"submit",r[3]),z=!0)},p(f,[m]){const ee={};!t&&m&1&&(t=!0,ee.value=f[0],O(()=>t=!1)),n.$set(ee);const te={};!i&&m&2&&(i=!0,te.value=f[1],O(()=>i=!1)),a.$set(te);const ne={};!_&&m&4&&(_=!0,ne.value=f[2],O(()=>_=!1)),s.$set(ne);const ae={};m&128&&(ae.$$scope={dirty:m,ctx:f}),c.$set(ae)},i(f){V||(S(n.$$.fragment,f),S(a.$$.fragment,f),S(s.$$.fragment,f),S(c.$$.fragment,f),V=!0)},o(f){W(n.$$.fragment,f),W(a.$$.fragment,f),W(s.$$.fragment,f),W(c.$$.fragment,f),V=!1},d(f){f&&h(e),B(n),B(a),B(s),B(c),z=!1,X()}}}function ye(r,e,n){let t="",l="",a="";const i=d=>{};function o(d){t=d,n(0,t)}function s(d){l=d,n(1,l)}function _(d){a=d,n(2,a)}return[t,l,a,i,o,s,_]}class we extends M{constructor(e){super(),J(this,e,ye,$e,K,{})}}function ke(r){let e,n,t,l,a,i,o,s,_,d,c,k,q;return k=new we({}),{c(){e=g("div"),n=g("div"),t=g("h1"),l=D("Let's connect!"),a=y(),i=g("p"),o=D(`At Precisely, we believe that every patient deserves personalized, coordinated, and
					data-driven care. We're building the digital platform to power this reality.`),s=y(),_=g("p"),d=D("We'd love to chat and learn how we can work together to build a better healthcare system."),c=y(),C(k.$$.fragment),this.h()},l(b){e=v(b,"DIV",{class:!0});var E=N(e);n=v(E,"DIV",{class:!0});var $=N(n);t=v($,"H1",{class:!0});var P=N(t);l=H(P,"Let's connect!"),P.forEach(h),a=w($),i=v($,"P",{class:!0});var A=N(i);o=H(A,`At Precisely, we believe that every patient deserves personalized, coordinated, and
					data-driven care. We're building the digital platform to power this reality.`),A.forEach(h),s=w($),_=v($,"P",{class:!0});var I=N(_);d=H(I,"We'd love to chat and learn how we can work together to build a better healthcare system."),I.forEach(h),c=w($),T(k.$$.fragment,$),$.forEach(h),E.forEach(h),this.h()},h(){u(t,"class","content-6xl text-ink mb-8"),u(i,"class","content-xl text-grey700 mb-8"),u(_,"class","content-xl text-grey700 mb-16"),u(n,"class","max-w-md"),u(e,"class","flex")},m(b,E){L(b,e,E),p(e,n),p(n,t),p(t,l),p(n,a),p(n,i),p(i,o),p(n,s),p(n,_),p(_,d),p(n,c),U(k,n,null),q=!0},i(b){q||(S(k.$$.fragment,b),q=!0)},o(b){W(k.$$.fragment,b),q=!1},d(b){b&&h(e),B(k)}}}function qe(r){let e,n;return e=new me({props:{$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){U(e,t,l),n=!0},p(t,l){const a={};l&1&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ee(r){let e,n,t,l;return e=new pe({props:{title:"Contact Us | Precisely Health",description:"Have a question? We'd love to connect!"}}),t=new de({props:{$$slots:{default:[qe]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),n=y(),C(t.$$.fragment)},l(a){T(e.$$.fragment,a),n=w(a),T(t.$$.fragment,a)},m(a,i){U(e,a,i),L(a,n,i),U(t,a,i),l=!0},p(a,[i]){const o={};i&1&&(o.$$scope={dirty:i,ctx:a}),t.$set(o)},i(a){l||(S(e.$$.fragment,a),S(t.$$.fragment,a),l=!0)},o(a){W(e.$$.fragment,a),W(t.$$.fragment,a),l=!1},d(a){B(e,a),a&&h(n),B(t,a)}}}class Ce extends M{constructor(e){super(),J(this,e,null,Ee,K,{})}}export{Ce as default};
