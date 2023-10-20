import{a as p}from"./styled-components.browser.esm-b4b4bd00.js";import{N as u}from"./NumberRepresentation-cbef32fe.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./Representation-8a8951ca.js";import"./Input-c319c7eb.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,R={component:u,title:"gle-components/Representations/NumberRepresentation",argTypes:{}},t=e=>{const[{value:m},i]=d();return p(u,{"data-testid":"NumberRepresentation-id",...e,value:m,onSubmit:n=>{var r;(r=e.onSubmit)==null||r.call(e,n),i({value:n})}})};t.args={value:3.14,onSubmit:e=>{console.log("onValueChanged",e)}};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleSubmit = (newValue: number) => {
    args.onSubmit?.(newValue);
    updateArgs({
      value: newValue
    });
  };
  return <NumberRepresentation data-testid="NumberRepresentation-id" {...args} value={value} onSubmit={handleSubmit} />;
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const v=["Number"];export{t as Number,v as __namedExportsOrder,R as default};
//# sourceMappingURL=NumberRepresentation.stories-fe9d4e70.js.map
