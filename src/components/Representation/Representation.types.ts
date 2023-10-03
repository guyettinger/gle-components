import { ComponentType } from "react";

export enum RepresentationTypes {
    view = 'view',
    edit = 'edit'
}

export interface ViewRepresentationProps<T> {
    value: T
}

export interface EditRepresentationProps<T>{
    value: T
    onSubmit: (newValue:T) => void
    onCancel: () => void
}

export interface RepresentationProps<T> {
    value: T
    onSubmit: (newValue:T) => void
    representationType?: RepresentationTypes
    ViewRepresentation: ComponentType<ViewRepresentationProps<T>>
    EditRepresentation: ComponentType<EditRepresentationProps<T>>
}