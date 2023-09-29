import { JsonViewProps } from "./JsonView.types";
import { JsonViewProvider } from "./JsonViewContext";
import JsonTreeView from "./JsonTreeView";

const JsonView = ({title, json}: JsonViewProps) => {
    return (
        <JsonViewProvider json={json}>
            <JsonTreeView title={title}/>
        </JsonViewProvider>
    )
}
export default JsonView;