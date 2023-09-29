import { JsonNumberViewProps } from "../JsonView.types";

const JsonNumberView = ({value}: JsonNumberViewProps) => {
    return (<span>{value.toLocaleString()}</span>)
}

export default JsonNumberView;