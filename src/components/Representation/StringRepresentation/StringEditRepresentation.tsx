import { EditRepresentationProps } from "../Representation.types";
import { ChangeEvent, Ref, useEffect, useRef, useState } from "react";
import Input from "../../Input/Input";

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
        <div>
            <Input ref={inputRef as Ref<HTMLInputElement>}
                   type="text"
                   value={inputValue}
                   onKeyDown={handleKeyDown}
                   onChange={handleInputChange}/>
        </div>
    )
}

export default StringEditRepresentation