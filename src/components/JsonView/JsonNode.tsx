import { useState } from "react";
import styled from "styled-components";
import { MdRemoveCircleOutline } from "react-icons/md";
import { JsonNodeViewProps } from "./JsonView.types";
import { useJsonViewApiContext } from "./JsonViewContext";
import JsonNodeTitle from "./JsonNodeTitle";
import JsonNodeValue from "./JsonNodeValue"

const JsonNodeContent = styled.li`
`

const JsonNodeTitleContainer = styled.span`
  padding-right: 4px;
`

const JsonNodeValueContainer = styled.span`
`

const JsonNodeActionContainer = styled.span`
  position: absolute;
  vertical-align: middle;
  padding-left: 4px;
`

const RemoveIcon = styled(MdRemoveCircleOutline)`
`

const JsonNode = ({title, path, value}: JsonNodeViewProps) => {
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
    const api = useJsonViewApiContext()

    const handleMouseEnter = () => {
        setIsMouseOver(true)
    }

    const handleMouseLeave = () => {
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
                {isMouseOver &&
                    <JsonNodeActionContainer>
                        <RemoveIcon onClick={handleRemoveClick}/>
                    </JsonNodeActionContainer>
                }
            </JsonNodeValueContainer>
        </JsonNodeContent>
    )
}
export default JsonNode;