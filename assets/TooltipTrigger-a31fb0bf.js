import{a as i,s as V}from"./styled-components.browser.esm-1cd6bce5.js";import{r as l}from"./index-76fb7be0.js";import{u as q,a as w,o as O,f as N,s as R,b as F,c as E,d as I,e as P,g as M,h as _,F as S}from"./floating-ui.react-6c855d10.js";import{B as k}from"./Button-afacee23.js";const c=({initialOpen:e=!1,placement:a="top",open:t,onOpenChange:n}={})=>{const[o,p]=l.useState(e),r=t??o,u=n??p,d=q({placement:a,open:r,onOpenChange:u,whileElementsMounted:w,middleware:[O(5),N({crossAxis:a.includes("-"),fallbackAxisSideDirection:"start",padding:5}),R({padding:5})]}),s=d.context,h=F(s,{move:!1,enabled:t==null}),x=E(s,{enabled:t==null}),T=I(s),C=P(s,{role:"tooltip"}),m=M([h,x,T,C]);return l.useMemo(()=>({open:r,setOpen:u,...m,...d}),[r,u,m,d])},y=l.createContext(null),b=()=>{const e=l.useContext(y);if(e==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e};try{c.displayName="useTooltip",c.__docgenInfo={description:"",displayName:"useTooltip",props:{initialOpen:{defaultValue:{value:"false"},description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const f=({children:e,...a})=>{const t=c(a);return i(y.Provider,{value:t,children:e})};try{f.displayName="Tooltip",f.__docgenInfo={description:"",displayName:"Tooltip",props:{initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const z=V.div`
  background-color: #444;
  color: white;
  font-size: 90%;
  padding: 4px 8px;
  border-radius: 4px;
  box-sizing: border-box;
  width: max-content;
  max-width: calc(100vw - 10px);
`,v=l.forwardRef(({style:e,...a},t)=>{const n=b(),o=_([n.refs.setFloating,t]);return n.open?i(S,{children:i(z,{ref:o,style:{...n.floatingStyles,...e},className:"gle-tooltip-container",...n.getFloatingProps(a)})}):null});try{v.displayName="TooltipContent",v.__docgenInfo={description:"",displayName:"TooltipContent",props:{}}}catch{}const g=l.forwardRef(({children:e,asChild:a=!1,...t},n)=>{const o=b(),p=e.ref,r=_([o.refs.setReference,n,p]);return a&&l.isValidElement(e)?l.cloneElement(e,o.getReferenceProps({ref:r,...t,...e.props,"data-state":o.open?"open":"closed"})):i(k,{ref:r,"data-state":o.open?"open":"closed",...o.getReferenceProps(t),children:e})});try{g.displayName="TooltipTrigger",g.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{f as T,g as a,v as b};
//# sourceMappingURL=TooltipTrigger-a31fb0bf.js.map