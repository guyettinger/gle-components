import { JsonObjectViewProps, JsonValue } from "../JsonView.types";
import JsonNode from "../JsonNode";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const JsonObjectNode = ({value, path}: JsonObjectViewProps) => {
    return (
        <span>
            <StyledUl>
                {
                    Object.entries(value).map(([k, v]: [string, JsonValue]) => {
                        return <JsonNode key={k}
                                         title={k}
                                         path={path ? `${path}.${k}` : `${k}`}
                                         value={v}/>
                    })
                }
            </StyledUl>
        </span>

    )
}

export default JsonObjectNode;