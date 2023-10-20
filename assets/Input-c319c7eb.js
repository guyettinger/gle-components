import{s as o,a as p}from"./styled-components.browser.esm-b4b4bd00.js";import{r as c}from"./index-c013ead5.js";const m=o.input`
  height: ${e=>e.$variant==="small"?"11px":e.$variant==="medium"?"24px":"40px"};;
  width: 300px;
  border: solid 2px ${e=>e.disabled?"#e4e3ea":e.$error?"#a9150b":e.$success?"#067d68":"#353637"};
  background-color: #fff;

  &:focus {
    border: solid 2px #1b116e;
  }
`,a=c.forwardRef(({id:e,variant:r,disabled:l,error:n,success:t,placeholder:d,onChange:s,...u},i)=>p(m,{id:e,ref:i,type:"text",$variant:r,disabled:l,$error:n,$success:t,placeholder:d,onChange:s,...u}));try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}export{a as I};
//# sourceMappingURL=Input-c319c7eb.js.map
