import { JsonStringViewProps } from "../JsonView.types";
import { StringRepresentation } from "../../Representation";
import { useJsonViewApiContext } from "../JsonViewContext";

export const JsonStringNode = ({value, path}: JsonStringViewProps) => {
    const api = useJsonViewApiContext()
    const handleSubmit = (newValue: string) => {
        api.update(path, newValue)
    }

    return (<StringRepresentation value={value} onSubmit={handleSubmit}/>)
}