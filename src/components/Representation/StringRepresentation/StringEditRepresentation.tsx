import { ChangeEvent, Ref, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Input } from "../../Input";
import { EditRepresentationProps } from "../Representation.types";

const InputContainer = styled.span`
  display: inline-flex;
`

export const StringEditRepresentation = ({value, onSubmit, onCancel}: EditRepresentationProps<string>) => {
    const [inputValue, setInputValue] = useState<string>(value)
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
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
        <InputContainer className="gle-string-input-container">
            <Input ref={inputRef as Ref<HTMLInputElement>}
                   type="text"
                   className="gle-string-input"
                   variant="small"
                   value={inputValue}
                   onKeyDown={handleKeyDown}
                   onChange={handleInputChange}/>
        </InputContainer>
    )
}