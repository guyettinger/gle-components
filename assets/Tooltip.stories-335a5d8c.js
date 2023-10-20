import{j as T,a as e}from"./styled-components.browser.esm-b4b4bd00.js";import{r as y}from"./index-c013ead5.js";import{T as r,a as g,b as m}from"./TooltipTrigger-2f0360a4.js";import"./_commonjsHelpers-725317a4.js";import"./floating-ui.react-2c0a59ad.js";import"./index-169ee69c.js";import"./Button-d7f674c1.js";const j={component:r,title:"gle-components/Floating/Tooltip",argTypes:{}},o=d=>{const[u,p]=y.useState(!1);return T(r,{open:u,onOpenChange:p,children:[e(g,{onClick:()=>p(C=>!C),children:"My trigger"}),e(m,{className:"Tooltip",children:"My tooltip"})]})};o.args={};const t=d=>T(r,{children:[e(g,{children:"My trigger"}),e(m,{className:"Tooltip",children:"My tooltip"})]});t.args={};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(props: TooltipProps) => {
  const [open, setOpen] = useState(false);
  return <Tooltip open={open} onOpenChange={setOpen}>
            <TooltipTrigger onClick={() => setOpen(v => !v)}>
                My trigger
            </TooltipTrigger>
            <TooltipContent className="Tooltip">My tooltip</TooltipContent>
        </Tooltip>;
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,a,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(props: TooltipProps) => {
  return <Tooltip>
            <TooltipTrigger>My trigger</TooltipTrigger>
            <TooltipContent className="Tooltip">My tooltip</TooltipContent>
        </Tooltip>;
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const k=["ControlledTooltip","UncontrolledTooltip"];export{o as ControlledTooltip,t as UncontrolledTooltip,k as __namedExportsOrder,j as default};
//# sourceMappingURL=Tooltip.stories-335a5d8c.js.map
