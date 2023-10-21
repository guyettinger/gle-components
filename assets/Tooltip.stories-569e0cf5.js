import{j as T,a as e}from"./styled-components.browser.esm-1cd6bce5.js";import{r as y}from"./index-76fb7be0.js";import{T as r,a as g,b as m}from"./TooltipTrigger-a31fb0bf.js";import"./_commonjsHelpers-de833af9.js";import"./floating-ui.react-6c855d10.js";import"./index-d3ea75b5.js";import"./Button-afacee23.js";const j={component:r,title:"gle-components/Floating/Tooltip",argTypes:{}},o=d=>{const[u,p]=y.useState(!1);return T(r,{open:u,onOpenChange:p,children:[e(g,{onClick:()=>p(C=>!C),children:"My trigger"}),e(m,{className:"Tooltip",children:"My tooltip"})]})};o.args={};const t=d=>T(r,{children:[e(g,{children:"My trigger"}),e(m,{className:"Tooltip",children:"My tooltip"})]});t.args={};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(props: TooltipProps) => {
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
//# sourceMappingURL=Tooltip.stories-569e0cf5.js.map
