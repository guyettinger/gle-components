import { ChangeEvent, Ref, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EditRepresentationProps } from "../Representation.types";
import { Input } from "../../Input";

const InputContainer = styled.span`
  display: inline-flex;
`
export const NumberEditRepresentation = ({value, onSubmit, onCancel}: EditRepresentationProps<number>) => {
    const [inputValue, setInputValue] = useState<number>(value)
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const numberValue = Number.parseFloat(e.target.value)
        setInputValue(numberValue)
    }

    const handleKeyDown = (e: any) => {
        const {key} = e;
        const submitKeys = ["Enter"]
        if (submitKeys.indexOf(key) > -1) {
            onSubmit(inputValue)
        }

        const cancelKeys = ["Escape", "Tab"]
        if (cancelKeys.indexOf(key) > -1) {
            onCancel()
        }
    }

    return (
        <InputContainer className="gle-number-input-container">
            <Input ref={inputRef as Ref<HTMLInputElement>}
                   type="number"
                   className="gle-number-input"
                   variant="small"
                   value={inputValue}
                   onKeyDown={handleKeyDown}
                   onChange={handleInputChange}/>
        </InputContainer>
    )
}