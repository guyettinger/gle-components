import { ChangeEvent, Ref, useEffect, useRef, useState } from "react";
import Input from "../../Input/Input";
import styled from "styled-components";
import { EditRepresentationProps } from "../Representation.types";

const InputContainer = styled.span`
  display: inline-flex;
`

const BooleanEditRepresentation = ({value, onSubmit, onCancel}: EditRepresentationProps<boolean>) => {
    const [inputValue, setInputValue] = useState<boolean>(value)
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const booleanValue = e.target.value.toLowerCase() === 'true'
        setInputValue(booleanValue)
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
                   name="boolean"
                   type="radio"
                   value="true"
                   onKeyDown={handleKeyDown}
                   onChange={handleInputChange}/>
            <Input ref={inputRef as Ref<HTMLInputElement>}
                   name="boolean"
                   type="radio"
                   value="false"
                   onKeyDown={handleKeyDown}
                   onChange={handleInputChange}/>
        </InputContainer>
    )
}

export default BooleanEditRepresentation