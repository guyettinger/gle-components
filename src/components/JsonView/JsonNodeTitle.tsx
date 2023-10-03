import { JsonNodeTitleViewProps } from "./JsonView.types";
import styled from "styled-components";
const StyledSpan = styled.span`
  color: #0855e3
`
const JsonStringView = ({title}: JsonNodeTitleViewProps) => {
    return (<StyledSpan>{title.toString()}: </StyledSpan>)
}

export default JsonStringView;