import { JsonBooleanViewProps } from "../JsonView.types";
import { BooleanRepresentation } from "../../Representation";
import { useJsonViewApiContext } from "../JsonViewContext";

export const JsonBooleanNode = ({value, path}: JsonBooleanViewProps) => {
    const api = useJsonViewApiContext()
    const handleSubmit = (newValue: boolean) => {
        api.update(path, newValue)
    }

    return (<BooleanRepresentation value={value} onSubmit={handleSubmit}/>)
}