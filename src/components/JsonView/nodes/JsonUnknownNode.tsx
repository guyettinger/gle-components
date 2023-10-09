import styled from "styled-components";
import { JsonUnknownViewProps } from "../JsonView.types";

const UnknownValue = styled.span`
`

const JsonUnknownNode = ({path}: JsonUnknownViewProps) => {
    return (<UnknownValue className="gle-unknown-value">Unknown</UnknownValue>)
}

export default JsonUnknownNode;