import { useState } from "react";
import styled from "styled-components";
import { JsonNodeViewProps } from "./JsonView.types";
import { useJsonViewApiContext } from "./JsonViewContext";
import JsonNodeTitle from "./JsonNodeTitle";
import JsonNodeValue from "./JsonNodeValue"
import Button from "../Button/Button";

const JsonNodeContent = styled.li`
  display: flex;
`

const JsonNodeTitleContainer = styled.div`
  flex-basis: fit-content;
  padding-right: 4px;
`

const JsonNodeValueContainer = styled.div`
  flex-basis: fit-content;
`

const JsonNodeActionContainer = styled.div`
`

const JsonNode = ({title, path, value}: JsonNodeViewProps) => {
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
    const api = useJsonViewApiContext()

    const handleMouseEnter = (e: any) => {
        setIsMouseOver(true)
    }

    const handleMouseLeave = (e: any) => {
        setIsMouseOver(false)
    }

    const handleRemoveClick = (e: any) => {
        e.stopPropagation()
        api.remove(path)
    }

    return (
        <JsonNodeContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {title &&
                <JsonNodeTitleContainer>
                    <JsonNodeTitle title={title} path={path}/>
                </JsonNodeTitleContainer>
            }
            <JsonNodeValueContainer>
                <JsonNodeValue value={value} path={path}/>
            </JsonNodeValueContainer>
            {isMouseOver &&
                <JsonNodeActionContainer>
                    <Button size="small" text="Remove" onClick={handleRemoveClick}/>
                </JsonNodeActionContainer>
            }
        </JsonNodeContent>
    )
}
export default JsonNode;