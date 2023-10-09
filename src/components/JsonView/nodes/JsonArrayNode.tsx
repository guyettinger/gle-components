import styled from "styled-components";
import { JsonArrayViewProps, JsonValue } from "../JsonView.types";
import JsonNode from "../JsonNode";

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

const JsonArrayNode = ({value, path}: JsonArrayViewProps) => {
    return (
        <JsonArrayContainer className="gle-array-container">
            <JsonArrayHeader className="gle-array-header">
                {'['}
            </JsonArrayHeader>
            <JsonArrayNodeElements className="gle-array-elements">
                {
                    value.map((arrayValue: JsonValue, arrayIndex: number) => {
                        return <JsonNode key={`${arrayIndex}:${JSON.stringify(arrayValue)}`}
                                         title={`${arrayIndex}`}
                                         path={path ? `${path}[${arrayIndex}]` : `[${arrayIndex}]`}
                                         value={arrayValue}/>
                    })
                }
            </JsonArrayNodeElements>
            <JsonArrayFooter className="gle-array-footer">
                {']'}
            </JsonArrayFooter>
        </JsonArrayContainer>
    )
}

export default JsonArrayNode;