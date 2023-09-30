import { createContext, Dispatch, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { set } from "lodash";
import { JsonValue, JsonViewProviderProps } from "./JsonView.types";

enum JsonViewReducerActionTypes {
    add = 'add',
    remove = 'remove',
    rename = 'rename',
    update = 'update',
    log = 'log'
}

type JsonViewAddAction = {
    type: JsonViewReducerActionTypes.add
    path: string
    value: JsonValue
}

type JsonViewRemoveAction = {
    type: JsonViewReducerActionTypes.remove
    path: string
}

type JsonViewRenameAction = {
    type: JsonViewReducerActionTypes.rename
    path: string
    name: string
}

type JsonViewUpdateAction = {
    type: JsonViewReducerActionTypes.update
    path: string
    value: JsonValue
}

type JsonViewLogAction = {
    type: JsonViewReducerActionTypes.log
    path: string
    value: JsonValue
}

type JsonViewReducerAction =
    | JsonViewAddAction
    | JsonViewRemoveAction
    | JsonViewRenameAction
    | JsonViewUpdateAction
    | JsonViewLogAction

const jsonViewReducer = (json:any, action: JsonViewReducerAction): void => {
    switch (action.type) {
        case JsonViewReducerActionTypes.add:
            // todo
            break
        case JsonViewReducerActionTypes.remove:
            // todo
            break
        case JsonViewReducerActionTypes.rename:
            // todo
            break
        case JsonViewReducerActionTypes.update:
            set(json, action.path, action.value)
            break
        case JsonViewReducerActionTypes.log:
            console.log(action.type, action.path, action.value)
            break
    }
}

const JsonViewContext = createContext<JsonValue | null>(null)

interface JsonViewApi {
    add: (path: string, value: JsonValue) => void
    remove: (path: string) => void
    rename: (path: string, name: string) => void
    update: (path: string, value: JsonValue) => void
    log: (path: string, value: JsonValue) => void
}

const createJsonViewApi = (dispatch: Dispatch<JsonViewReducerAction>): JsonViewApi => {

    const add = (path: string, value: JsonValue) => {
        const addAction: JsonViewAddAction = {
            type: JsonViewReducerActionTypes.add,
            path: path,
            value: value
        }
        return dispatch(addAction)
    }

    const remove = (path: string) => {
        const removeAction: JsonViewRemoveAction = {
            type: JsonViewReducerActionTypes.remove,
            path: path
        }
        return dispatch(removeAction)
    }

    const rename = (path: string, name: string) => {
        const renameAction: JsonViewRenameAction = {
            type: JsonViewReducerActionTypes.rename,
            path: path,
            name: name
        }
        return dispatch(renameAction)
    }

    const update = (path: string, value: JsonValue) => {
        const updateAction: JsonViewUpdateAction = {
            type: JsonViewReducerActionTypes.update,
            path: path,
            value: value
        }
        return dispatch(updateAction)
    }

    const log = (path: string, value: JsonValue) => {
        const logAction: JsonViewLogAction = {
            type: JsonViewReducerActionTypes.log,
            path: path,
            value: value
        }
        return dispatch(logAction)
    }

    return {
        add,
        remove,
        rename,
        update,
        log
    }

}

const JsonViewApiContext = createContext<JsonViewApi>({
    add(path: string, value: JsonValue): void {
    },
    remove(path: string): void {
    },
    rename(path: string, name: string): void {
    },
    update(path, value): void {
    },
    log(path: string, value: JsonValue): void {
    }
});

export const useJsonViewContext = () => {
    return useContext(JsonViewContext)
}

export const useJsonViewApiContext = () => {
    return useContext(JsonViewApiContext)
}

export const JsonViewProvider = ({json, children}: JsonViewProviderProps) => {
    const [value, dispatch] = useImmerReducer<any, JsonViewReducerAction>(jsonViewReducer, json)
    const api = createJsonViewApi(dispatch)
    return (
        <JsonViewContext.Provider value={value}>
            <JsonViewApiContext.Provider value={api}>
                {children}
            </JsonViewApiContext.Provider>
        </JsonViewContext.Provider>
    )
}