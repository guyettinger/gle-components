import {
    isJsonArray,
    isJsonBoolean,
    isJsonNull,
    isJsonNumber,
    isJsonObject,
    isJsonString,
    JsonNodeValueViewProps
} from "./JsonView.types";
import JsonStringNode from "./nodes/JsonStringNode";
import JsonNumberNode from "./nodes/JsonNumberNode";
import JsonBooleanNode from "./nodes/JsonBooleanNode";
import JsonObjectNode from "./nodes/JsonObjectNode";
import JsonArrayNode from "./nodes/JsonArrayNode";
import JsonNullNode from "./nodes/JsonNullNode";
import JsonUnknownNode from "./nodes/JsonUnknownNode";

const JsonNodeValue = ({value, path}: JsonNodeValueViewProps) => {

    if (isJsonNull(value)) {
        return <JsonNullNode path={path}/>
    } else if (isJsonString(value)) {
        return <JsonStringNode value={value} path={path}/>
    } else if (isJsonNumber(value)) {
        return <JsonNumberNode value={value} path={path}/>
    } else if (isJsonBoolean(value)) {
        return <JsonBooleanNode value={value} path={path}/>
    } else if (isJsonArray(value)) {
        return <JsonArrayNode value={value} path={path}/>
    } else if (isJsonObject(value)) {
        return <JsonObjectNode value={value} path={path}/>
    } else {
        return <JsonUnknownNode path={path}/>
    }
}
export default JsonNodeValue;