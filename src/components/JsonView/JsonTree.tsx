import styled from "styled-components";
import { JsonTreeViewProps, JsonValue } from "./JsonView.types";
import { useJsonViewContext } from "./JsonViewContext";
import JsonNode from "./JsonNode";

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const JsonTree = ({title}: JsonTreeViewProps) => {
    const path: string = ""
    const json: JsonValue = useJsonViewContext()
    return (
        <StyledUl>
            <JsonNode title={title} path={path} value={json}/>
        </StyledUl>
    )
}
export default JsonTree;