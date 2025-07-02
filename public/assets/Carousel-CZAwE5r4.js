import{c9 as Tt,ca as ze,bX as He,b4 as $t,ax as Vt,bN as Ot,aw as Mt,d as ce,D as de,r as V,bx as jt,J as w,cb as Lt,a as x,j as Je,aD as Ge,A as Ut,C as c,N as A,aZ as d,b7 as Ve,a7 as Bt,a6 as Zt,aO as Wt,cc as Xt,T as ie,V as Oe,E as qe,cd as Yt,I as Kt,br as Ft,aR as Me,bO as je,bK as Ht,bM as Jt,ak as Gt,W as qt,ce as Qt,aF as H,aE as J}from"./index-G0XXQiiJ.js";function en(e){return Tt(ze(e).toLowerCase())}function tn(e,o,a,l){for(var f=-1,p=e==null?0:e.length;++f<p;)a=o(a,e[f],f,e);return a}function nn(e){return function(o){return e==null?void 0:e[o]}}var on={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},an=nn(on),rn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sn="\\u0300-\\u036f",ln="\\ufe20-\\ufe2f",un="\\u20d0-\\u20ff",cn=sn+ln+un,dn="["+cn+"]",fn=RegExp(dn,"g");function vn(e){return e=ze(e),e&&e.replace(rn,an).replace(fn,"")}var xn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function hn(e){return e.match(xn)||[]}var pn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gn(e){return pn.test(e)}var Qe="\\ud800-\\udfff",mn="\\u0300-\\u036f",bn="\\ufe20-\\ufe2f",wn="\\u20d0-\\u20ff",yn=mn+bn+wn,et="\\u2700-\\u27bf",tt="a-z\\xdf-\\xf6\\xf8-\\xff",Sn="\\xac\\xb1\\xd7\\xf7",Cn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rn="\\u2000-\\u206f",zn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nt="A-Z\\xc0-\\xd6\\xd8-\\xde",Pn="\\ufe0e\\ufe0f",ot=Sn+Cn+Rn+zn,at="['’]",Le="["+ot+"]",In="["+yn+"]",rt="\\d+",kn="["+et+"]",st="["+tt+"]",it="[^"+Qe+ot+rt+et+tt+nt+"]",Dn="\\ud83c[\\udffb-\\udfff]",Nn="(?:"+In+"|"+Dn+")",En="[^"+Qe+"]",lt="(?:\\ud83c[\\udde6-\\uddff]){2}",ut="[\\ud800-\\udbff][\\udc00-\\udfff]",W="["+nt+"]",An="\\u200d",Ue="(?:"+st+"|"+it+")",_n="(?:"+W+"|"+it+")",Be="(?:"+at+"(?:d|ll|m|re|s|t|ve))?",Ze="(?:"+at+"(?:D|LL|M|RE|S|T|VE))?",ct=Nn+"?",dt="["+Pn+"]?",Tn="(?:"+An+"(?:"+[En,lt,ut].join("|")+")"+dt+ct+")*",$n="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Vn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",On=dt+ct+Tn,Mn="(?:"+[kn,lt,ut].join("|")+")"+On,jn=RegExp([W+"?"+st+"+"+Be+"(?="+[Le,W,"$"].join("|")+")",_n+"+"+Ze+"(?="+[Le,W+Ue,"$"].join("|")+")",W+"?"+Ue+"+"+Be,W+"+"+Ze,Vn,$n,rt,Mn].join("|"),"g");function Ln(e){return e.match(jn)||[]}function Un(e,o,a){return e=ze(e),o=o,o===void 0?gn(e)?Ln(e):hn(e):e.match(o)||[]}var Bn="['’]",Zn=RegExp(Bn,"g");function Wn(e){return function(o){return tn(Un(vn(o).replace(Zn,"")),e,"")}}var We=Wn(function(e,o,a){return o=o.toLowerCase(),e+(a?en(o):o)});function Xn(e){const{length:o}=e;return o>1&&(e.push(Xe(e[0],0,"append")),e.unshift(Xe(e[o-1],o-1,"prepend"))),e}function Xe(e,o,a){return He(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Ye(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Ce(e,o){return o?e+1:e}function Yn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Kn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Fn(e,o){return o&&e>3?e-2:e}function Ke(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Fe(e,o){let{offsetWidth:a,offsetHeight:l}=e;if(o){const f=getComputedStyle(e);a=a-Number.parseFloat(f.getPropertyValue("padding-left"))-Number.parseFloat(f.getPropertyValue("padding-right")),l=l-Number.parseFloat(f.getPropertyValue("padding-top"))-Number.parseFloat(f.getPropertyValue("padding-bottom"))}return{width:a,height:l}}function le(e,o,a){return e<o?o:e>a?a:e}function Hn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,l,,f="ms"]=a;return Number(l)*(f==="ms"?1:1e3)}return 0}const ft=Mt("n-carousel-methods");function Jn(e){$t(ft,e)}function Pe(e="unknown",o="component"){const a=Vt(ft);return a||Ot(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}const Gn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},qn=ce({name:"CarouselDots",props:Gn,setup(e){const{mergedClsPrefixRef:o}=de(e),a=V([]),l=Pe();function f(g,v){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(v);return}e.keyboard&&y(g)}function p(g){e.trigger==="hover"&&l.to(g)}function P(g){e.trigger==="click"&&l.to(g)}function y(g){var v;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const b=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:R}=g,O=R==="PageUp"||R==="ArrowUp",M=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",z=R==="PageDown"||R==="ArrowLeft",I=l.isVertical(),T=I?O:C,X=I?M:z;!T&&!X||(g.preventDefault(),T&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):X&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var v;(v=a.value[g])===null||v===void 0||v.focus()}return jt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:f,handleMouseenter:p,handleClick:P}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Lt(this.total,a=>{const l=a===this.currentIndex;return w("div",{"aria-selected":l,ref:f=>o.push(f),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:f=>{this.handleKeydown(f,a)}})}))}}),Qn=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),eo=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),to=ce({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=de(e),{isVertical:a,isPrevDisabled:l,isNextDisabled:f,prev:p,next:P}=Pe();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:l,isNextDisabled:f,prev:p,next:P}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Qn),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},eo))}}),ue="CarouselItem";function no(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===ue}const oo=ce({name:ue,setup(e){const{mergedClsPrefixRef:o}=de(e),a=Pe(We(ue),`n-${We(ue)}`),l=V(),f=x(()=>{const{value:v}=l;return v?a.getSlideIndex(v):-1}),p=x(()=>a.isPrev(f.value)),P=x(()=>a.isNext(f.value)),y=x(()=>a.isActive(f.value)),S=x(()=>a.getSlideStyle(f.value));Je(()=>{a.addSlide(l.value)}),Ge(()=>{a.removeSlide(l.value)});function g(v){const{value:b}=f;b!==void 0&&(a==null||a.onCarouselItemClick(b,v))}return{mergedClsPrefix:o,selfElRef:l,isPrev:p,isNext:P,isActive:y,index:f,style:S,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:l,isNext:f,isActive:p,index:P,style:y}=this,S=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:p,[`${a}-carousel__slide--prev`]:l,[`${a}-carousel__slide--next`]:f}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":P,"aria-hidden":!p,style:y,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:l,isNext:f,isActive:p,index:P}))}}),ao=Ut("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[A("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[d("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[A("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 background-color: var(--n-dot-color-active);
 `)])]),d("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[A("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[A("svg",`
 height: 1em;
 width: 1em;
 `),A("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),d("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),d("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),d("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[d("current",`
 transform: translateY(-50%) translateZ(0);
 `),d("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),d("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),d("usercontrol",[c("slides",[A(">",[A("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),d("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),d("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),d("show-arrow",[d("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),d("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),d("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[A("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[A("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[A("> *:first-child",`
 margin-right: 12px;
 `)])]),d("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[A("> *:first-child",`
 margin-right: 12px;
 `)])]),d("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[d("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),d("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[d("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),d("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),d("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),ro=["transitionDuration","transitionTimingFunction"],so=Object.assign(Object.assign({},qe.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Re=!1;const uo=ce({name:"Carousel",props:so,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=de(e),l=V(null),f=V(null),p=V([]),P={value:[]},y=x(()=>e.direction==="vertical"),S=x(()=>y.value?"height":"width"),g=x(()=>y.value?"bottom":"right"),v=x(()=>e.effect==="slide"),b=x(()=>e.loop&&e.slidesPerView===1&&v.value),R=x(()=>e.effect==="custom"),O=x(()=>!v.value||e.centeredSlides?1:e.slidesPerView),M=x(()=>R.value?1:e.slidesPerView),C=x(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=V({width:0,height:0}),I=x(()=>{const{value:t}=p;if(!t.length)return[];const{value:n}=C;if(n)return t.map(m=>Fe(m));const{value:r}=M,{value:i}=z,{value:u}=S;let s=i[u];if(r!=="auto"){const{spaceBetween:m}=e,k=s-(r-1)*m,se=1/Math.max(1,r);s=k*se}const h=Object.assign(Object.assign({},i),{[u]:s});return t.map(()=>h)}),T=x(()=>{const{value:t}=I;if(!t.length)return[];const{centeredSlides:n,spaceBetween:r}=e,{value:i}=S,{[i]:u}=z.value;let s=0;return t.map(({[i]:h})=>{let m=s;return n&&(m+=(h-u)/2),s+=h+r,m})}),X=V(!1),fe=x(()=>{const{transitionStyle:t}=e;return t?Ve(t,ro):{}}),ve=x(()=>R.value?0:Hn(fe.value.transitionDuration)),Ie=x(()=>{const{value:t}=p;if(!t.length)return[];const n=!(C.value||M.value===1),r=h=>{if(n){const{value:m}=S;return{[m]:`${I.value[h][m]}px`}}};if(R.value)return t.map((h,m)=>r(m));const{effect:i,spaceBetween:u}=e,{value:s}=g;return t.reduce((h,m,k)=>{const se=Object.assign(Object.assign({},r(k)),{[`margin-${s}`]:`${u}px`});return h.push(se),X.value&&(i==="fade"||i==="card")&&Object.assign(se,fe.value),h},[])}),D=x(()=>{const{value:t}=O,{length:n}=p.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:r}=I,{length:i}=r;if(!i)return n;const{value:u}=T,{value:s}=S,h=z.value[s];let m=r[r.length-1][s],k=i;for(;k>1&&m<h;)k--,m+=u[k]-u[k-1];return le(k+1,1,i)}}),G=x(()=>Fn(D.value,b.value)),vt=Ce(e.defaultIndex,b.value),xe=V(Ye(vt,D.value,b.value)),_=Bt(Zt(e,"currentIndex"),xe),N=x(()=>Ce(_.value,b.value));function Y(t){var n,r;t=le(t,0,D.value-1);const i=Ye(t,D.value,b.value),{value:u}=_;i!==_.value&&(xe.value=i,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,i,u),(r=e.onUpdateCurrentIndex)===null||r===void 0||r.call(e,i,u))}function q(t=N.value){return Yn(t,D.value,e.loop)}function Q(t=N.value){return Kn(t,D.value,e.loop)}function xt(t){const n=L(t);return n!==null&&q()===n}function ht(t){const n=L(t);return n!==null&&Q()===n}function ke(t){return N.value===L(t)}function pt(t){return _.value===t}function De(){return q()===null}function Ne(){return Q()===null}function he(t){const n=le(Ce(t,b.value),0,D.value);(t!==_.value||n!==N.value)&&Y(n)}function pe(){const t=q();t!==null&&Y(t)}function ee(){const t=Q();t!==null&&Y(t)}let E=!1;function gt(){(!E||!b.value)&&pe()}function mt(){(!E||!b.value)&&ee()}let j=0;const ge=V({});function te(t,n=0){ge.value=Object.assign({},fe.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function K(t=0){v.value?me(N.value,t):j!==0&&(!E&&t>0&&(E=!0),te(j=0,t))}function me(t,n){const r=Ee(t);r!==j&&n>0&&(E=!0),j=Ee(N.value),te(r,n)}function Ee(t){let n;return t>=D.value-1?n=Ae():n=T.value[t]||0,n}function Ae(){if(O.value==="auto"){const{value:t}=S,{[t]:n}=z.value,{value:r}=T,i=r[r.length-1];let u;if(i===void 0)u=n;else{const{value:s}=I;u=i+s[s.length-1][t]}return u-n}else{const{value:t}=T;return t[D.value-1]||0}}const F={currentIndexRef:_,to:he,prev:gt,next:mt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:xt,isNext:ht,isActive:ke,isPrevDisabled:De,isNextDisabled:Ne,getSlideIndex:L,getSlideStyle:yt,addSlide:bt,removeSlide:wt,onCarouselItemClick:St};Jn(F);function bt(t){t&&p.value.push(t)}function wt(t){if(!t)return;const n=L(t);n!==-1&&p.value.splice(n,1)}function L(t){return typeof t=="number"?t:t?p.value.indexOf(t):-1}function yt(t){const n=L(t);if(n!==-1){const r=[Ie.value[n]],i=F.isPrev(n),u=F.isNext(n);return i&&r.push(e.prevSlideStyle||""),u&&r.push(e.nextSlideStyle||""),qt(r)}}let be=0,we=0,$=0,ye=0,ne=!1,Se=!1;function St(t,n){let r=!E&&!ne&&!Se;e.effect==="card"&&r&&!ke(t)&&(he(t),r=!1),r||(n.preventDefault(),n.stopPropagation())}let oe=null;function ae(){oe&&(clearInterval(oe),oe=null)}function U(){ae(),!e.autoplay||G.value<2||(oe=window.setInterval(ee,e.interval))}function _e(t){var n;if(Re||!(!((n=f.value)===null||n===void 0)&&n.contains(Qt(t))))return;Re=!0,ne=!0,Se=!1,ye=Date.now(),ae(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const r=Ke(t)?t.touches[0]:t;y.value?we=r.clientY:be=r.clientX,e.touchable&&(H("touchmove",document,re),H("touchend",document,B),H("touchcancel",document,B)),e.draggable&&(H("mousemove",document,re),H("mouseup",document,B))}function re(t){const{value:n}=y,{value:r}=S,i=Ke(t)?t.touches[0]:t,u=n?i.clientY-we:i.clientX-be,s=z.value[r];$=le(u,-s,s),t.cancelable&&t.preventDefault(),v.value&&te(j-$,0)}function B(){const{value:t}=N;let n=t;if(!E&&$!==0&&v.value){const r=j-$,i=[...T.value.slice(0,D.value-1),Ae()];let u=null;for(let s=0;s<i.length;s++){const h=Math.abs(i[s]-r);if(u!==null&&u<h)break;u=h,n=s}}if(n===t){const r=Date.now()-ye,{value:i}=S,u=z.value[i];$>u/2||$/r>.4?n=q(t):($<-u/2||$/r<-.4)&&(n=Q(t))}n!==null&&n!==t?(Se=!0,Y(n),Oe(()=>{(!b.value||xe.value!==_.value)&&K(ve.value)})):K(ve.value),Te(),U()}function Te(){ne&&(Re=!1),ne=!1,be=0,we=0,$=0,ye=0,J("touchmove",document,re),J("touchend",document,B),J("touchcancel",document,B),J("mousemove",document,re),J("mouseup",document,B)}function Ct(){if(v.value&&E){const{value:t}=N;me(t,0)}else U();v.value&&(ge.value.transitionDuration="0ms"),E=!1}function Rt(t){if(t.preventDefault(),E)return;let{deltaX:n,deltaY:r}=t;t.shiftKey&&!n&&(n=r);const i=-1,u=1,s=(n||r)>0?u:i;let h=0,m=0;y.value?m=s:h=s;const k=10;(m*r>=k||h*n>=k)&&(s===u&&!Ne()?ee():s===i&&!De()&&pe())}function zt(){z.value=Fe(l.value,!0),U()}function Pt(){var t,n;C.value&&((n=(t=I.effect).scheduler)===null||n===void 0||n.call(t),I.effect.run())}function It(){e.autoplay&&ae()}function kt(){e.autoplay&&U()}Je(()=>{Wt(U),requestAnimationFrame(()=>X.value=!0)}),Ge(()=>{Te(),ae()}),Xt(()=>{const{value:t}=p,{value:n}=P,r=new Map,i=s=>r.has(s)?r.get(s):-1;let u=!1;for(let s=0;s<t.length;s++){const h=n.findIndex(m=>m.el===t[s]);h!==s&&(u=!0),r.set(t[s],h)}u&&t.sort((s,h)=>i(s)-i(h))}),ie(N,(t,n)=>{if(t!==n)if(U(),v.value){if(b.value){const{value:r}=D;G.value>2&&t===r-2&&n===1?t=0:t===1&&n===r-2&&(t=r-1)}me(t,ve.value)}else K()},{immediate:!0}),ie([b,O],()=>void Oe(()=>{Y(N.value)})),ie(T,()=>{v.value&&K()},{deep:!0}),ie(v,t=>{t?K():(E=!1,te(j=0))});const Dt=x(()=>({onTouchstartPassive:e.touchable?_e:void 0,onMousedown:e.draggable?_e:void 0,onWheel:e.mousewheel?Rt:void 0})),Nt=x(()=>Object.assign(Object.assign({},Ve(F,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:G.value,currentIndex:_.value})),Et=x(()=>({total:G.value,currentIndex:_.value,to:F.to})),At={getCurrentIndex:()=>_.value,to:he,prev:pe,next:ee},_t=qe("Carousel","-carousel",ao,Yt,e,o),$e=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:r,dotColorActive:i,dotColorFocus:u,dotLineWidth:s,dotLineWidthActive:h,arrowColor:m}}=_t.value;return{"--n-bezier":t,"--n-dot-color":r,"--n-dot-color-focus":u,"--n-dot-color-active":i,"--n-dot-size":n,"--n-dot-line-width":s,"--n-dot-line-width-active":h,"--n-arrow-color":m}}),Z=a?Kt("carousel",void 0,$e,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:l,slidesElRef:f,slideVNodes:P,duplicatedable:b,userWantsControl:R,autoSlideSize:C,realIndex:N,slideStyles:Ie,translateStyle:ge,slidesControlListeners:Dt,handleTransitionEnd:Ct,handleResize:zt,handleSlideResize:Pt,handleMouseenter:It,handleMouseleave:kt,isActive:pt,arrowSlotProps:Nt,dotSlotProps:Et},At),{cssVars:a?void 0:$e,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:l,slideStyles:f,dotType:p,dotPlacement:P,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:v,$slots:{default:b,dots:R,arrow:O}}=this,M=b&&Ft(b())||[];let C=io(M);return C.length||(C=M.map(z=>w(oo,null,{default:()=>He(z)}))),this.duplicatedable&&(C=Xn(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(z=>w(Me,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${P}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,l&&`${o}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Me,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((z,I)=>w("div",{style:f[I],key:I},Ht(w(Gt,Object.assign({},S),{default:()=>z}),[[Jt,this.isActive(I)]]))):C)}),this.showDots&&v.total>1&&je(R,v,()=>[w(qn,{key:p+P,total:v.total,currentIndex:v.currentIndex,dotType:p,trigger:this.trigger,keyboard:this.keyboard})]),a&&je(O,g,()=>[w(to,null)]))}});function io(e){return e.reduce((o,a)=>(no(a)&&o.push(a),o),[])}export{uo as _,oo as a};
