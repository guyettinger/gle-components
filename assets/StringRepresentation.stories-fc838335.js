import{a as p}from"./styled-components.browser.esm-1cd6bce5.js";import{S as i}from"./StringRepresentation-d744cd55.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Representation-f0675ec3.js";import"./Input-8603c6e4.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,v={component:i,title:"gle-components/Representations/StringRepresentation",argTypes:{}},e=t=>{const[{value:u},m]=d();return p(i,{"data-testid":"StringRepresentation-id",...t,value:u,onSubmit:n=>{var r;(r=t.onSubmit)==null||r.call(t,n),m({value:n})}})};e.args={value:"Editable String",onSubmit:t=>{console.log("onValueChanged",t)}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleSubmit = (newValue: string) => {
    args.onSubmit?.(newValue);
    updateArgs({
      value: newValue
    });
  };
  return <StringRepresentation data-testid="StringRepresentation-id" {...args} value={value} onSubmit={handleSubmit} />;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const A=["String"];export{e as String,A as __namedExportsOrder,v as default};
//# sourceMappingURL=StringRepresentation.stories-fc838335.js.map
