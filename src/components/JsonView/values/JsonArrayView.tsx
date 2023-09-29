import { JsonArrayViewProps, JsonValue } from "../JsonView.types";
import JsonNodeView from "../JsonNodeView";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
`
const JsonArrayView = ({path, value}: JsonArrayViewProps) => {
    return (
        <span>
            {`[`}
            <StyledUl>
                {
                    value.map((arrayValue: JsonValue, arrayIndex: number) => {
                        return <JsonNodeView key={arrayIndex}
                                             title={arrayIndex.toString()}
                                             path={[...path, arrayIndex.toString()]}
                                             value={arrayValue}/>
                    })
                }
            </StyledUl>
            {`]`}
        </span>
    )
}

export default JsonArrayView;