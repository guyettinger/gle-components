import{a as m}from"./styled-components.browser.esm-1cd6bce5.js";import{B as u}from"./BooleanRepresentation-94d63f58.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Representation-f0675ec3.js";import"./Input-8603c6e4.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,R={component:u,title:"gle-components/Representations/BooleanRepresentation",argTypes:{}},n=e=>{const[{value:i},l]=p();return m(u,{"data-testid":"BooleanRepresentation-id",...e,value:i,onSubmit:o=>{var t;(t=e.onSubmit)==null||t.call(e,o),l({value:o})}})};n.args={value:!0,onSubmit:e=>{console.log("onValueChanged",e)}};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleSubmit = (newValue: boolean) => {
    args.onSubmit?.(newValue);
    updateArgs({
      value: newValue
    });
  };
  return <BooleanRepresentation data-testid="BooleanRepresentation-id" {...args} value={value} onSubmit={handleSubmit} />;
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const v=["Boolean"];export{n as Boolean,v as __namedExportsOrder,R as default};
//# sourceMappingURL=BooleanRepresentation.stories-864ee240.js.map
