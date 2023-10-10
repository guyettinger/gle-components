import { TooltipProps } from "./Tooltip.types";
import { createContext, useContext, useMemo, useState } from "react";
import {
    autoUpdate,
    flip,
    offset,
    shift,
    useDismiss,
    useFloating,
    useFocus,
    useHover, useInteractions,
    useRole
} from "@floating-ui/react";

export const useTooltip = ({
                               initialOpen = false,
                               placement = "top",
                               open: controlledOpen,
                               onOpenChange: setControlledOpen
                           }: TooltipProps = {}) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)

    const open = controlledOpen ?? uncontrolledOpen
    const setOpen = setControlledOpen ?? setUncontrolledOpen

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "start",
                padding: 5
            }),
            shift({padding: 5})
        ]
    })

    const context = data.context

    const hover = useHover(context, {
        move: false,
        enabled: controlledOpen == null
    })
    const focus = useFocus(context, {
        enabled: controlledOpen == null
    })
    const dismiss = useDismiss(context)
    const role = useRole(context, {role: "tooltip"})

    const interactions = useInteractions([hover, focus, dismiss, role])

    return useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data
        }),
        [open, setOpen, interactions, data]
    )
}

type ContextType = ReturnType<typeof useTooltip> | null

export const TooltipContext = createContext<ContextType>(null)

export const useTooltipContext = () => {
    const context = useContext(TooltipContext)

    if (context == null) {
        throw new Error("Tooltip components must be wrapped in <Tooltip />");
    }

    return context
}