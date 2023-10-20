import{j as p,a as o}from"./styled-components.browser.esm-b4b4bd00.js";import{r as v}from"./index-c013ead5.js";import{P as a,a as g,b as l,c as P,d,e as m}from"./PopoverTrigger-4bd2d477.js";import"./_commonjsHelpers-725317a4.js";import"./Button-d7f674c1.js";import"./floating-ui.react-2c0a59ad.js";import"./index-169ee69c.js";const D={component:a,title:"gle-components/Floating/Popover",argTypes:{}},e=C=>{const[i,r]=v.useState(!1);return p(a,{open:i,onOpenChange:r,children:[o(g,{onClick:()=>r(c=>!c),children:"My trigger"}),p(l,{children:[o(P,{children:"My popover heading"}),o(d,{children:"My popover description"}),o(m,{children:"Close"})]})]})};e.args={};var n,s,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(props: PopoverProps) => {
  const [open, setOpen] = useState(false);
  return <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger onClick={() => setOpen(v => !v)}>
                My trigger
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeading>My popover heading</PopoverHeading>
                <PopoverDescription>My popover description</PopoverDescription>
                <PopoverClose>Close</PopoverClose>
            </PopoverContent>
        </Popover>;
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,D as default};
//# sourceMappingURL=Popover.stories-154d6eba.js.map
