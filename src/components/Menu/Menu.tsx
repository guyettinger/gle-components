import { forwardRef } from "react";
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react";
import { MenuProps } from "./Menu.types";
import { MenuTree } from "./MenuTree";
import { ButtonProps } from "../Button";

export const Menu = forwardRef<
    HTMLButtonElement,
    MenuProps & ButtonProps
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
