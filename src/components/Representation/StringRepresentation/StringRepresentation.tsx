import { Representation } from "../Representation";
import { StringViewRepresentation } from "./StringViewRepresentation";
import { StringEditRepresentation } from "./StringEditRepresentation";
import { StringRepresentationProps } from "./StringRepresentation.types";

export const StringRepresentation = ({value, onSubmit}: StringRepresentationProps) => {
    return (
        <Representation value={value}
                        onSubmit={onSubmit}
                        ViewRepresentation={StringViewRepresentation}
                        EditRepresentation={StringEditRepresentation}
        />
    )
}