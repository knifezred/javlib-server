import{d as P,J as n,A as f,aZ as x,C as o,N as $,bH as j,b0 as O,D,r as V,a as N,a7 as W,E as T,bI as K,b4 as q,H as k,I as J,aw as Z,aa as _,bJ as G,a6 as F,bK as Q,bL as X,bM as Y,b5 as ee,aN as ae,ax as re,bN as te,aI as z,bO as A,bP as le,P as oe,aM as ne}from"./index-G0XXQiiJ.js";const se=P({name:"ChevronLeft",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),ie=f("collapse","width: 100%;",[f("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[x("disabled",[o("header","cursor: not-allowed;",[o("header-main",`
 color: var(--n-title-text-color-disabled);
 `),f("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),f("collapse-item","margin-left: 32px;"),$("&:first-child","margin-top: 0;"),$("&:first-child >",[o("header","padding-top: 0;")]),x("left-arrow-placement",[o("header",[f("collapse-item-arrow","margin-right: 4px;")])]),x("right-arrow-placement",[o("header",[f("collapse-item-arrow","margin-left: 4px;")])]),o("content-wrapper",[o("content-inner","padding-top: 16px;"),j({duration:"0.15s"})]),x("active",[o("header",[x("active",[f("collapse-item-arrow","transform: rotate(90deg);")])])]),$("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),O("disabled",[x("trigger-area-main",[o("header",[o("header-main","cursor: pointer;"),f("collapse-item-arrow","cursor: default;")])]),x("trigger-area-arrow",[o("header",[f("collapse-item-arrow","cursor: pointer;")])]),x("trigger-area-extra",[o("header",[o("header-extra","cursor: pointer;")])])]),o("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[o("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),o("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),f("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),de=Object.assign(Object.assign({},T.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),L=Z("n-collapse"),fe=P({name:"Collapse",props:de,setup(e,{slots:i}){const{mergedClsPrefixRef:s,inlineThemeDisabled:l,mergedRtlRef:d}=D(e),r=V(e.defaultExpandedNames),h=N(()=>e.expandedNames),v=W(h,r),w=T("Collapse","-collapse",ie,K,e,s);function c(p){const{"onUpdate:expandedNames":t,onUpdateExpandedNames:m,onExpandedNamesChange:y}=e;m&&_(m,p),t&&_(t,p),y&&_(y,p),r.value=p}function g(p){const{onItemHeaderClick:t}=e;t&&_(t,p)}function a(p,t,m){const{accordion:y}=e,{value:I}=v;if(y)p?(c([t]),g({name:t,expanded:!0,event:m})):(c([]),g({name:t,expanded:!1,event:m}));else if(!Array.isArray(I))c([t]),g({name:t,expanded:!0,event:m});else{const C=I.slice(),R=C.findIndex(S=>t===S);~R?(C.splice(R,1),c(C),g({name:t,expanded:!1,event:m})):(C.push(t),c(C),g({name:t,expanded:!0,event:m}))}}q(L,{props:e,mergedClsPrefixRef:s,expandedNamesRef:v,slots:i,toggleItem:a});const u=k("Collapse",d,s),E=N(()=>{const{common:{cubicBezierEaseInOut:p},self:{titleFontWeight:t,dividerColor:m,titlePadding:y,titleTextColor:I,titleTextColorDisabled:C,textColor:R,arrowColor:S,fontSize:M,titleFontSize:B,arrowColorDisabled:H,itemMargin:U}}=w.value;return{"--n-font-size":M,"--n-bezier":p,"--n-text-color":R,"--n-divider-color":m,"--n-title-padding":y,"--n-title-font-size":B,"--n-title-text-color":I,"--n-title-text-color-disabled":C,"--n-title-font-weight":t,"--n-arrow-color":S,"--n-arrow-color-disabled":H,"--n-item-margin":U}}),b=l?J("collapse",void 0,E,e):void 0;return{rtlEnabled:u,mergedTheme:w,mergedClsPrefix:s,cssVars:l?void 0:E,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),n("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),ce=P({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:G(F(e,"show"))}},render(){return n(X,null,{default:()=>{const{show:e,displayDirective:i,onceTrue:s,clsPrefix:l}=this,d=i==="show"&&s,r=n("div",{class:`${l}-collapse-item__content-wrapper`},n("div",{class:`${l}-collapse-item__content-inner`},this.$slots));return d?Q(r,[[Y,e]]):e?r:null}})}}),pe={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},ue=P({name:"CollapseItem",props:pe,setup(e){const{mergedRtlRef:i}=D(e),s=ee(),l=ae(()=>{var a;return(a=e.name)!==null&&a!==void 0?a:s}),d=re(L);d||te("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:r,props:h,mergedClsPrefixRef:v,slots:w}=d,c=N(()=>{const{value:a}=r;if(Array.isArray(a)){const{value:u}=l;return!~a.findIndex(E=>E===u)}else if(a){const{value:u}=l;return u!==a}return!0});return{rtlEnabled:k("Collapse",i,v),collapseSlots:w,randomName:s,mergedClsPrefix:v,collapsed:c,triggerAreas:F(h,"triggerAreas"),mergedDisplayDirective:N(()=>{const{displayDirective:a}=e;return a||h.displayDirective}),arrowPlacement:N(()=>h.arrowPlacement),handleClick(a){let u="main";z(a,"arrow")&&(u="arrow"),z(a,"extra")&&(u="extra"),h.triggerAreas.includes(u)&&d&&!e.disabled&&d.toggleItem(c.value,l.value,a)}}},render(){const{collapseSlots:e,$slots:i,arrowPlacement:s,collapsed:l,mergedDisplayDirective:d,mergedClsPrefix:r,disabled:h,triggerAreas:v}=this,w=A(i.header,{collapsed:l},()=>[this.title]),c=i["header-extra"]||e["header-extra"],g=i.arrow||e.arrow;return n("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${s}-arrow-placement`,h&&`${r}-collapse-item--disabled`,!l&&`${r}-collapse-item--active`,v.map(a=>`${r}-collapse-item--trigger-area-${a}`)]},n("div",{class:[`${r}-collapse-item__header`,!l&&`${r}-collapse-item__header--active`]},n("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},s==="right"&&w,n("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},A(g,{collapsed:l},()=>{var a;return[n(oe,{clsPrefix:r},{default:(a=e.expandIcon)!==null&&a!==void 0?a:()=>this.rtlEnabled?n(se,null):n(ne,null)})]})),s==="left"&&w),le(c,{collapsed:l},a=>n("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},a))),n(ce,{clsPrefix:r,displayDirective:d,show:!l},i))}});export{ue as _,fe as a};
