import{a as l,s as D}from"./styled-components.browser.esm-b4b4bd00.js";import{r}from"./index-c013ead5.js";import{B as V}from"./Button-d7f674c1.js";import{u as F,a as M,o as H,f as L,s as S,i as T,d as B,e as j,g as z,j as q,h as I,F as A,k as U}from"./floating-ui.react-2c0a59ad.js";const f=({initialOpen:e=!1,placement:n="bottom",modal:a,open:o,onOpenChange:t}={})=>{const[s,d]=r.useState(e),[v,N]=r.useState(),[g,O]=r.useState(),p=o??s,u=t??d,c=F({placement:n,open:p,onOpenChange:u,whileElementsMounted:M,middleware:[H(5),L({crossAxis:n.includes("-"),fallbackAxisSideDirection:"end",padding:5}),S({padding:5})]}),m=c.context,R=T(m,{enabled:o==null}),k=B(m),E=j(m),y=z([R,k,E]);return r.useMemo(()=>({open:p,setOpen:u,...y,...c,modal:a,labelId:v,descriptionId:g,setLabelId:N,setDescriptionId:O}),[p,u,y,c,a,v,g])},w=r.createContext(null),i=()=>{const e=r.useContext(w);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};try{f.displayName="usePopover",f.__docgenInfo={description:"",displayName:"usePopover",props:{initialOpen:{defaultValue:{value:"false"},description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},modal:{defaultValue:null,description:"",name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const _=({children:e,modal:n=!1,...a})=>{const o=f({modal:n,...a});return l(w.Provider,{value:o,children:e})};try{_.displayName="Popover",_.__docgenInfo={description:"",displayName:"Popover",props:{initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},modal:{defaultValue:{value:"false"},description:"",name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const b=r.forwardRef((e,n)=>{const{setOpen:a}=i();return l(V,{type:"button",ref:n,...e,onClick:o=>{var t;(t=e.onClick)==null||t.call(e,o),a(!1)}})});try{b.displayName="PopoverClose",b.__docgenInfo={description:"",displayName:"PopoverClose",props:{primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const h=r.forwardRef((e,n)=>{const{setDescriptionId:a}=i(),o=q();return r.useLayoutEffect(()=>(a(o),()=>a(void 0)),[o,a]),l("p",{...e,ref:n,id:o})});try{h.displayName="PopoverDescription",h.__docgenInfo={description:"",displayName:"PopoverDescription",props:{}}}catch{}const P=r.forwardRef((e,n)=>{const{setLabelId:a}=i(),o=q();return r.useLayoutEffect(()=>(a(o),()=>a(void 0)),[o,a]),l("h2",{...e,ref:n,id:o,children:e.children})});try{P.displayName="PopoverHeading",P.__docgenInfo={description:"",displayName:"PopoverHeading",props:{}}}catch{}const G=D.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 10, 20, 0.1);
  border: 1px solid #ddd;
  font-size: 90%;
  padding: 4px 8px;
  border-radius: 4px;
  box-sizing: border-box;
  width: max-content;
  max-width: calc(100vw - 10px);
`,x=r.forwardRef(({style:e,...n},a)=>{const{context:o,...t}=i(),s=I([t.refs.setFloating,a]);return o.open?l(A,{children:l(U,{context:o,modal:t.modal,children:l(G,{ref:s,style:{...t.floatingStyles,...e},className:"gle-popover-container","aria-labelledby":t.labelId,"aria-describedby":t.descriptionId,...t.getFloatingProps(n),children:n.children})})}):null});try{x.displayName="PopoverContent",x.__docgenInfo={description:"",displayName:"PopoverContent",props:{}}}catch{}const C=r.forwardRef(({children:e,asChild:n=!1,...a},o)=>{const t=i(),s=e.ref,d=I([t.refs.setReference,o,s]);return n&&r.isValidElement(e)?r.cloneElement(e,t.getReferenceProps({ref:d,...a,...e.props,"data-state":t.open?"open":"closed"})):l(V,{ref:d,"data-state":t.open?"open":"closed",...t.getReferenceProps(a),children:e})});try{C.displayName="PopoverTrigger",C.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{_ as P,C as a,x as b,P as c,h as d,b as e};
//# sourceMappingURL=PopoverTrigger-4bd2d477.js.map
