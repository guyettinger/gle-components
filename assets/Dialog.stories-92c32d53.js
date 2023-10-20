import{j as n,a as o}from"./styled-components.browser.esm-b4b4bd00.js";import{r as p}from"./index-c013ead5.js";import{D as t,a as c,b as D,c as d,d as m,e as C}from"./DialogTrigger-aae52ca4.js";import"./_commonjsHelpers-725317a4.js";import"./Button-d7f674c1.js";import"./floating-ui.react-2c0a59ad.js";import"./index-169ee69c.js";const j={component:t,title:"gle-components/Floating/Dialog",argTypes:{}},e=h=>{const[g,a]=p.useState(!1);return n(t,{open:g,onOpenChange:a,children:[o(c,{onClick:()=>a(l=>!l),children:"My trigger"}),n(D,{children:[o(d,{children:"My dialog heading"}),o(m,{children:"My dialog description"}),o(C,{children:"Close"})]})]})};e.args={};var i,r,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(props: DialogProps) => {
  const [open, setOpen] = useState(false);
  return <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger onClick={() => setOpen(v => !v)}>
                My trigger
            </DialogTrigger>
            <DialogContent>
                <DialogHeading>My dialog heading</DialogHeading>
                <DialogDescription>My dialog description</DialogDescription>
                <DialogClose>Close</DialogClose>
            </DialogContent>
        </Dialog>;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,j as default};
//# sourceMappingURL=Dialog.stories-92c32d53.js.map
