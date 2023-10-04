import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import styled from "styled-components";
import { JsonObjectViewProps, JsonValue } from "../JsonView.types";
import JsonNode from "../JsonNode";
import { useJsonViewApiContext } from "../JsonViewContext";

const JsonObjectContainer = styled.span`
`

const JsonObjectHeader = styled.li`
`

const JsonObjectFooter = styled.span`
`

const JsonObjectNodeProperties = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  padding-right: 0;
`

const JsonObjectNodeActionContainer = styled.span`
  position: absolute;
  vertical-align: middle;
  padding-left: 4px;
  `

const AddIcon = styled(MdAddCircleOutline)`
`

const JsonObjectNode = ({value, path}: JsonObjectViewProps) => {
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
    const api = useJsonViewApiContext()

    const handleMouseEnter = () => {
        setIsMouseOver(true)
    }

    const handleMouseLeave = () => {
        setIsMouseOver(false)
    }

    const handleAddClick = () => {

    }

    return (
        <JsonObjectContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <JsonObjectHeader>
                {'{'}
                {isMouseOver &&
                    <JsonObjectNodeActionContainer>
                            <AddIcon onClick={handleAddClick}/>
                    </JsonObjectNodeActionContainer>
                }
            </JsonObjectHeader>
            <JsonObjectNodeProperties>
                {
                    Object.entries(value).map(([k, v]: [string, JsonValue]) => {
                        return <JsonNode key={k}
                                         title={k}
                                         path={path ? `${path}.${k}` : `${k}`}
                                         value={v}/>
                    })
                }
            </JsonObjectNodeProperties>
            <JsonObjectFooter>
                {'}'}
            </JsonObjectFooter>
        </JsonObjectContainer>

    )
}

export default JsonObjectNode;