import styled from "styled-components";
import { ViewRepresentationProps } from "../Representation.types";

const StringValue = styled.span`
`


const StringViewRepresentation = ({value}: ViewRepresentationProps<string>) => {
    return (
        <StringValue className="gle-string-value">{value}</StringValue>
    )
}

export default StringViewRepresentation