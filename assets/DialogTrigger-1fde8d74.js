import{a as l,s as x}from"./styled-components.browser.esm-1cd6bce5.js";import{r as t}from"./index-76fb7be0.js";import{B as I}from"./Button-afacee23.js";import{u as E,i as F,d as P,e as H,g as L,j as N,h as O,F as M,k as S,y as T}from"./floating-ui.react-6c855d10.js";const m=({initialOpen:e=!1,open:r,onOpenChange:o}={})=>{const[n,a]=t.useState(e),[s,d]=t.useState(),[f,q]=t.useState(),c=r??n,p=o??a,u=E({open:c,onOpenChange:p}),g=u.context,R=F(g,{enabled:r==null}),w=P(g,{outsidePressEvent:"mousedown"}),k=H(g),_=L([R,w,k]);return t.useMemo(()=>({open:c,setOpen:p,..._,...u,labelId:s,descriptionId:f,setLabelId:d,setDescriptionId:q}),[c,p,_,u,s,f])},V=t.createContext(null),i=()=>{const e=t.useContext(V);if(e==null)throw new Error("Dialog components must be wrapped in <Dialog />");return e};try{m.displayName="useDialog",m.__docgenInfo={description:"",displayName:"useDialog",props:{initialOpen:{defaultValue:{value:"false"},description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const y=({children:e,...r})=>{const o=m(r);return l(V.Provider,{value:o,children:e})};try{y.displayName="Dialog",y.__docgenInfo={description:"",displayName:"Dialog",props:{initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const D=t.forwardRef((e,r)=>{const{setOpen:o}=i();return l(I,{...e,ref:r,onClick:()=>o(!1)})});try{D.displayName="DialogClose",D.__docgenInfo={description:"",displayName:"DialogClose",props:{primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const b=t.forwardRef(({children:e,...r},o)=>{const{setDescriptionId:n}=i(),a=N();return t.useLayoutEffect(()=>(n(a),()=>n(void 0)),[a,n]),l("p",{...r,ref:o,id:a,children:e})});try{b.displayName="DialogDescription",b.__docgenInfo={description:"",displayName:"DialogDescription",props:{}}}catch{}const v=t.forwardRef(({children:e,...r},o)=>{const{setLabelId:n}=i(),a=N();return t.useLayoutEffect(()=>(n(a),()=>n(void 0)),[a,n]),l("h2",{...r,ref:o,id:a,children:e})});try{v.displayName="DialogHeading",v.__docgenInfo={description:"",displayName:"DialogHeading",props:{}}}catch{}const B=x(T)`
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
`,j=x.div`
  background-color: white;
  margin: 15px;
  padding: 15px;
  border-radius: 4px;
`,C=t.forwardRef((e,r)=>{const{context:o,...n}=i(),a=O([n.refs.setFloating,r]);return o.open?l(M,{children:l(B,{className:"gle-dialog-overlay",lockScroll:!0,children:l(S,{context:o,children:l(j,{ref:a,"aria-labelledby":n.labelId,"aria-describedby":n.descriptionId,className:"gle-dialog-container",...n.getFloatingProps(e),children:e.children})})})}):null});try{C.displayName="DialogContent",C.__docgenInfo={description:"",displayName:"DialogContent",props:{}}}catch{}const h=t.forwardRef(({children:e,asChild:r=!1,...o},n)=>{const a=i(),s=e.ref,d=O([a.refs.setReference,n,s]);return r&&t.isValidElement(e)?t.cloneElement(e,a.getReferenceProps({ref:d,...o,...e.props,"data-state":a.open?"open":"closed"})):l(I,{ref:d,"data-state":a.open?"open":"closed",...a.getReferenceProps(o),children:e})});try{h.displayName="DialogTrigger",h.__docgenInfo={description:"",displayName:"DialogTrigger",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{y as D,h as a,C as b,v as c,b as d,D as e};
//# sourceMappingURL=DialogTrigger-1fde8d74.js.map