import{d as P,i as j,r as v,k as F,bH as S,o as i,c,w as s,f as t,ai as p,b as z,l as C,F as N,h as M,_ as U,ah as I,b1 as A,bI as B,bJ as E}from"./index-CkCE23X5.js";import{_ as L}from"./actress-card.vue_vue_type_script_setup_true_lang-DBd2SWWL.js";import{_ as $}from"./favorite-card-group.vue_vue_type_script_setup_true_lang-D-UtHB-9.js";import{_ as V}from"./movie-card.vue_vue_type_script_setup_true_lang-DwJfhy4G.js";import{p as x}from"./library-Cj7CXVcl.js";import{g as H,a as J}from"./actress-sK6WWxaX.js";import{g as O,f as R}from"./movie-CZDh539z.js";import{_ as q}from"./Space-y8ctviet.js";import{_ as G}from"./Pagination-DUiDsJnU.js";import{_ as K}from"./Flex-BEO7kmsB.js";import"./p-Cdf8pl75.js";import"./text-BzG7xH7h.js";const ie=P({name:"favorites",__name:"index",setup(Q){const k=j(),a=v({movie:0,actress:0,studio:0,series:0}),o=v({movie:[],actress:[],studio:[],series:[]}),r=v("movie"),b=v(!0),u=v({page:1,pageSize:20,sort:"updatedTime",sortRule:"DESC",favorite:!0}),d=v(1);function m(n){switch(r.value=n,k.setCacheSearchData({currentTab:r.value,searchData:u.value}),r.value==="movie"?u.value.sort="favoriteTime":u.value.sort="updatedTime",r.value){case"movie":b.value=!0,R(u.value).then(e=>{e.data!==null?(o.value.movie=e.data.records,a.value.movie=e.data.total,d.value=Math.ceil(e.data.total/u.value.pageSize)):(o.value.movie=[],a.value.movie=0,d.value=0)});break;case"actress":J(u.value).then(e=>{e.data!==null?(o.value.actress=e.data.records,a.value.actress=e.data.total,d.value=Math.ceil(e.data.total/u.value.pageSize)):(o.value.actress=[],a.value.actress=0,d.value=0)});break;default:b.value=!1;break}}return F(()=>{const n=k.getCacheSearchData();n&&(r.value=n.data.currentTab,u.value=n.data.searchData),m(r.value),O().then(e=>{e.data?a.value.movie=e.data:a.value.movie=0}),H().then(e=>{e.data?a.value.actress=e.data:a.value.actress=0}),S("favorite_series").then(e=>{e.data?(o.value.series=e.data.value.split("|"),a.value.series=o.value.series.length):(o.value.series=[],a.value.series=0)}),S("favorite_studio").then(e=>{e.data?(o.value.studio=e.data.value.split("|"),a.value.studio=o.value.studio.length):(o.value.studio=[],a.value.studio=0)})}),(n,e)=>{const _=U,f=I,g=A,h=q,y=B,T=E,w=G,D=K;return i(),c(D,null,{default:s(()=>[t(T,{value:r.value,"justify-content":"space-evenly",type:"card",animated:"","onUpdate:value":m},{default:s(()=>[t(y,{name:"movie",tab:n.$t("page.favorites.movie")+"（"+a.value.movie+"）"},{default:s(()=>[a.value.movie==0?(i(),c(g,{key:0,size:"large",class:"ma-auto",description:"什么也没有"},{icon:s(()=>[t(f,null,{default:s(()=>[t(_,{icon:"solar:hand-heart-bold-duotone"})]),_:1})]),_:1})):p("",!0),t(h,{class:"mt-4",justify:"center"},{default:s(()=>[(i(!0),z(N,null,C(o.value.movie,l=>(i(),c(V,{key:l.file,movie:l,"show-second-title":!1,sort:"score"},null,8,["movie"]))),128))]),_:1})]),_:1},8,["tab"]),t(y,{name:"actress",tab:n.$t("route.category_actress")+"（"+a.value.actress+"）"},{default:s(()=>[a.value.actress==0?(i(),c(g,{key:0,size:"large",class:"ma-auto",description:"什么也没有"},{icon:s(()=>[t(f,null,{default:s(()=>[t(_,{icon:"solar:hand-heart-bold-duotone"})]),_:1})]),_:1})):p("",!0),t(h,{class:"mt-4",justify:"center"},{default:s(()=>[(i(!0),z(N,null,C(o.value.actress,l=>(i(),c(L,{key:l.name,"show-second-title":!0,actress:l,sort:"score"},null,8,["actress"]))),128))]),_:1})]),_:1},8,["tab"]),t(y,{name:"studio",tab:n.$t("route.category_studio")+"（"+a.value.studio+"）"},{default:s(()=>[a.value.studio==0?(i(),c(g,{key:0,size:"large",class:"ma-auto",description:"什么也没有"},{icon:s(()=>[t(f,null,{default:s(()=>[t(_,{icon:"solar:hand-heart-bold-duotone"})]),_:1})]),_:1})):p("",!0),t(h,{justify:"center"},{default:s(()=>[t($,{keys:o.value.studio,"storage-key":"favorite_studio",type:"studio"},null,8,["keys"])]),_:1})]),_:1},8,["tab"]),t(y,{name:"series",tab:n.$t("route.category_series")+"（"+a.value.series+"）"},{default:s(()=>[a.value.series==0?(i(),c(g,{key:0,size:"large",class:"ma-auto",description:"什么也没有"},{icon:s(()=>[t(f,null,{default:s(()=>[t(_,{icon:"solar:hand-heart-bold-duotone"})]),_:1})]),_:1})):p("",!0),t(h,{justify:"center"},{default:s(()=>[t($,{keys:o.value.series,"storage-key":"favorite_series",type:"series"},null,8,["keys"])]),_:1})]),_:1},8,["tab"])]),_:1},8,["value"]),b.value?(i(),c(w,{key:0,page:u.value.page,"onUpdate:page":e[0]||(e[0]=l=>u.value.page=l),"page-size":u.value.pageSize,"onUpdate:pageSize":e[1]||(e[1]=l=>u.value.pageSize=l),"page-count":d.value,"show-size-picker":"",simple:"",class:"ma-auto","page-sizes":M(x),onUpdatePage:e[2]||(e[2]=l=>m(r.value)),onUpdatePageSize:e[3]||(e[3]=l=>m(r.value))},null,8,["page","page-size","page-count","page-sizes"])):p("",!0)]),_:1})}}});export{ie as default};