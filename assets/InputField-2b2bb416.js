import{s as l,j as g,a}from"./styled-components.browser.esm-b4b4bd00.js";import{r as i}from"./index-c013ead5.js";import{I as x}from"./Input-c319c7eb.js";const v=l(x)`
`,$=l.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#e4e3ea":"#080808"};
  padding-bottom: ${e=>e.$variant==="small"?"0px":e.$variant==="medium"?"4px":"6px"};;
`,b=l.div`
  font-size: 14px;
  color: #a9150b;
  padding-top: ${e=>e.$variant==="small"?"0px":e.$variant==="medium"?"2px":"4px"};
`,d=l.p`
  margin: 0;
  color: ${e=>e.disabled?"#e4e3ea":e.$error?"#a9150b":"#080808"};
`,s=i.forwardRef(({id:e,disabled:t,label:u,message:o,error:n,success:p,onChange:m,placeholder:c,variant:r,...f},y)=>g(i.Fragment,{children:[a($,{$variant:r,children:a(d,{disabled:t,$error:n,children:u})}),a(v,{id:e,ref:y,type:"text",onChange:m,disabled:t,error:n,success:p,placeholder:c,variant:r,...f}),a(b,{$variant:r,children:a(d,{$error:n,children:o})})]}));try{s.displayName="InputField",s.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}export{s as I};
//# sourceMappingURL=InputField-2b2bb416.js.map
