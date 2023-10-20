import{s as d,a as u}from"./styled-components.browser.esm-b4b4bd00.js";import{r as m}from"./index-c013ead5.js";const c=d.button`
  border: 0;
  line-height: 1;
  font-size: ${e=>e.$variant==="small"?"12px":e.$variant==="medium"?"14x":"15px"};
  cursor: pointer;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${e=>e.$variant==="small"?"5px 20px 5px":e.$variant==="medium"?"7px 25px 8px":"9px 30px 11px"};
  color: ${e=>e.$primary?e.theme.gle.color.buttonPrimaryForeground:e.theme.gle.color.buttonForeground};
  background: ${e=>e.$primary?e.theme.gle.color.buttonPrimaryBackground:e.theme.gle.color.buttonBackground};
  opacity: ${e=>e.disabled?.5:1};

  &:hover {
    background-color: ${e=>e.$primary?e.theme.gle.color.buttonPrimaryBackgroundHover:e.theme.gle.color.buttonBackgroundHover};
  }

  &:active {
    border: solid 2px ${e=>e.$primary?e.theme.gle.color.buttonPrimaryActiveBorderColor:e.theme.gle.color.buttonActiveBorderColor};
    padding: ${e=>e.$variant==="small"?"3px 18px 3px":e.$variant==="medium"?"5px 23px 6px":"7px 28px 9px"};
  }
`,r=m.forwardRef(({variant:e,primary:a,disabled:t,onClick:o,children:l,...n},i)=>u(c,{ref:i,type:"button",onClick:o,disabled:t,$primary:a,$variant:e,...n,children:l}));try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{r as B};
//# sourceMappingURL=Button-d7f674c1.js.map
