/**
 * @author WMXPY
 * @namespace Pattern
 * @description Create
 */

import { AndPattern, AnyPattern, BigIntPattern, BooleanPattern, CustomPattern, DatePattern, EmptyPattern, ExactPattern, FunctionPattern, ListPattern, MapPattern, NumberPattern, OrPattern, Pattern, RecordPattern, StringPattern, TuplePattern } from "./pattern";

export const createStringPattern = (
    options?: Omit<StringPattern, 'type'>,
): StringPattern => {

    return {
        type: 'string',
        ...options,
    };
};

export const createNumberPattern = (
    options?: Omit<NumberPattern, 'type'>,
): NumberPattern => {

    return {
        type: 'number',
        ...options,
    };
};

export const createIntegerPattern = (
    options?: Omit<NumberPattern, 'type' | 'integer' | 'float' | 'fraction'>,
): NumberPattern => {

    return {
        type: 'number',
        integer: true,
        fraction: false,
        float: false,
        ...options,
    };
};

export const createFractionPattern = (
    options?: Omit<NumberPattern, 'type' | 'integer' | 'float' | 'fraction'>,
): NumberPattern => {

    return {
        type: 'number',
        integer: false,
        fraction: true,
        float: false,
        ...options,
    };
};

export const createFloatPattern = (
    options?: Omit<NumberPattern, 'type' | 'integer' | 'float' | 'fraction'>,
): NumberPattern => {

    return {
        type: 'number',
        integer: false,
        fraction: false,
        float: true,
        ...options,
    };
};

export const createBigIntPattern = (
    options?: Omit<BigIntPattern, 'type'>,
): BigIntPattern => {

    return {
        type: 'bigint',
        ...options,
    };
};

export const createBooleanPattern = (
    options?: Omit<BooleanPattern, 'type'>,
): BooleanPattern => {

    return {
        type: 'boolean',
        ...options,
    };
};

export const createTruePattern = (
    options?: Omit<BooleanPattern, 'type' | 'ensureTrue' | 'ensureFalse'>,
): BooleanPattern => {

    return {
        type: 'boolean',
        ensureTrue: true,
        ensureFalse: false,
        ...options,
    };
};

export const createFalsePattern = (
    options?: Omit<BooleanPattern, 'type' | 'ensureTrue' | 'ensureFalse'>,
): BooleanPattern => {

    return {
        type: 'boolean',
        ensureTrue: false,
        ensureFalse: true,
        ...options,
    };
};

export const createDatePattern = (
    options?: Omit<DatePattern, 'type'>,
): DatePattern => {

    return {
        type: 'date',
        ...options,
    };
};

export const createStringDatePattern = (
    options?: Omit<DatePattern, 'type' | 'allowString'>,
): DatePattern => {

    return {
        type: 'date',
        allowString: true,
        ...options,
    };
};

export const createFunctionPattern = (
    options?: Omit<FunctionPattern, 'type'>,
): FunctionPattern => {

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

export const createTuplePattern = (
    list: Pattern[],
    options?: Omit<TuplePattern, 'type'>,
): TuplePattern => {

    return {
        type: 'tuple',
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

export const createOrPattern = (
    elements: Pattern[],
    options?: Omit<Pattern, 'type'>,
): OrPattern => {

    return {
        type: 'or',
        options: elements,
        ...options,
    };
};

export const createAndPattern = (
    elements: Pattern[],
    options?: Omit<Pattern, 'type'>,
): AndPattern => {

    return {
        type: 'and',
        requirements: elements,
        ...options,
    };
};

export const createExactPattern = (
    value: any,
    options?: Omit<Pattern, 'type'>,
): ExactPattern => {

    return {
        type: 'exact',
        value,
        ...options,
    };
};

export const createEmptyPattern = (
    options?: Omit<Pattern, 'type'>,
): EmptyPattern => {

    return {
        type: 'empty',
        ...options,
    };
};

export const createAnyPattern = (
    options?: Omit<Pattern, 'type'>,
): AnyPattern => {

    return {
        type: 'any',
        ...options,
    };
};
