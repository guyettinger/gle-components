import { JsonViewProps } from "./JsonView.types";
import { JsonViewProvider } from "./JsonViewContext";
import JsonTree from "./JsonTree";

const JsonView = ({title, json}: JsonViewProps) => {
    return (
        <JsonViewProvider json={json}>
            <JsonTree title={title}/>
        </JsonViewProvider>
    )
}
export default JsonView;