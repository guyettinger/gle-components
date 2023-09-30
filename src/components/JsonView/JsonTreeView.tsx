import styled from "styled-components";
import { JsonTreeViewProps, JsonValue } from "./JsonView.types";
import { useJsonViewContext } from "./JsonViewContext";
import JsonNodeView from "./JsonNodeView";

const StyledUl = styled.ul`
  list-style-type: none;
`

const JsonTreeView = ({title}: JsonTreeViewProps) => {
    const path: string = ""
    const json: JsonValue = useJsonViewContext()
    return (
        <StyledUl>
            <JsonNodeView title={title} path={path} value={json}/>
        </StyledUl>
    )
}
export default JsonTreeView;