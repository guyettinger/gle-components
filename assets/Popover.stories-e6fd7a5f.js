import{j as p,a as o}from"./styled-components.browser.esm-1cd6bce5.js";import{r as v}from"./index-76fb7be0.js";import{P as a,a as g,b as l,c as P,d,e as m}from"./PopoverTrigger-1bf86739.js";import"./_commonjsHelpers-de833af9.js";import"./Button-afacee23.js";import"./floating-ui.react-6c855d10.js";import"./index-d3ea75b5.js";const D={component:a,title:"gle-components/Floating/Popover",argTypes:{}},e=C=>{const[i,r]=v.useState(!1);return p(a,{open:i,onOpenChange:r,children:[o(g,{onClick:()=>r(c=>!c),children:"My trigger"}),p(l,{children:[o(P,{children:"My popover heading"}),o(d,{children:"My popover description"}),o(m,{children:"Close"})]})]})};e.args={};var n,s,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(props: PopoverProps) => {
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
//# sourceMappingURL=Popover.stories-e6fd7a5f.js.map
