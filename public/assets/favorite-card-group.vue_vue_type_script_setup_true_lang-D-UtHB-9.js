import{d as B,u as b,r as c,k as K,bH as _,o as i,c as p,w as s,b as S,l as j,F as w,f as r,g as F,t as I,bK as L,bL as P,_ as V,ah as $,B as q,m as z}from"./index-CkCE23X5.js";import{_ as D}from"./Space-y8ctviet.js";import{_ as M}from"./p-Cdf8pl75.js";const O=B({name:"FavoriteCardGroup",__name:"favorite-card-group",props:{type:{},keys:{},storageKey:{}},setup(f){const l=f,{routerPushByKey:v}=b(),u=c({});function d(e){u.value[l.type]=e,console.log(u),v("detail-page_video-list",{query:u.value})}const t=c(),a=c([]);function m(e){t.value===void 0?(a.value.push(e),L({key:l.storageKey,value:e}).then(()=>{_(l.storageKey).then(o=>{o.data&&(t.value=o.data)})})):(a.value.includes(e)?a.value=a.value.filter(o=>o!==e):a.value.push(e),t.value.value=a.value.join("|"),P(t.value))}return K(()=>{_(l.storageKey).then(e=>{e.data?(a.value=e.data.value.split("|"),t.value=e.data):a.value=[]})}),(e,o)=>{const g=M,y=V,h=$,k=q,x=z,C=D;return i(),p(C,null,{default:s(()=>[(i(!0),S(w,null,j(e.keys,n=>(i(),p(x,{key:n,bordered:!1,class:"relative z-4 w-auto cursor-pointer rd-12px text-center text-center transition-transform duration-300 hover:transform-translate-y--2"},{default:s(()=>[r(g,{class:"inline cursor-pointer",onClick:N=>d(n)},{default:s(()=>[F(I(n),1)]),_:2},1032,["onClick"]),r(k,{text:"",class:"ml-2 font-size-4",onClick:N=>m(n)},{default:s(()=>[r(h,null,{default:s(()=>[r(y,{class:"inline-flex",icon:a.value.includes(n)?"fluent-emoji-flat:heart-suit":"fluent-emoji-flat:grey-heart"},null,8,["icon"])]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})}}});export{O as _};
