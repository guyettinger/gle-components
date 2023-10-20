import{n as c,s as t,j as a,a as n}from"./styled-components.browser.esm-b4b4bd00.js";import{M as o,a as e,b as u,c as l,d as M,e as I,f as h,g}from"./MenuItem-efcdd831.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./floating-ui.react-2c0a59ad.js";import"./index-169ee69c.js";import"./Button-d7f674c1.js";const V={component:o,title:"gle-components/Floating/Menu",argTypes:{}},s=c`
  vertical-align: text-top;
  padding-right: 8px;
  color: inherit;
`,C=t(u)`
  ${s}
`,b=t(l)`
  ${s}
`,f=t(M)`
  ${s}
`,U=t(I)`
  ${s}
`,x=t(h)`
  ${s}
`,y=t(g)`
  ${s}
`,p=i=>a(o,{"data-testid":"Menu-id",...i,buttonContent:a("span",{children:[n(C,{}),"MENU"]}),children:[n(e,{name:"Undo",onClick:()=>console.log("Undo"),children:a("span",{children:[n(b,{}),"Undo"]})}),n(e,{name:"Redo",disabled:!0,children:a("span",{children:[n(f,{}),"Redo"]})}),n(e,{name:"Cut",children:a("span",{children:[n(U,{}),"Cut"]})}),a(o,{name:"Copy as",buttonContent:a("span",{children:[n(x,{}),"Copy As"]}),children:[n(e,{name:"Text",children:n("span",{children:"Text"})}),n(e,{name:"Video",children:n("span",{children:"Video"})}),a(o,{name:"Image",buttonContent:n("span",{children:"Image"}),children:[n(e,{name:".png",children:n("span",{children:".png"})}),n(e,{name:".jpg",children:n("span",{children:".jpg"})}),n(e,{name:".svg",children:n("span",{children:".svg"})}),n(e,{name:".gif",children:n("span",{children:".gif"})})]}),n(e,{name:"Audio",children:n("span",{children:"Audio"})})]}),a(o,{name:"Share",buttonContent:a("span",{children:[n(y,{}),"Share"]}),children:[n(e,{name:"Mail",children:n("span",{children:"Mail"})}),n(e,{name:"Instagram",children:n("span",{children:"Instagram"})})]})]});p.args={name:"Default"};var d,m,r;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`(args: MenuProps) => <Menu data-testid="Menu-id" {...args} buttonContent={<span><MenuIcon />MENU</span>}>
        <MenuItem name="Undo" onClick={() => console.log("Undo")}><span><UndoIcon />Undo</span></MenuItem>
        <MenuItem name="Redo" disabled><span><RedoIcon />Redo</span></MenuItem>
        <MenuItem name="Cut"><span><CutIcon />Cut</span></MenuItem>
        <Menu name="Copy as" buttonContent={<span><CopyIcon />Copy As</span>}>
            <MenuItem name="Text"><span>Text</span></MenuItem>
            <MenuItem name="Video"><span>Video</span></MenuItem>
            <Menu name="Image" buttonContent={<span>Image</span>}>
                <MenuItem name=".png"><span>.png</span></MenuItem>
                <MenuItem name=".jpg"><span>.jpg</span></MenuItem>
                <MenuItem name=".svg"><span>.svg</span></MenuItem>
                <MenuItem name=".gif"><span>.gif</span></MenuItem>
            </Menu>
            <MenuItem name="Audio"><span>Audio</span></MenuItem>
        </Menu>
        <Menu name="Share" buttonContent={<span><ShareIcon />Share</span>}>
            <MenuItem name="Mail"><span>Mail</span></MenuItem>
            <MenuItem name="Instagram"><span>Instagram</span></MenuItem>
        </Menu>
    </Menu>`,...(r=(m=p.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const D=["Default"];export{p as Default,D as __namedExportsOrder,V as default};
//# sourceMappingURL=Menu.stories-e94d0de1.js.map
