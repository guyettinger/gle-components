import styled from "styled-components";
import { JsonUnknownViewProps } from "../JsonView.types";

const UnknownValue = styled.span`
`

export const JsonUnknownNode = ({path}: JsonUnknownViewProps) => {
    return (<UnknownValue className="gle-unknown-value">Unknown</UnknownValue>)
}