import { ChangeEvent, Ref, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EditRepresentationProps } from "../Representation.types";
import Input from "../../Input/Input";

const InputContainer = styled.span`
  display: inline-flex;
`
const NumberEditRepresentation = ({value, onSubmit, onCancel}: EditRepresentationProps<number>) => {
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
                   type="number"
                   value={inputValue}
                   onKeyDown={handleKeyDown}
                   onChange={handleInputChange}/>
        </InputContainer>
    )
}

export default NumberEditRepresentation