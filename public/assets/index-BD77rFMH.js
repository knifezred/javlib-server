import{_ as O}from"./movie-card.vue_vue_type_script_setup_true_lang-DwJfhy4G.js";import{d as q,i as I,j as Y,u as J,r as p,k as K,o as i,c as b,w as a,f as e,h as r,$ as B,e as D,g as c,t as m,b as h,l as y,F as N,m as Q,n as W,p as X}from"./index-CkCE23X5.js";import{c as Z,p as M}from"./library-Cj7CXVcl.js";import{f as ee,u as ae}from"./actress-sK6WWxaX.js";import{f as te}from"./movie-CZDh539z.js";import{_ as le,a as oe}from"./Grid-C6h4PuPl.js";import{_ as ne}from"./text-BzG7xH7h.js";import{_ as se}from"./Statistic-BTr17hij.js";import{_ as ue}from"./PageHeader-DOgYI-1-.js";import{N as pe}from"./headers-Ct_gP3eW.js";import{_ as ie}from"./Space-y8ctviet.js";import{_ as re}from"./Pagination-DUiDsJnU.js";import{_ as ce}from"./p-Cdf8pl75.js";const _e=["src"],de=["src"],Ce=q({name:"detail-page_actress",__name:"index",setup(me){const w=I(),T=Y(),{routerBack:H}=J(),l=p({createdTime:0,favorite:!1,score:0,personalScore:0,category:"",name:"",alias:"",introduction:"",avatar:"",cover:"",tags:"",birthday:"",videoCount:0,bust:0,waist:0,hip:0,face:0,body:0,cup:0,bodySize:"",bodyHeight:0,debutDate:""}),g=p([]),k=p(0),s=p({sort:"year",sortRule:"DESC",page:1,pageSize:20}),v=p(1),z=p(0);function d(){s.value.actress=l.value.name,te(s.value).then(u=>{u.data?(g.value=u.data.records,v.value=Math.ceil(u.data.total/s.value.pageSize),z.value=u.data.total):(g.value=[],v.value=1,z.value=0)})}K(()=>{ee(T.query.name).then(u=>{u.data!==null&&(l.value=u.data,k.value=new Date().getFullYear()-Number.parseInt(l.value.birthday.split("/")[0],10),d())})});const S=p(!1);function L(){S.value=!0}function R(u){l.value.avatar=u,ae(l.value).then(o=>{var n;o.data&&((n=window.$message)==null||n.success(B("common.modifySuccess")))})}return(u,o)=>{const n=le,U=ne,f=ce,_=se,j=X,x=oe,C=Q,F=ue,V=pe,E=O,P=ie,$=re,G=W;return i(),b(x,{"x-gap":"12","y-gap":"24",cols:2},{default:a(()=>[e(n,{span:2},{default:a(()=>[e(F,{title:r(B)("common.backToList"),onBack:r(H)},{default:a(()=>[e(C,null,{default:a(()=>[e(x,{"x-gap":"12","y-gap":"12",cols:3},{default:a(()=>[e(n,null,{default:a(()=>[D("img",{src:r(w).baseURL+l.value.avatar,class:"h-24 w-24 cursor-pointer rd-md object-cover object-top transition-transform duration-300",onClick:L},null,8,_e)]),_:1}),e(n,{span:2},{default:a(()=>[e(f,null,{default:a(()=>[c(m(l.value.name)+" ",1),e(U,{depth:3},{default:a(()=>[c("("+m(k.value)+"岁)",1)]),_:1})]),_:1}),e(f,{depth:"3",class:"my-1"},{default:a(()=>[c(m(l.value.alias),1)]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(_,{label:"参演作品",value:z.value},null,8,["value"])]),_:1}),e(n,null,{default:a(()=>[e(_,{label:"出生日期",value:l.value.birthday},null,8,["value"])]),_:1}),e(n,null,{default:a(()=>[e(_,{label:"出道时间",value:l.value.debutDate},null,8,["value"])]),_:1}),e(n,null,{default:a(()=>{var t;return[e(_,{label:"体型",value:l.value.bodySize+(l.value.cup>0?"/"+((t=r(Z).find(A=>A.value==l.value.cup))==null?void 0:t.label):"")},null,8,["value"])]}),_:1}),e(n,null,{default:a(()=>[e(_,{label:"身高",value:l.value.bodyHeight+"cm"},null,8,["value"])]),_:1}),e(n,null,{default:a(()=>[e(_,{label:"综合评分",value:l.value.score+" / "+l.value.personalScore},null,8,["value"])]),_:1}),e(n,{span:3},{default:a(()=>[e(f,null,{default:a(()=>[(i(!0),h(N,null,y(l.value.tags.split("|").filter(t=>t.length>0),t=>(i(),b(j,{key:t},{default:a(()=>[c(m(t),1)]),_:2},1024))),128))]),_:1}),e(f,{class:"line-clamp-6"},{default:a(()=>[c(m(l.value.introduction),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title","onBack"])]),_:1}),e(n,{span:2},{default:a(()=>[e(V,{class:"ml-2"},{default:a(()=>o[5]||(o[5]=[c("TA的作品")])),_:1}),e(P,{justify:"center"},{default:a(()=>[(i(!0),h(N,null,y(g.value,t=>(i(),b(E,{key:t.id,movie:t,"show-second-title":!1,sort:s.value.sort},null,8,["movie","sort"]))),128))]),_:1}),e($,{page:s.value.page,"onUpdate:page":o[0]||(o[0]=t=>s.value.page=t),"page-size":s.value.pageSize,"onUpdate:pageSize":o[1]||(o[1]=t=>s.value.pageSize=t),class:"ma-auto pt-4",simple:"","page-count":v.value,"show-size-picker":"","page-sizes":r(M),onUpdatePage:d,onUpdatePageSize:d},null,8,["page","page-size","page-count","page-sizes"])]),_:1}),e(n,{span:2},{default:a(()=>[e(G,{show:S.value,"onUpdate:show":o[4]||(o[4]=t=>S.value=t),class:"h-auto w-5xl!",preset:"dialog",title:"Dialog"},{header:a(()=>[e(U,null,{default:a(()=>o[6]||(o[6]=[c("修改头像")])),_:1})]),default:a(()=>[e(P,{class:"mt-lg w-auto"},{default:a(()=>[(i(!0),h(N,null,y(g.value,t=>(i(),b(C,{key:t.id,"content-style":"padding:0px !important",hoverable:"",onClick:A=>R(t.poster)},{default:a(()=>[D("img",{src:r(w).baseURL+t.poster,class:"h-auto w-36 cursor-pointer rd-md"},null,8,de)]),_:2},1032,["onClick"]))),128))]),_:1}),e($,{page:s.value.page,"onUpdate:page":o[2]||(o[2]=t=>s.value.page=t),"page-size":s.value.pageSize,"onUpdate:pageSize":o[3]||(o[3]=t=>s.value.pageSize=t),class:"ma-auto",simple:"","page-count":v.value,"show-size-picker":"","page-sizes":r(M),onUpdatePage:d,onUpdatePageSize:d},null,8,["page","page-size","page-count","page-sizes"])]),_:1},8,["show"])]),_:1})]),_:1})}}});export{Ce as default};