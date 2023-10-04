import { ChangeEvent, Ref, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../Input/Input";
import { EditRepresentationProps } from "../Representation.types";

const InputContainer = styled.span`
  display: inline-flex;
`

const StringEditRepresentation = ({value, onSubmit, onCancel}: EditRepresentationProps<string>) => {
    const [inputValue, setInputValue] = useState<string>(value)
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e: any) => {
        const {key} = e;
        const keys = ["Escape", "Tab"]
        const enterKey = "Enter"
        const allKeys = [...keys, enterKey]
        if (allKeys.indexOf(key) > -1) {
            onSubmit(inputValue)
        }
    }

    return (
        <InputContainer>
            <Input ref={inputRef as Ref<HTMLInputElement>}
                   type="text"
                   value={inputValue}
                   onKeyDown={handleKeyDown}
                   onChange={handleInputChange}/>
        </InputContainer>
    )
}

export default StringEditRepresentation