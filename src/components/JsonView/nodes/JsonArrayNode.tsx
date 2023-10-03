import { JsonArrayViewProps, JsonValue } from "../JsonView.types";
import JsonNode from "../JsonNode";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  padding-right:0;
`
const JsonArrayNode = ({value, path}: JsonArrayViewProps) => {
    return (
        <span>
            {'['}
            <StyledUl>
                {
                    value.map((arrayValue: JsonValue, arrayIndex: number) => {
                        return <JsonNode key={arrayIndex}
                                         title={`${arrayIndex}`}
                                         path={path ? `${path}[${arrayIndex}]` : `[${arrayIndex}]`}
                                         value={arrayValue}/>
                    })
                }
            </StyledUl>
            {']'}
        </span>
    )
}

export default JsonArrayNode;