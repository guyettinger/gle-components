import {
    JsonNodeViewProps
} from "./JsonView.types";
import JsonNodeTitleView from "./JsonNodeTitleView";
import JsonNodeValueView from "./JsonNodeValueView"
import { useJsonViewApiContext } from "./JsonViewContext";

const JsonNodeView = ({title, path, value}: JsonNodeViewProps) => {
    const api = useJsonViewApiContext()

    const handleClick = (e: any) => {
        e.stopPropagation()
        api.log(path, value)
    }

    return (
        <li onClick={handleClick}>
            {title && <JsonNodeTitleView title={title}/>}
            <JsonNodeValueView path={path} value={value}/>
        </li>
    )
}
export default JsonNodeView;