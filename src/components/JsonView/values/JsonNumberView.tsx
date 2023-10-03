import { JsonNumberViewProps } from "../JsonView.types";
import NumberRepresentation from "../../Representation/NumberRepresentation/NumberRepresentation";

const JsonNumberView = ({value}: JsonNumberViewProps) => {
    const handleSubmit = (newValue:number) =>{

    }
    return (<NumberRepresentation value={value} onSubmit={handleSubmit}/>)
}

export default JsonNumberView;