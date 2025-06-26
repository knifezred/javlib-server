import{v as w,H as h,aa as c,d as z,y as $,z as l,ab as H,a as f,ac as o,D as T,E as R}from"./index-B2ucaEoh.js";const B=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("&:first-child",{marginTop:0}),c("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[c("align-text",{paddingLeft:0},[h("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),h("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),h("&::before",{backgroundColor:"var(--n-bar-color)"})])]),N=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),n=r=>z({name:`H${r}`,props:N,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=$(e),a=l("Typography","-h",B,H,e,i),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:m,headerTextColor:p,[o("headerPrefixWidth",r)]:u,[o("headerFontSize",r)]:x,[o("headerMargin",r)]:v,[o("headerBarWidth",r)]:C,[o("headerBarColor",g)]:y}}=a.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":v,"--n-bar-color":y,"--n-bar-width":C,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),t=s?T(`h${r}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:i,alignText:s,mergedClsPrefix:a,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),R(`h${r}`,{class:[`${a}-h`,`${a}-h${r}`,this.themeClass,{[`${a}-h--prefix-bar`]:i,[`${a}-h--align-text`]:s}],style:d},t)}}),W=n("1"),S=n("2"),L=n("3"),O=n("4");n("5");n("6");export{S as N,W as a,O as b,L as c};
