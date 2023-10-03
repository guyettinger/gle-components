import { JsonStringViewProps } from "../JsonView.types";
import StringRepresentation from "../../Representation/StringRepresentation/StringRepresentation";

const JsonStringView = ({value}: JsonStringViewProps) => {
    const handleSubmit = (newValue:string) =>{

    }
    return (<StringRepresentation value={value} onSubmit={handleSubmit}/>)
}

export default JsonStringView;