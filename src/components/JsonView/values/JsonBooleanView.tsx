import { JsonBooleanViewProps } from "../JsonView.types";
import BooleanRepresentation from "../../Representation/BooleanRepresentation/BooleanRepresentation";

const JsonBooleanView = ({value}: JsonBooleanViewProps) => {
    const handleSubmit = (newValue:boolean) =>{

    }
    return (<BooleanRepresentation value={value} onSubmit={handleSubmit}/>)
}

export default JsonBooleanView;