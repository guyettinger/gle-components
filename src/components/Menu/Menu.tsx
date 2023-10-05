import { forwardRef, HTMLProps } from "react";
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react";
import { MenuProps } from "./Menu.types";
import { MenuTree } from "./MenuTree";

export const Menu = forwardRef<
    HTMLButtonElement,
    MenuProps & HTMLProps<HTMLButtonElement>
>((props, ref) => {
    const parentId = useFloatingParentNodeId();

    if (parentId === null) {
        return (
            <FloatingTree>
                <MenuTree {...props} ref={ref}/>
            </FloatingTree>
        );
    }

    return <MenuTree {...props} ref={ref}/>;
});
