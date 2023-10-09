import styled from "styled-components";
import { JsonObjectViewProps, JsonValue } from "../JsonView.types";
import JsonNode from "../JsonNode";

const JsonObjectContainer = styled.span`
`

const JsonObjectHeader = styled.span`
`

const JsonObjectFooter = styled.span`
`

const JsonObjectNodeProperties = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  padding-right: 0;
`

const JsonObjectNode = ({value, path}: JsonObjectViewProps) => {
    return (
        <JsonObjectContainer className="gle-object-container">
            <JsonObjectHeader className="gle-object-header">
                {'{'}
            </JsonObjectHeader>
            <JsonObjectNodeProperties className="gle-object-properties">
                {
                    Object.entries(value).map(([k, v]: [string, JsonValue]) => {
                        return <JsonNode key={k}
                                         title={k}
                                         path={path ? `${path}.${k}` : `${k}`}
                                         value={v}/>
                    })
                }
            </JsonObjectNodeProperties>
            <JsonObjectFooter className="gle-object-footer">
                {'}'}
            </JsonObjectFooter>
        </JsonObjectContainer>
    )
}

export default JsonObjectNode;