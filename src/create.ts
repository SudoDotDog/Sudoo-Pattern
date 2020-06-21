/**
 * @author WMXPY
 * @namespace Pattern
 * @description Create
 */

import { ListPattern, MapPattern, NumberPattern, Pattern, StringPattern } from "./pattern";

export const createStringPattern = (options?: Omit<StringPattern, 'type'>): StringPattern => {

    return {
        type: 'string',
        ...options,
    };
};

export const createNumberPattern = (options?: Omit<NumberPattern, 'type'>): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};

export const createBigIntPattern = (options?: Omit<NumberPattern, 'type'>): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};

export const createBooleanPattern = (options?: Omit<NumberPattern, 'type'>): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};

export const createDatePattern = (options?: Omit<NumberPattern, 'type'>): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};

export const createFunctionPattern = (options?: Omit<NumberPattern, 'type'>): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};

export const createMapPattern = (
    record: Record<string, Pattern>,
    options?: Omit<MapPattern, 'type' | 'map'>,
): MapPattern => {

    return {
        type: 'map',
        map: record,
        ...options,
    };
};

export const createRecordPattern = (options?: Omit<NumberPattern, 'type'>): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};

export const createListPattern = (
    element: Pattern,
    options?: Omit<ListPattern, 'type' | 'element'>,
): ListPattern => {

    return {
        type: 'list',
        element,
        ...options,
    };
};

export const createExactListPattern = (options?: Omit<NumberPattern, 'type'>): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};

export const createCustomPattern = (options?: Omit<NumberPattern, 'type'>): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};
