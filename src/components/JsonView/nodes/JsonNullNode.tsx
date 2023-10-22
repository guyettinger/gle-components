import styled from "styled-components";
import { JsonNullViewProps } from "../JsonView.types";

const NullValue = styled.span`
`

export const JsonNullNode = ({path}: JsonNullViewProps) => {
    return (<NullValue className="gle-null-value">null</NullValue>)
}