import styled from "styled-components";
import { ViewRepresentationProps } from "../Representation.types";

const BooleanValue = styled.span`
`

const BooleanViewRepresentation = ({value}: ViewRepresentationProps<boolean>) => {
    return (
        <BooleanValue className="gle-boolean-value">{value.toString()}</BooleanValue>
    )
}

export default BooleanViewRepresentation