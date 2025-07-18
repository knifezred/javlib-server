import{d as C,J as e,N as l,A as z,C as i,D as y,E as S,O as $,H,a as P,I as R,P as B}from"./index-CKOHag-y.js";const E=C({name:"ArrowBack",render(){return e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}))}}),T=l([z("page-header-header",`
 margin-bottom: 20px;
 `),z("page-header",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[i("main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `),i("back",`
 display: flex;
 margin-right: 16px;
 font-size: var(--n-back-size);
 cursor: pointer;
 color: var(--n-back-color);
 transition: color .3s var(--n-bezier);
 `,[l("&:hover","color: var(--n-back-color-hover);"),l("&:active","color: var(--n-back-color-pressed);")]),i("avatar",`
 display: flex;
 margin-right: 12px
 `),i("title",`
 margin-right: 16px;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),i("subtitle",`
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 color: var(--n-subtitle-text-color);
 `)]),z("page-header-content",`
 font-size: var(--n-font-size);
 `,[l("&:not(:first-child)","margin-top: 20px;")]),z("page-header-footer",`
 font-size: var(--n-font-size);
 `,[l("&:not(:first-child)","margin-top: 20px;")])]),O=Object.assign(Object.assign({},S.props),{title:String,subtitle:String,extra:String,onBack:Function}),I=C({name:"PageHeader",props:O,slots:Object,setup(r){const{mergedClsPrefixRef:o,mergedRtlRef:c,inlineThemeDisabled:s}=y(r),d=S("PageHeader","-page-header",T,$,r,o),t=H("PageHeader",c,o),h=P(()=>{const{self:{titleTextColor:g,subtitleTextColor:p,backColor:f,fontSize:u,titleFontSize:v,backSize:n,titleFontWeight:b,backColorHover:m,backColorPressed:x},common:{cubicBezierEaseInOut:k}}=d.value;return{"--n-title-text-color":g,"--n-title-font-size":v,"--n-title-font-weight":b,"--n-font-size":u,"--n-back-size":n,"--n-subtitle-text-color":p,"--n-back-color":f,"--n-back-color-hover":m,"--n-back-color-pressed":x,"--n-bezier":k}}),a=s?R("page-header",void 0,h,r):void 0;return{rtlEnabled:t,mergedClsPrefix:o,cssVars:s?void 0:h,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var r;const{onBack:o,title:c,subtitle:s,extra:d,mergedClsPrefix:t,cssVars:h,$slots:a}=this;(r=this.onRender)===null||r===void 0||r.call(this);const{title:g,subtitle:p,extra:f,default:u,header:v,avatar:n,footer:b,back:m}=a,x=o,k=c||g,w=s||p,_=d||f;return e("div",{style:h,class:[`${t}-page-header-wrapper`,this.themeClass,this.rtlEnabled&&`${t}-page-header-wrapper--rtl`]},v?e("div",{class:`${t}-page-header-header`,key:"breadcrumb"},v()):null,(x||n||k||w||_)&&e("div",{class:`${t}-page-header`,key:"header"},e("div",{class:`${t}-page-header__main`,key:"back"},x?e("div",{class:`${t}-page-header__back`,onClick:o},m?m():e(B,{clsPrefix:t},{default:()=>e(E,null)})):null,n?e("div",{class:`${t}-page-header__avatar`},n()):null,k?e("div",{class:`${t}-page-header__title`,key:"title"},c||g()):null,w?e("div",{class:`${t}-page-header__subtitle`,key:"subtitle"},s||p()):null),_?e("div",{class:`${t}-page-header__extra`},d||f()):null),u?e("div",{class:`${t}-page-header-content`,key:"content"},u()):null,b?e("div",{class:`${t}-page-header-footer`,key:"footer"},b()):null)}});export{I as _};
