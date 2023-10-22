import styled from "styled-components";
import { JsonNodeTitleViewProps } from "./JsonView.types";

const StyledSpan = styled.span`
`
export const JsonNodeTitle = ({title}: JsonNodeTitleViewProps) => {
    return (<StyledSpan className="gle-node-title">{title.toString()}: </StyledSpan>)
}