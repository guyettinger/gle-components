import { ReactNode } from "react";

type JsonString = string;

type JsonNumber = number;

type JsonBoolean = boolean;

type JsonObject = { [x: string]: JsonValue };

type JsonArray = Array<JsonValue>;

type JsonNull = null;

export type JsonValue =
    | JsonString
    | JsonNumber
    | JsonBoolean
    | JsonObject
    | JsonArray
    | JsonNull;

export function isJsonString(value: JsonValue): value is JsonString {
    return typeof value === "string";
}

export function isJsonNumber(value: JsonValue): value is JsonNumber {
    return typeof value === "number";
}

export function isJsonBoolean(value: JsonValue): value is JsonBoolean {
    return typeof value === "boolean";
}

export function isJsonObject(value: JsonValue): value is JsonObject {
    return typeof value === "object";
}

export function isJsonArray(value: JsonValue): value is JsonArray {
    return Array.isArray(value)
}

export function isJsonNull(value: JsonValue): value is JsonNull {
    return value === null;
}

export interface JsonStringViewProps {
    value: JsonString
    path: string
}

export interface JsonNumberViewProps {
    value: JsonNumber
    path: string
}

export interface JsonBooleanViewProps {
    value: JsonBoolean
    path: string
}

export interface JsonObjectViewProps {
    value: JsonObject,
    path: string
}

export interface JsonArrayViewProps {
    value: JsonArray,
    path: string
}

export interface JsonNullViewProps {
    path: string
}

export interface JsonUnknownViewProps {
    path: string
}

export interface JsonNodeViewProps {
    title?: string
    path: string
    value: JsonValue
}

export interface JsonNodeTitleViewProps {
    title: string
    path: string
}

export interface JsonNodeValueViewProps {
    path: string
    value: JsonValue
}

export interface JsonTreeViewProps {
    title?: string
}

export interface JsonViewProps {
    title: string,
    json: JsonValue
}

export interface JsonViewProviderProps {
    json: JsonValue
    children?: ReactNode
}