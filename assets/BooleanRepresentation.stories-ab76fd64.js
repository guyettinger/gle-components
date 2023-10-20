import{a as m}from"./styled-components.browser.esm-b4b4bd00.js";import{B as u}from"./BooleanRepresentation-d44779fb.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./Representation-8a8951ca.js";import"./Input-c319c7eb.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,R={component:u,title:"gle-components/Representations/BooleanRepresentation",argTypes:{}},n=e=>{const[{value:i},l]=p();return m(u,{"data-testid":"BooleanRepresentation-id",...e,value:i,onSubmit:o=>{var t;(t=e.onSubmit)==null||t.call(e,o),l({value:o})}})};n.args={value:!0,onSubmit:e=>{console.log("onValueChanged",e)}};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
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
//# sourceMappingURL=BooleanRepresentation.stories-ab76fd64.js.map
