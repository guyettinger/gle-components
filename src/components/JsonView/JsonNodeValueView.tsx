import {
    isJsonArray,
    isJsonBoolean,
    isJsonNull,
    isJsonNumber,
    isJsonObject,
    isJsonString,
    JsonNodeValueViewProps
} from "./JsonView.types";
import JsonStringView from "./values/JsonStringView";
import JsonNumberView from "./values/JsonNumberView";
import JsonBooleanView from "./values/JsonBooleanView";
import JsonObjectView from "./values/JsonObjectView";
import JsonArrayView from "./values/JsonArrayView";
import JsonNullView from "./values/JsonNullView";
import JsonUnknownView from "./values/JsonUnknownView";

const JsonNodeValueView = ({path, value}: JsonNodeValueViewProps) => {

    if (isJsonNull(value)) {
        return <JsonNullView/>
    } else if (isJsonString(value)) {
        return <JsonStringView value={value}/>
    } else if (isJsonNumber(value)) {
        return <JsonNumberView value={value}/>
    } else if (isJsonBoolean(value)) {
        return <JsonBooleanView value={value}/>
    } else if (isJsonArray(value)) {
        return <JsonArrayView value={value} path={path}/>
    } else if (isJsonObject(value)) {
        return <JsonObjectView value={value} path={path}/>
    } else {
        return <JsonUnknownView/>
    }
}
export default JsonNodeValueView;