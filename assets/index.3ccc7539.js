import{o as u,c as d,t as g,n as a,r as k,w as G,F as h,a as b,b as D,d as R,e as c,f as y,g as $,h as C,i as N,j as O,k as T,l as W}from"./vendor.e191c0fa.js";const P=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};P();var U="./assets/gif.f08522ec.gif";const I="_letter_fcrld_2",j="_absent_fcrld_16",K="_present_fcrld_21",A="_correct_fcrld_26",V="_reveal_fcrld_40";var Y={letter:I,absent:j,present:K,correct:A,reveal:V},m=(o,s)=>{const r=o.__vccOpts||o;for(const[i,e]of s)r[i]=e;return r};const F={props:{letter:String,isChecked:Boolean,isPresent:Boolean,isCorrect:Boolean},setup(o){return(s,r)=>(u(),d("div",{class:a([s.$style.letter,{[s.$style.absent]:o.isChecked&&!o.isPresent,[s.$style.present]:o.isChecked&&o.isPresent,[s.$style.correct]:o.isChecked&&o.isCorrect,[s.$style.reveal]:o.isChecked}])},g(o.letter),3))}},H={$style:Y};var q=m(F,[["__cssModules",H]]);const z="_row_dsthp_2",Q="_reveal_dsthp_6";var J={row:z,reveal:Q};const X={props:{guess:Array,word:String,isChecked:Boolean},setup(o){const s=o,r=k(-1),i=l=>{if(!!s.isChecked)return l&&s.word.includes(l)},e=(l,n)=>{if(!!s.isChecked)return l&&s.word[n]===l};G(()=>s.isChecked,l=>{l&&t()});const t=()=>{r.value++,setTimeout(()=>{r.value<4&&t()},400)};return(l,n)=>(u(),d("div",{class:a(l.$style.row)},[(u(!0),d(h,null,b(o.guess,(_,v)=>(u(),D(q,{key:v,letter:_,word:o.word,isChecked:v<=r.value,isPresent:i(_),isCorrect:e(_,v)},null,8,["letter","word","isChecked","isPresent","isCorrect"]))),128))],2))}},Z={$style:J};var x=m(X,[["__cssModules",Z]]);const ee="_button_14i8j_2";var se={button:ee};const te={emits:["click"],setup(o,{emit:s}){return(r,i)=>(u(),d("button",{onClick:i[0]||(i[0]=e=>s("click")),class:a(r.$style.button)},[R(r.$slots,"default")],2))}},re={$style:se};var w=m(te,[["__cssModules",re]]);const oe="_keyboard_h29gd_2",le="_row_h29gd_10",ne="_spacer_h29gd_18";var ae={keyboard:oe,row:le,spacer:ne};const ce=C("ENTER"),ue=C("DEL"),ie={emits:["letterClick","submitGuess","letterDelete"],setup(o,{emit:s}){const r=["Q","W","E","R","T","Y","U","I","O","P"],i=["A","S","D","F","G","H","J","K","L"],e=["Z","X","C","V","B","N","M"];return(t,l)=>(u(),d("div",{class:a(t.$style.keyboard)},[c("div",{class:a(t.$style.row)},[(u(),d(h,null,b(r,(n,_)=>y(w,{key:_,onClick:v=>s("letterClick",n)},{default:$(()=>[C(g(n),1)]),_:2},1032,["onClick"])),64))],2),c("div",{class:a(t.$style.row)},[c("div",{class:a(t.$style.spacer)},null,2),(u(),d(h,null,b(i,(n,_)=>y(w,{key:_,onClick:v=>s("letterClick",n)},{default:$(()=>[C(g(n),1)]),_:2},1032,["onClick"])),64)),c("div",{class:a(t.$style.spacer)},null,2)],2),c("div",{class:a(t.$style.row)},[y(w,{onClick:l[0]||(l[0]=n=>s("submitGuess"))},{default:$(()=>[ce]),_:1}),(u(),d(h,null,b(e,(n,_)=>y(w,{key:_,onClick:v=>s("letterClick",n)},{default:$(()=>[C(g(n),1)]),_:2},1032,["onClick"])),64)),y(w,{onClick:l[1]||(l[1]=n=>s("letterDelete"))},{default:$(()=>[ue]),_:1})],2)],2))}},de={$style:ae};var _e=m(ie,[["__cssModules",de]]);const ve="_overlay_1tk1b_2",fe="_modal_1tk1b_15",ye="_jumpin_1tk1b_1",he="_closeButton_1tk1b_31",pe="_header_1tk1b_41",ke="_content_1tk1b_46";var $e={overlay:ve,modal:fe,jumpin:ye,closeButton:he,header:pe,content:ke};const me={props:{show:Boolean},emits:["close"],setup(o,{emit:s}){return(r,i)=>o.show?(u(),d("div",{key:0,class:a(r.$style.overlay),onClick:i[0]||(i[0]=e=>s("close"))},[c("div",{class:a(r.$style.modal)},[c("div",{class:a(r.$style.header)},[c("button",{class:a(r.$style.closeButton)},"Close",2)],2),c("div",{class:a(r.$style.content)},[R(r.$slots,"default")],2)],2)],2)):N("",!0)}},we={$style:$e};var be=m(me,[["__cssModules",we]]);const Ce="_grid_1hurr_2",ge="_keyboard_1hurr_8",Be="_row_1hurr_16",Ee="_spacer_1hurr_24",Le="_gif_1hurr_28",Me="_subtitle_1hurr_32";var Se={grid:Ce,keyboard:ge,row:Be,spacer:Ee,gif:Le,subtitle:Me};const De={key:0},Re=c("h1",null,"Don't you know about the BIRD?",-1),Ge=c("iframe",{width:"100%",height:"200px",src:"https://www.youtube.com/embed/9Gc4QTqslN4?controls=0&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),Ne={setup(o){const s="BIRD",e=k(0),t=k(0),l=k(!0),n=k(!1),_=k(!1),v=k([["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]]),B=()=>{t.value>0&&(v.value[e.value][t.value-1]="",t.value--)},E=()=>{if(t.value===4){if(v.value[e.value].join("")===s){e.value++,l.value=!1,_.value=!0,setTimeout(()=>{n.value=!0},2e3);return}e.value++,e.value<6&&(t.value=0),e.value===6&&(l.value=!1,_.value=!1,setTimeout(()=>{n.value=!0},2e3))}},L=p=>{t.value<4&&(v.value[e.value][t.value]=p.toUpperCase(),t.value++)};return O(()=>{window.addEventListener("keydown",p=>{const f=p.key;!l.value||(f.length===1&&f.match(/[a-z]/i)&&L(f),f==="Backspace"&&B(),f==="Enter"&&E())})}),T(()=>{window.removeEventListener("keypress",()=>{})}),(p,f)=>(u(),d(h,null,[c("div",{class:a(p.$style.grid)},[(u(!0),d(h,null,b(v.value,(M,S)=>(u(),D(x,{isChecked:S<e.value,key:S,guess:M,word:s},null,8,["isChecked","guess"]))),128))],2),y(_e,{onLetterClick:L,onLetterDelete:B,onSubmitGuess:E}),y(be,{show:n.value,onClose:f[0]||(f[0]=M=>n.value=!1)},{default:$(()=>[_.value?(u(),d("h1",De,"BIRD is the WORD!")):(u(),d(h,{key:1},[Re,c("h4",{class:a(p.$style.subtitle)}," Everybody knows that the BIRD is the WORD! ",2)],64)),c("img",{class:a(p.$style.gif),src:U},null,2),Ge]),_:1},8,["show"])],64))}},Oe={$style:Se};var Te=m(Ne,[["__cssModules",Oe]]);const We=c("header",null,[c("h1",null,"BIRDLE")],-1),Pe={setup(o){return(s,r)=>(u(),d(h,null,[We,c("main",null,[y(Te)])],64))}};W(Pe).mount("#app");
