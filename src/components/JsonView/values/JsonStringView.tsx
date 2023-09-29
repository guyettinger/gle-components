import { JsonStringViewProps } from "../JsonView.types";

const JsonStringView = ({value}: JsonStringViewProps) => {
    return (<span>{value.toString()}</span>)
}

export default JsonStringView;