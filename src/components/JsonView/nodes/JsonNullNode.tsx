import { JsonNullViewProps } from "../JsonView.types";
import styled from "styled-components";

const NullValue = styled.span`
`

const JsonNullNode = ({path}: JsonNullViewProps) => {
    return (<NullValue className="gle-null-value">null</NullValue>)
}

export default JsonNullNode;