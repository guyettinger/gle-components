import {
    isJsonArray,
    isJsonBoolean,
    isJsonNull,
    isJsonNumber,
    isJsonObject,
    isJsonString,
    JsonNodeValueViewProps
} from "./JsonView.types";
import { JsonStringNode } from "./nodes";
import { JsonNumberNode } from "./nodes";
import { JsonBooleanNode } from "./nodes";
import { JsonObjectNode } from "./nodes";
import { JsonArrayNode } from "./nodes";
import { JsonNullNode } from "./nodes";
import { JsonUnknownNode } from "./nodes";

export const JsonNodeValue = ({value, path}: JsonNodeValueViewProps) => {

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