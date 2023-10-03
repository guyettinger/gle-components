import { ViewRepresentationProps } from "../Representation.types";

const NumberViewRepresentation = ({value}: ViewRepresentationProps<number>) => {
    return (
        <span>{value.toString()}</span>
    )
}

export default NumberViewRepresentation