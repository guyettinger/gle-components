import{a as p}from"./styled-components.browser.esm-1cd6bce5.js";import{N as u}from"./NumberRepresentation-97929fac.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Representation-f0675ec3.js";import"./Input-8603c6e4.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,R={component:u,title:"gle-components/Representations/NumberRepresentation",argTypes:{}},t=e=>{const[{value:m},i]=d();return p(u,{"data-testid":"NumberRepresentation-id",...e,value:m,onSubmit:n=>{var r;(r=e.onSubmit)==null||r.call(e,n),i({value:n})}})};t.args={value:3.14,onSubmit:e=>{console.log("onValueChanged",e)}};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
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
//# sourceMappingURL=NumberRepresentation.stories-7307f4f4.js.map
