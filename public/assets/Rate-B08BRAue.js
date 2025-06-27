import{Q as w,E as u,v as B,H as b,x as z,ab as R,aC as N,d as A,y as H,z as x,X as T,r as p,W as U,Y as E,a as M,ad as P,D as k,cc as D,l as O,N as W,a3 as S}from"./index-DItnb3D9.js";function j(e){const{railColor:r}=e;return{itemColor:r,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}const X={name:"Rate",common:w,self:j},K=u("svg",{viewBox:"0 0 512 512"},u("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),Q=B("rate",{display:"inline-flex",flexWrap:"nowrap"},[b("&:hover",[z("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),z("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[b("&:not(:first-child)",`
 margin-left: 6px;
 `),R("active",`
 color: var(--n-item-color-active);
 `)]),N("readonly",`
 cursor: pointer;
 `,[z("item",[b("&:hover",`
 transform: scale(1.05);
 `),b("&:active",`
 transform: scale(0.96);
 `)])]),z("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[R("active",`
 color: var(--n-item-color-active);
 `)])]),Y=Object.assign(Object.assign({},x.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),G=A({name:"Rate",props:Y,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:d}=H(e),n=x("Rate","-rate",Q,X,e,r),f=T(e,"value"),m=p(e.defaultValue),v=p(null),l=U(e),h=E(f,m);function g(t){const{"onUpdate:value":a,onUpdateValue:o}=e,{nTriggerFormChange:C,nTriggerFormInput:c}=l;a&&S(a,t),o&&S(o,t),m.value=t,C(),c()}function s(t,a){return e.allowHalf?a.offsetX>=Math.floor(a.currentTarget.offsetWidth/2)?t+1:t+.5:t+1}let y=!1;function I(t,a){y||(v.value=s(t,a))}function F(){v.value=null}function L(t,a){var o;const{clearable:C}=e,c=s(t,a);C&&c===h.value?(y=!0,(o=e.onClear)===null||o===void 0||o.call(e),v.value=null,g(null)):g(c)}function $(){y=!1}const _=M(()=>{const{size:t}=e,{self:a}=n.value;return typeof t=="number"?`${t}px`:a[P("size",t)]}),V=M(()=>{const{common:{cubicBezierEaseInOut:t},self:a}=n.value,{itemColor:o,itemColorActive:C}=a,{color:c}=e;return{"--n-bezier":t,"--n-item-color":o,"--n-item-color-active":c||C,"--n-item-size":_.value}}),i=d?k("rate",M(()=>{const t=_.value,{color:a}=e;let o="";return t&&(o+=t[0]),a&&(o+=D(a)),o}),V,e):void 0;return{mergedClsPrefix:r,mergedValue:h,hoverIndex:v,handleMouseMove:I,handleClick:L,handleMouseLeave:F,handleMouseEnterSomeStar:$,cssVars:d?void 0:V,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{readonly:e,hoverIndex:r,mergedValue:d,mergedClsPrefix:n,onRender:f,$slots:{default:m}}=this;return f==null||f(),u("div",{class:[`${n}-rate`,{[`${n}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},O(this.count,(v,l)=>{const h=m?m({index:l}):u(W,{clsPrefix:n},{default:()=>K}),g=r!==null?l+1<=r:l+1<=(d||0);return u("div",{key:l,class:[`${n}-rate__item`,g&&`${n}-rate__item--active`],onClick:e?void 0:s=>{this.handleClick(l,s)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:s=>{this.handleMouseMove(l,s)}},h,this.allowHalf?u("div",{class:[`${n}-rate__half`,{[`${n}-rate__half--active`]:!g&&r!==null?l+.5<=r:l+.5<=(d||0)}]},h):null)}))}});export{G as _};
