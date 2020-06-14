/**
 * @author WMXPY
 * @namespace Pattern
 * @description Verify
 */

export type StringVerifyPattern = {

    readonly regexp?: RegExp;
    readonly minimumLength?: number;
    readonly maximumLength?: number;
};

export type NumberVerifyPattern = {

    readonly allowNaN?: boolean;
    readonly allowInfinity?: boolean;
    readonly minimum?: number;
    readonly maximum?: number;
};

export type BigIntVerifyPattern = {

    readonly minimum?: bigint;
    readonly maximum?: bigint;
};

export type BooleanVerifyPattern = {

    readonly ensureTrue?: boolean;
    readonly ensureFalse?: boolean;
};

export type DateVerifyPattern = {

    readonly allowString?: boolean;
    readonly before?: Date;
    readonly after?: Date;
};

export type FunctionVerifyPattern = {

};

export type MapVerifyPattern = {

    readonly strict?: boolean;
};

export type RecordVerifyPattern = {

};

export type ListVerifyPattern = {

    readonly minimumSize?: number;
    readonly maximumSize?: number;
};

export type ExactListVerifyPattern = {

};

export type CustomVerifyPattern = {

    readonly validate?: (value: any) => boolean;
};

export type OrVerifyPattern = {

};

export type AndVerifyPattern = {

};

export type ExactVerifyPattern = {

};

export type EmptyVerifyPattern = {

    readonly allowUndefined?: boolean;
    readonly allowNull?: boolean;
};

export type AnyVerifyPattern = {

};

export type VerifyPattern =
    StringVerifyPattern
    | NumberVerifyPattern
    | BigIntVerifyPattern
    | BooleanVerifyPattern
    | DateVerifyPattern
    | FunctionVerifyPattern
    | MapVerifyPattern
    | RecordVerifyPattern
    | ListVerifyPattern
    | ExactListVerifyPattern
    | CustomVerifyPattern
    | OrVerifyPattern
    | AndVerifyPattern
    | ExactVerifyPattern
    | EmptyVerifyPattern
    | AnyVerifyPattern;
