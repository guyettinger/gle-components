import styled from "styled-components";
import { JsonNodeViewProps } from "./JsonView.types";
import JsonNodeTitleView from "./JsonNodeTitleView";
import JsonNodeValueView from "./JsonNodeValueView"
import { useJsonViewApiContext } from "./JsonViewContext";

const JsonNodeContent = styled.li`
    display: flex;
`

const JsonNodeTitleContainer = styled.div`
  flex-basis: fit-content;
  padding-right: 4px;
`

const JsonNodeValueContainer = styled.div`
    flex: 1;
`

const JsonNodeView = ({title, path, value}: JsonNodeViewProps) => {
    const api = useJsonViewApiContext()

    const handleClick = (e: any) => {
        e.stopPropagation()
        api.log(path, value)
    }

    return (
        <JsonNodeContent onClick={handleClick}>
            {title &&
                <JsonNodeTitleContainer>
                    <JsonNodeTitleView title={title}/>
                </JsonNodeTitleContainer>
            }
            <JsonNodeValueContainer>
                <JsonNodeValueView path={path} value={value}/>
            </JsonNodeValueContainer>
        </JsonNodeContent>
    )
}
export default JsonNodeView;