import { JsonBooleanViewProps } from "../JsonView.types";
import BooleanRepresentation from "../../Representation/BooleanRepresentation/BooleanRepresentation";
import { useJsonViewApiContext } from "../JsonViewContext";

const JsonBooleanNode = ({value, path}: JsonBooleanViewProps) => {
    const api = useJsonViewApiContext()
    const handleSubmit = (newValue: boolean) => {
        api.update(path, newValue)
    }

    return (<BooleanRepresentation value={value} onSubmit={handleSubmit}/>)
}

export default JsonBooleanNode;