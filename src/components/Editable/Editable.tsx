import { ChangeEvent, Ref, useEffect, useRef, useState } from "react";
import { EditableProps, EditableTypes } from "./Editable.types";
import Input from "../Input/Input";

const Editable = ({value, placeholder, editableType, onValueChanged}: EditableProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(value)
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        if (inputRef && inputRef.current && isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing, inputRef]);

    const handleClick = () => {
        setIsEditing(true)
    }

    const handleBlur = () => {
        setIsEditing(false)
    }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e: any) => {
        const {key} = e;
        const keys = ["Escape", "Tab"]
        const enterKey = "Enter"
        const allKeys = [...keys, enterKey]
        if (allKeys.indexOf(key) > -1) {
            onValueChanged(inputValue)
            setIsEditing(false)
        }
    }

    return (
        <div>
            {!isEditing &&
                <div onClick={handleClick}>
                    <span>{value || placeholder || 'Click to edit'}</span>
                </div>
            }
            {isEditing &&
                <div onBlur={handleBlur} onKeyDown={handleKeyDown}>
                    {editableType === EditableTypes.input &&
                        <Input ref={inputRef as Ref<HTMLInputElement>}
                               placeholder={placeholder}
                               value={inputValue}
                               onChange={handleInputChange}/>
                    }
                </div>
            }
        </div>
    )
}

export default Editable