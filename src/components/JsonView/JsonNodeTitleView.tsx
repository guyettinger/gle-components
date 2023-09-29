import { JsonNodeTitleViewProps } from "./JsonView.types";
import styled from "styled-components";
const StyledSpan = styled.span`
  font-weight: bold;
`
const JsonStringView = ({title}: JsonNodeTitleViewProps) => {
    return (<StyledSpan>{title.toString()}: </StyledSpan>)
}

export default JsonStringView;