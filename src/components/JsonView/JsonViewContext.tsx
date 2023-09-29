import { createContext, Dispatch, useContext, useReducer } from "react";
import { JsonValue, JsonViewProviderProps } from "./JsonView.types";

enum JsonViewReducerActionTypes {
    edit = 'edit',
    log = 'log'
}

type JsonViewEditAction = {
    type: JsonViewReducerActionTypes.edit
    path: string[]
    value: JsonValue
}


type JsonViewLogAction = {
    type: JsonViewReducerActionTypes.log
    path: string[]
    value: JsonValue
}

type JsonViewReducerAction =
    | JsonViewEditAction
    | JsonViewLogAction

const jsonViewReducer = (json: JsonValue, action: JsonViewReducerAction): JsonValue => {
    switch (action.type) {
        case JsonViewReducerActionTypes.edit:
            // todo
            break
        case JsonViewReducerActionTypes.log:
            console.log(action.type, action.path, action.value)
            break
    }
    return json
}

const JsonViewContext = createContext<JsonValue | null>(null)

interface JsonViewApi {
    edit: (path: string[], value: JsonValue) => void
    log: (path: string[], value: JsonValue) => void
}

const createJsonViewApi = (dispatch: Dispatch<JsonViewReducerAction>): JsonViewApi => {

    const edit = (path: string[], value: JsonValue) => {

        const editAction: JsonViewEditAction = {
            type: JsonViewReducerActionTypes.edit,
            path: path,
            value: value
        }

        return dispatch(editAction)
    }

    const log = (path: string[], value: JsonValue) => {

        const logAction: JsonViewLogAction = {
            type: JsonViewReducerActionTypes.log,
            path: path,
            value: value
        }

        return dispatch(logAction)
    }

    return {
        edit,
        log
    }

}

const JsonViewApiContext = createContext<JsonViewApi>({
    log(path: string[], value: JsonValue): void {
    },
    edit(path, value): void {
    }
});

export const useJsonViewContext = () => {
    return useContext(JsonViewContext)
}

export const useJsonViewApiContext = () => {
    return useContext(JsonViewApiContext)
}

export const JsonViewProvider = ({json, children}: JsonViewProviderProps) => {
    const [value, dispatch] = useReducer(jsonViewReducer, json)
    const api = createJsonViewApi(dispatch)
    return (
        <JsonViewContext.Provider value={value}>
            <JsonViewApiContext.Provider value={api}>
                {children}
            </JsonViewApiContext.Provider>
        </JsonViewContext.Provider>
    )
}