export enum EditableTypes {
    input = 'input'
}

export interface EditableProps {
    value: string
    placeholder?: string
    editableType: EditableTypes
    onValueChanged: (value:string) => void
}