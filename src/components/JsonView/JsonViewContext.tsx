import { createContext, Dispatch, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { get, set, unset } from "lodash";
import { JsonValue, JsonViewProviderProps } from "./JsonView.types";

enum JsonViewReducerActionTypes {
    add = 'add',
    remove = 'remove',
    rename = 'rename',
    update = 'update'
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

type JsonViewReducerAction =
    | JsonViewAddAction
    | JsonViewRemoveAction
    | JsonViewRenameAction
    | JsonViewUpdateAction

const jsonViewReducer = (json: any, action: JsonViewReducerAction): void => {
    const separator = '.'
    switch (action.type) {
        case JsonViewReducerActionTypes.add: {
            set(json, action.path, action.value)
            break
        }
        case JsonViewReducerActionTypes.remove: {
            const isArrayPath = action.path.endsWith(']')
            if (isArrayPath) {
                const arrayIndex = parseInt(action.path.split(/[\[\]]/).filter(v => !!v).pop()!)
                const arrayIndexPart = `[${arrayIndex}]`
                const arrayPath = action.path.slice(0, action.path.lastIndexOf(arrayIndexPart))
                const array = get(json, arrayPath)
                array.splice(arrayIndex, 1)
                set(json, arrayPath, [...array])
            } else {
                unset(json, action.path)
            }
            break
        }
        case JsonViewReducerActionTypes.rename: {
            const value = get(json, action.path)
            const pathArray = action.path.split(separator)
            const parentPathArray = pathArray.slice(0, pathArray.length - 2)
            const newPathArray = [...parentPathArray, action.name]
            const newPath = newPathArray.join(separator)
            unset(json, action.path)
            set(json, newPath, value)
            break
        }
        case JsonViewReducerActionTypes.update: {
            set(json, action.path, action.value)
            break
        }
    }
}

const JsonViewContext = createContext<JsonValue | null>(null)

interface JsonViewApi {
    add: (path: string, value: JsonValue) => void
    remove: (path: string) => void
    rename: (path: string, name: string) => void
    update: (path: string, value: JsonValue) => void
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

    return {
        add,
        remove,
        rename,
        update
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