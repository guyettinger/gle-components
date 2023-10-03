import styled from "styled-components";
import { JsonNodeViewProps } from "./JsonView.types";
import JsonNodeTitleView from "./JsonNodeTitle";
import JsonNodeValue from "./JsonNodeValue"

const JsonNodeContent = styled.li`
    display: flex;
`

const JsonNodeTitleContainer = styled.div`
  flex-basis: fit-content;
  padding-right: 4px;
`

const JsonNodeValueContainer = styled.div`
    flex: 1;
`

const JsonNode = ({title, path, value}: JsonNodeViewProps) => {

    const handleClick = (e: any) => {
        e.stopPropagation()
    }

    return (
        <JsonNodeContent onClick={handleClick}>
            {title &&
                <JsonNodeTitleContainer>
                    <JsonNodeTitleView title={title} path={path}/>
                </JsonNodeTitleContainer>
            }
            <JsonNodeValueContainer>
                <JsonNodeValue value={value} path={path}/>
            </JsonNodeValueContainer>
        </JsonNodeContent>
    )
}
export default JsonNode;