import{v,H as r,d as C,y as b,z as l,am as x,a,D as z,E as y}from"./index-CkCE23X5.js";const T=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[r("&:first-child","margin-top: 0;"),r("&:last-child","margin-bottom: 0;")]),R=Object.assign(Object.assign({},l.props),{depth:[String,Number]}),P=C({name:"P",props:R,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:t}=b(e),h=l("Typography","-p",T,x,e,s),i=a(()=>{const{depth:o}=e,d=o||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:m,pLineHeight:p,pMargin:g,pTextColor:u,[`pTextColor${d}Depth`]:f}}=h.value;return{"--n-bezier":c,"--n-font-size":m,"--n-line-height":p,"--n-margin":g,"--n-text-color":o===void 0?u:f}}),n=t?z("p",a(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:s,cssVars:t?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),y("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{P as _};
