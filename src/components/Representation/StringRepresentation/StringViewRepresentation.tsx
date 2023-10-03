import { ViewRepresentationProps } from "../Representation.types";

const StringViewRepresentation = ({value}: ViewRepresentationProps<string>) => {
    return (
        <span>{value}</span>
    )
}

export default StringViewRepresentation