import{V as Je,bH as We,N as M,A as n,ba as b,C as j,Z as he,bc as qe,bd as Qe,bI as Ze,d as Ge,D as eo,E as ge,r as k,aq as oo,a as w,a1 as ao,ar as to,Q as fe,ak as G,a5 as no,I as ve,a7 as ro,bJ as ee,J as f,bK as io,bL as lo,ai as so,bM as co,ab as uo,au as _,a3 as O,a4 as U}from"./index-CKOHag-y.js";function ho(t){const i="rgba(0, 0, 0, .85)",y="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:v,primaryColor:s,baseColor:d,cardColor:z,modalColor:R,popoverColor:L,borderRadius:K,fontSize:V,opacityDisabled:B}=t;return Object.assign(Object.assign({},We),{fontSize:V,markFontSize:V,railColor:v,railColorHover:v,fillColor:s,fillColorHover:s,opacityDisabled:B,handleColor:"#FFF",dotColor:z,dotColorModal:R,dotColorPopover:L,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:i,indicatorBoxShadow:y,indicatorTextColor:d,indicatorBorderRadius:K,dotBorder:`2px solid ${v}`,dotBorderActive:`2px solid ${s}`,dotBoxShadow:""})}const fo={name:"Slider",common:Je,self:ho},vo=M([n("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[b("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),b("vertical",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),n("slider-marks",[n("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),b("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[n("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[n("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),n("slider-rail",`
 height: 100%;
 `,[j("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),b("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),n("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[n("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),n("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[n("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),b("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[n("slider-handle",`
 cursor: not-allowed;
 `)]),b("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),M("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[j("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),b("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[j("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[n("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),n("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[j("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),n("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[n("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[n("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[M("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),M("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[M("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),n("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[b("transition-disabled",[n("slider-dot","transition: none;")]),n("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[b("active","border: var(--n-dot-border-active);")])])]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[he()]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[b("top",`
 margin-bottom: 12px;
 `),b("right",`
 margin-left: 12px;
 `),b("bottom",`
 margin-top: 12px;
 `),b("left",`
 margin-right: 12px;
 `),he()]),qe(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),Qe(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function be(t){return window.TouchEvent&&t instanceof window.TouchEvent}function me(){const t=new Map,i=y=>v=>{t.set(y,v)};return Ze(()=>{t.clear()}),[t,i]}const bo=0,mo=Object.assign(Object.assign({},ge.props),{to:ee.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),po=Ge({name:"Slider",props:mo,slots:Object,setup(t){const{mergedClsPrefixRef:i,namespaceRef:y,inlineThemeDisabled:v}=eo(t),s=ge("Slider","-slider",vo,fo,t,i),d=k(null),[z,R]=me(),[L,K]=me(),V=k(new Set),B=oo(t),{mergedDisabledRef:$}=B,oe=w(()=>{const{step:e}=t;if(Number(e)<=0||e==="mark")return 0;const o=e.toString();let a=0;return o.includes(".")&&(a=o.length-o.indexOf(".")-1),a}),X=k(t.defaultValue),pe=ao(t,"value"),Y=to(pe,X),m=w(()=>{const{value:e}=Y;return(t.range?e:[e]).map(se)}),ae=w(()=>m.value.length>2),we=w(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),te=w(()=>{const{marks:e}=t;return e?Object.keys(e).map(Number.parseFloat):null}),g=k(-1),ne=k(-1),C=k(-1),S=k(!1),F=k(!1),J=w(()=>{const{vertical:e,reverse:o}=t;return e?o?"top":"bottom":o?"right":"left"}),xe=w(()=>{if(ae.value)return;const e=m.value,o=I(t.range?Math.min(...e):t.min),a=I(t.range?Math.max(...e):e[0]),{value:r}=J;return t.vertical?{[r]:`${o}%`,height:`${a-o}%`}:{[r]:`${o}%`,width:`${a-o}%`}}),ke=w(()=>{const e=[],{marks:o}=t;if(o){const a=m.value.slice();a.sort((h,u)=>h-u);const{value:r}=J,{value:l}=ae,{range:c}=t,p=l?()=>!1:h=>c?h>=a[0]&&h<=a[a.length-1]:h<=a[0];for(const h of Object.keys(o)){const u=Number(h);e.push({active:p(u),key:u,label:o[h],style:{[r]:`${I(u)}%`}})}}return e});function ye(e,o){const a=I(e),{value:r}=J;return{[r]:`${a}%`,zIndex:o===g.value?1:0}}function re(e){return t.showTooltip||C.value===e||g.value===e&&S.value}function Re(e){return S.value?!(g.value===e&&ne.value===e):!0}function Ce(e){var o;~e&&(g.value=e,(o=z.get(e))===null||o===void 0||o.focus())}function Se(){L.forEach((e,o)=>{re(o)&&e.syncPosition()})}function ie(e){const{"onUpdate:value":o,onUpdateValue:a}=t,{nTriggerFormInput:r,nTriggerFormChange:l}=B;a&&_(a,e),o&&_(o,e),X.value=e,r(),l()}function le(e){const{range:o}=t;if(o){if(Array.isArray(e)){const{value:a}=m;e.join()!==a.join()&&ie(e)}}else Array.isArray(e)||m.value[0]!==e&&ie(e)}function W(e,o){if(t.range){const a=m.value.slice();a.splice(o,1,e),le(a)}else le(e)}function q(e,o,a){const r=a!==void 0;a||(a=e-o>0?1:-1);const l=te.value||[],{step:c}=t;if(c==="mark"){const u=H(e,l.concat(o),r?a:void 0);return u?u.value:o}if(c<=0)return o;const{value:p}=oe;let h;if(r){const u=Number((o/c).toFixed(p)),x=Math.floor(u),Q=u>x?x:x-1,Z=u<x?x:x+1;h=H(o,[Number((Q*c).toFixed(p)),Number((Z*c).toFixed(p)),...l],a)}else{const u=Te(e);h=H(e,[...l,u])}return h?se(h.value):o}function se(e){return Math.min(t.max,Math.max(t.min,e))}function I(e){const{max:o,min:a}=t;return(e-a)/(o-a)*100}function ze(e){const{max:o,min:a}=t;return a+(o-a)*e}function Te(e){const{step:o,min:a}=t;if(Number(o)<=0||o==="mark")return e;const r=Math.round((e-a)/o)*o+a;return Number(r.toFixed(oe.value))}function H(e,o=te.value,a){if(!(o!=null&&o.length))return null;let r=null,l=-1;for(;++l<o.length;){const c=o[l]-e,p=Math.abs(c);(a===void 0||c*a>0)&&(r===null||p<r.distance)&&(r={index:l,distance:p,value:o[l]})}return r}function de(e){const o=d.value;if(!o)return;const a=be(e)?e.touches[0]:e,r=o.getBoundingClientRect();let l;return t.vertical?l=(r.bottom-a.clientY)/r.height:l=(a.clientX-r.left)/r.width,t.reverse&&(l=1-l),ze(l)}function De(e){if($.value||!t.keyboard)return;const{vertical:o,reverse:a}=t;switch(e.key){case"ArrowUp":e.preventDefault(),A(o&&a?-1:1);break;case"ArrowRight":e.preventDefault(),A(!o&&a?-1:1);break;case"ArrowDown":e.preventDefault(),A(o&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),A(!o&&a?1:-1);break}}function A(e){const o=g.value;if(o===-1)return;const{step:a}=t,r=m.value[o],l=Number(a)<=0||a==="mark"?r:r+a*e;W(q(l,r,e>0?1:-1),o)}function Me(e){var o,a;if($.value||!be(e)&&e.button!==bo)return;const r=de(e);if(r===void 0)return;const l=m.value.slice(),c=t.range?(a=(o=H(r,l))===null||o===void 0?void 0:o.index)!==null&&a!==void 0?a:-1:0;c!==-1&&(e.preventDefault(),Ce(c),Ve(),W(q(r,m.value[c]),c))}function Ve(){S.value||(S.value=!0,t.onDragstart&&_(t.onDragstart),O("touchend",document,P),O("mouseup",document,P),O("touchmove",document,N),O("mousemove",document,N))}function E(){S.value&&(S.value=!1,t.onDragend&&_(t.onDragend),U("touchend",document,P),U("mouseup",document,P),U("touchmove",document,N),U("mousemove",document,N))}function N(e){const{value:o}=g;if(!S.value||o===-1){E();return}const a=de(e);a!==void 0&&W(q(a,m.value[o]),o)}function P(){E()}function Be(e){g.value=e,$.value||(C.value=e)}function $e(e){g.value===e&&(g.value=-1,E()),C.value===e&&(C.value=-1)}function Fe(e){C.value=e}function Ie(e){C.value===e&&(C.value=-1)}fe(g,(e,o)=>void G(()=>ne.value=o)),fe(Y,()=>{if(t.marks){if(F.value)return;F.value=!0,G(()=>{F.value=!1})}G(Se)}),no(()=>{E()});const ce=w(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:a,fillColor:r,fillColorHover:l,handleColor:c,opacityDisabled:p,dotColor:h,dotColorModal:u,handleBoxShadow:x,handleBoxShadowHover:Q,handleBoxShadowActive:Z,handleBoxShadowFocus:He,dotBorder:Ae,dotBoxShadow:Ee,railHeight:Ne,railWidthVertical:Pe,handleSize:je,dotHeight:_e,dotWidth:Oe,dotBorderRadius:Ue,fontSize:Le,dotBorderActive:Ke,dotColorPopover:Xe},common:{cubicBezierEaseInOut:Ye}}=s.value;return{"--n-bezier":Ye,"--n-dot-border":Ae,"--n-dot-border-active":Ke,"--n-dot-border-radius":Ue,"--n-dot-box-shadow":Ee,"--n-dot-color":h,"--n-dot-color-modal":u,"--n-dot-color-popover":Xe,"--n-dot-height":_e,"--n-dot-width":Oe,"--n-fill-color":r,"--n-fill-color-hover":l,"--n-font-size":Le,"--n-handle-box-shadow":x,"--n-handle-box-shadow-active":Z,"--n-handle-box-shadow-focus":He,"--n-handle-box-shadow-hover":Q,"--n-handle-color":c,"--n-handle-size":je,"--n-opacity-disabled":p,"--n-rail-color":o,"--n-rail-color-hover":a,"--n-rail-height":Ne,"--n-rail-width-vertical":Pe,"--n-mark-font-size":e}}),T=v?ve("slider",void 0,ce,t):void 0,ue=w(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:a,indicatorTextColor:r,indicatorBorderRadius:l}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":l,"--n-indicator-box-shadow":a,"--n-indicator-color":o,"--n-indicator-text-color":r}}),D=v?ve("slider-indicator",void 0,ue,t):void 0;return{mergedClsPrefix:i,namespace:y,uncontrolledValue:X,mergedValue:Y,mergedDisabled:$,mergedPlacement:we,isMounted:ro(),adjustedTo:ee(t),dotTransitionDisabled:F,markInfos:ke,isShowTooltip:re,shouldKeepTooltipTransition:Re,handleRailRef:d,setHandleRefs:R,setFollowerRefs:K,fillStyle:xe,getHandleStyle:ye,activeIndex:g,arrifiedValues:m,followerEnabledIndexSet:V,handleRailMouseDown:Me,handleHandleFocus:Be,handleHandleBlur:$e,handleHandleMouseEnter:Fe,handleHandleMouseLeave:Ie,handleRailKeyDown:De,indicatorCssVars:v?void 0:ue,indicatorThemeClass:D==null?void 0:D.themeClass,indicatorOnRender:D==null?void 0:D.onRender,cssVars:v?void 0:ce,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){var t;const{mergedClsPrefix:i,themeClass:y,formatTooltip:v}=this;return(t=this.onRender)===null||t===void 0||t.call(this),f("div",{class:[`${i}-slider`,y,{[`${i}-slider--disabled`]:this.mergedDisabled,[`${i}-slider--active`]:this.activeIndex!==-1,[`${i}-slider--with-mark`]:this.marks,[`${i}-slider--vertical`]:this.vertical,[`${i}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},f("div",{class:`${i}-slider-rail`},f("div",{class:`${i}-slider-rail__fill`,style:this.fillStyle}),this.marks?f("div",{class:[`${i}-slider-dots`,this.dotTransitionDisabled&&`${i}-slider-dots--transition-disabled`]},this.markInfos.map(s=>f("div",{key:s.key,class:[`${i}-slider-dot`,{[`${i}-slider-dot--active`]:s.active}],style:s.style}))):null,f("div",{ref:"handleRailRef",class:`${i}-slider-handles`},this.arrifiedValues.map((s,d)=>{const z=this.isShowTooltip(d);return f(io,null,{default:()=>[f(lo,null,{default:()=>f("div",{ref:this.setHandleRefs(d),class:`${i}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":s,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(s,d),onFocus:()=>{this.handleHandleFocus(d)},onBlur:()=>{this.handleHandleBlur(d)},onMouseenter:()=>{this.handleHandleMouseEnter(d)},onMouseleave:()=>{this.handleHandleMouseLeave(d)}},so(this.$slots.thumb,()=>[f("div",{class:`${i}-slider-handle`})]))}),this.tooltip&&f(co,{ref:this.setFollowerRefs(d),show:z,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===ee.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>f(uo,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var R;return z?((R=this.indicatorOnRender)===null||R===void 0||R.call(this),f("div",{class:[`${i}-slider-handle-indicator`,this.indicatorThemeClass,`${i}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof v=="function"?v(s):s)):null}})})]})})),this.marks?f("div",{class:`${i}-slider-marks`},this.markInfos.map(s=>f("div",{key:s.key,class:`${i}-slider-mark`,style:s.style},typeof s.label=="function"?s.label():s.label))):null))}});export{po as _};
