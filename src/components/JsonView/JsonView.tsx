import { JsonViewProps } from "./JsonView.types";
import { JsonViewProvider } from "./JsonViewContext";
import { JsonTree } from "./JsonTree";

export const JsonView = ({title, json}: JsonViewProps) => {
    return (
        <JsonViewProvider json={json}>
            <JsonTree title={title}/>
        </JsonViewProvider>
    )
}