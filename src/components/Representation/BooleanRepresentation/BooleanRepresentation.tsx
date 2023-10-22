import { Representation } from "../Representation";
import { BooleanViewRepresentation } from "./BooleanViewRepresentation";
import { BooleanEditRepresentation } from "./BooleanEditRepresentation";
import { BooleanRepresentationProps } from "./BooleanRepresentation.types";

export const BooleanRepresentation = ({value, onSubmit}: BooleanRepresentationProps) => {
    return (
        <Representation value={value}
                        onSubmit={onSubmit}
                        ViewRepresentation={BooleanViewRepresentation}
                        EditRepresentation={BooleanEditRepresentation}
        />
    )
}