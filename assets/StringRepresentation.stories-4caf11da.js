import{a as p}from"./styled-components.browser.esm-b4b4bd00.js";import{S as i}from"./StringRepresentation-a606e214.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./Representation-8a8951ca.js";import"./Input-c319c7eb.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,v={component:i,title:"gle-components/Representations/StringRepresentation",argTypes:{}},e=t=>{const[{value:u},m]=d();return p(i,{"data-testid":"StringRepresentation-id",...t,value:u,onSubmit:n=>{var r;(r=t.onSubmit)==null||r.call(t,n),m({value:n})}})};e.args={value:"Editable String",onSubmit:t=>{console.log("onValueChanged",t)}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
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
//# sourceMappingURL=StringRepresentation.stories-4caf11da.js.map
