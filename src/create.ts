/**
 * @author WMXPY
 * @namespace Pattern
 * @description Create
 */

import { BigIntPattern, BooleanPattern, CustomPattern, DatePattern, ExactListPattern, FunctionPattern, ListPattern, MapPattern, NumberPattern, Pattern, RecordPattern, StringPattern } from "./pattern";

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

export const createBigIntPattern = (options?: Omit<BigIntPattern, 'type'>): BigIntPattern => {

    return {
        type: 'bigint',
        ...options,
    };
};

export const createBooleanPattern = (options?: Omit<BooleanPattern, 'type'>): BooleanPattern => {

    return {
        type: 'boolean',
        ...options,
    };
};

export const createDatePattern = (options?: Omit<DatePattern, 'type'>): DatePattern => {

    return {
        type: 'date',
        ...options,
    };
};

export const createFunctionPattern = (options?: Omit<FunctionPattern, 'type'>): FunctionPattern => {

    return {
        type: 'function',
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

export const createStrictMapPattern = (
    record: Record<string, Pattern>,
    options?: Omit<MapPattern, 'type' | 'map' | 'strict'>,
): MapPattern => {

    return {
        type: 'map',
        map: record,
        strict: true,
        ...options,
    };
};

export const createRecordPattern = (
    key: Pattern,
    value: Pattern,
    options?: Omit<RecordPattern, 'type'>,
): RecordPattern => {

    return {
        type: 'record',
        key,
        value,
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

export const createExactListPattern = (
    list: Pattern[],
    options?: Omit<ExactListPattern, 'type'>,
): ExactListPattern => {

    return {
        type: 'exact-list',
        list,
        ...options,
    };
};

export const createCustomPattern = (
    validate: (value: any) => boolean,
    options?: Omit<CustomPattern, 'type'>,
): CustomPattern => {

    return {
        type: 'custom',
        validate,
        ...options,
    };
};
