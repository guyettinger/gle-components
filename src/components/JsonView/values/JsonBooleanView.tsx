import { JsonBooleanViewProps } from "../JsonView.types";

const JsonBooleanView = ({value}: JsonBooleanViewProps) => {
    return (<span>{value ? "true" : "false"}</span>)
}

export default JsonBooleanView;