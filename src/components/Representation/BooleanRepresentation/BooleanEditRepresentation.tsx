import { ChangeEvent, Ref, useEffect, useRef, useState } from "react";
import Input from "../../Input/Input";
import styled from "styled-components";
import { EditRepresentationProps } from "../Representation.types";

const InputContainer = styled.span`
  display: inline-flex;
`

const RadioLabel = styled.label`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const BooleanEditRepresentation = ({value, onSubmit, onCancel}: EditRepresentationProps<boolean>) => {
    const [inputValue, setInputValue] = useState<boolean>(value)
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const booleanValue = e.target.value === 'true'
        setInputValue(booleanValue)
        onSubmit(booleanValue)
    }

    const handleKeyDown = (e: any) => {
        const {key} = e;
        const submitKeys = [ "Enter"]
        if (submitKeys.indexOf(key) > -1) {
            onSubmit(inputValue)
        }

        const cancelKeys = ["Escape", "Tab"]
        if (cancelKeys.indexOf(key) > -1) {
            onCancel()
        }
    }

    const handleClick = (e: any) => {
        e.stopPropagation();
    }

    return (
        <InputContainer className="gle-input-container gle-boolean-input-conatiner" onClick={handleClick}>
            <RadioLabel className="gle-boolean-label radio">
                true
                <Input name="boolean"
                       type="radio"
                       className="gle-boolean-input"
                       variant="small"
                       value="true"
                       checked={inputValue}
                       onKeyDown={handleKeyDown}
                       onChange={handleInputChange}/>
            </RadioLabel>
            <RadioLabel className="gle-boolean-label radio">
                false
                <Input name="boolean"
                       type="radio"
                       className="gle-boolean-input"
                       variant="small"
                       value="false"
                       checked={!inputValue}
                       onKeyDown={handleKeyDown}
                       onChange={handleInputChange}/>
            </RadioLabel>
        </InputContainer>
    )
}

export default BooleanEditRepresentation