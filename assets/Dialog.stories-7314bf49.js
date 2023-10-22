import{j as n,a as o}from"./styled-components.browser.esm-1cd6bce5.js";import{r as p}from"./index-76fb7be0.js";import{D as t,a as c,b as D,c as d,d as m,e as C}from"./DialogTrigger-1fde8d74.js";import"./_commonjsHelpers-de833af9.js";import"./Button-afacee23.js";import"./floating-ui.react-6c855d10.js";import"./index-d3ea75b5.js";const j={component:t,title:"gle-components/Floating/Dialog",argTypes:{}},e=h=>{const[g,a]=p.useState(!1);return n(t,{open:g,onOpenChange:a,children:[o(c,{onClick:()=>a(l=>!l),children:"My trigger"}),n(D,{children:[o(d,{children:"My dialog heading"}),o(m,{children:"My dialog description"}),o(C,{children:"Close"})]})]})};e.args={};var i,r,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(props: DialogProps) => {
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
//# sourceMappingURL=Dialog.stories-7314bf49.js.map
