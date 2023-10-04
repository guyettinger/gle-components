import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import styled from "styled-components";
import { JsonArrayViewProps, JsonValue } from "../JsonView.types";
import JsonNode from "../JsonNode";
import { useJsonViewApiContext } from "../JsonViewContext";

const JsonArrayContainer = styled.span`
`
const JsonArrayHeader = styled.span`
`

const JsonArrayFooter = styled.span`
`

const JsonArrayNodeElements = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  padding-right: 0;
`

const JsonArrayNodeActionContainer = styled.span`
  position: absolute;
  vertical-align: middle;
  padding-left: 4px;
`

const AddIcon = styled(MdAddCircleOutline)`
`

const JsonArrayNode = ({value, path}: JsonArrayViewProps) => {
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
        <JsonArrayContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <JsonArrayHeader>
                {'['}
                {isMouseOver &&
                    <JsonArrayNodeActionContainer>
                        <AddIcon onClick={handleAddClick}/>
                    </JsonArrayNodeActionContainer>
                }
            </JsonArrayHeader>
            <JsonArrayNodeElements>
                {
                    value.map((arrayValue: JsonValue, arrayIndex: number) => {
                        return <JsonNode key={`${arrayIndex}:${JSON.stringify(arrayValue)}`}
                                         title={`${arrayIndex}`}
                                         path={path ? `${path}[${arrayIndex}]` : `[${arrayIndex}]`}
                                         value={arrayValue}/>
                    })
                }
            </JsonArrayNodeElements>
            <JsonArrayFooter>
                {']'}
            </JsonArrayFooter>
        </JsonArrayContainer>
    )
}

export default JsonArrayNode;