import { ViewRepresentationProps } from "../Representation.types";

const BooleanViewRepresentation = ({value}: ViewRepresentationProps<boolean>) => {
    return (
        <span>{value.toString()}</span>
    )
}

export default BooleanViewRepresentation