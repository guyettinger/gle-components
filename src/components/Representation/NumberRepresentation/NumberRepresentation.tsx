import Representation from "../Representation";
import NumberViewRepresentation from "./NumberViewRepresentation";
import NumberEditRepresentation from "./NumberEditRepresentation";
import { NumberRepresentationProps } from "./NumberRepresentation.types";

const NumberRepresentation = ({value, onSubmit}: NumberRepresentationProps) => {
    return (
        <Representation value={value}
                        onSubmit={onSubmit}
                        ViewRepresentation={NumberViewRepresentation}
                        EditRepresentation={NumberEditRepresentation}
        />
    )
}

export default NumberRepresentation