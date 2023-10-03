import { JsonNumberViewProps } from "../JsonView.types";
import NumberRepresentation from "../../Representation/NumberRepresentation/NumberRepresentation";
import { useJsonViewApiContext } from "../JsonViewContext";

const JsonNumberNode = ({value, path}: JsonNumberViewProps) => {
    const api = useJsonViewApiContext()
    const handleSubmit = (newValue: number) => {
        api.update(path, newValue)

    }

    return (<NumberRepresentation value={value} onSubmit={handleSubmit}/>)
}

export default JsonNumberNode;