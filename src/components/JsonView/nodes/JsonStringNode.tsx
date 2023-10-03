import { JsonStringViewProps } from "../JsonView.types";
import StringRepresentation from "../../Representation/StringRepresentation/StringRepresentation";
import { useJsonViewApiContext } from "../JsonViewContext";

const JsonStringNode = ({value, path}: JsonStringViewProps) => {
    const api = useJsonViewApiContext()
    const handleSubmit = (newValue: string) => {
        api.update(path, newValue)
    }

    return (<StringRepresentation value={value} onSubmit={handleSubmit}/>)
}

export default JsonStringNode;