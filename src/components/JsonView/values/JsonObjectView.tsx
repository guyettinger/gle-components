import { JsonObjectViewProps, JsonValue } from "../JsonView.types";
import JsonNodeView from "../JsonNodeView";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
`

const JsonObjectView = ({path, value}: JsonObjectViewProps) => {
    return (
        <span>
            {`{`}
            <StyledUl>
                {
                    Object.entries(value).map(([k, v]: [string, JsonValue]) => {
                        return <JsonNodeView key={k} title={k} path={[...path, k]} value={v}></JsonNodeView>
                    })
                }
            </StyledUl>
            {`}`}
        </span>

    )
}

export default JsonObjectView;