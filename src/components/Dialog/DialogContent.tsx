import { forwardRef, HTMLProps } from "react";
import { FloatingFocusManager, FloatingOverlay, FloatingPortal, useMergeRefs } from "@floating-ui/react";
import { useDialogContext } from "./DialogContext";
import styled from "styled-components";

const DialogOverlay = styled(FloatingOverlay)`
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
`

const DialogContainer = styled.div`
  background-color: white;
  margin: 15px;
  padding: 15px;
  border-radius: 4px;
`

export const DialogContent = forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>((props, propRef) => {
    const {context: floatingContext, ...context} = useDialogContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!floatingContext.open) return null

    return (
        <FloatingPortal>
            <DialogOverlay className="gle-dialog-overlay" lockScroll>
                <FloatingFocusManager context={floatingContext}>
                    <DialogContainer
                        ref={ref}
                        aria-labelledby={context.labelId}
                        aria-describedby={context.descriptionId}
                        className="gle-dialog-container"
                        {...context.getFloatingProps(props)}
                    >
                        {props.children}
                    </DialogContainer>
                </FloatingFocusManager>
            </DialogOverlay>
        </FloatingPortal>
    )
})