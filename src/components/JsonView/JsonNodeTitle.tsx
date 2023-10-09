import { JsonNodeTitleViewProps } from "./JsonView.types";
import styled from "styled-components";
const StyledSpan = styled.span`
`
const JsonNodeTitle = ({title}: JsonNodeTitleViewProps) => {
    return (<StyledSpan className="gle-node-title">{title.toString()}: </StyledSpan>)
}

export default JsonNodeTitle;