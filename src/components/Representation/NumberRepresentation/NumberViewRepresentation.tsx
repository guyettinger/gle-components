import styled from "styled-components";
import { ViewRepresentationProps } from "../Representation.types";

const NumberValue = styled.span`
`


const NumberViewRepresentation = ({value}: ViewRepresentationProps<number>) => {
    return (
        <NumberValue className="gle-number-value">{value.toString()}</NumberValue>
    )
}

export default NumberViewRepresentation