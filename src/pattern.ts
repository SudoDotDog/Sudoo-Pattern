/**
 * @author WMXPY
 * @namespace Pattern
 * @description Pattern
 */

import { CommonPattern } from "./common";

export type StringPattern = {

    readonly type: 'string';
    readonly regexp?: RegExp;
    readonly minimumLength?: number;
    readonly maximumLength?: number;
    readonly enum?: string[];
} & CommonPattern;

export type NumberPattern = {

    readonly type: 'number';
    readonly allowNaN?: boolean;
    readonly allowInfinity?: boolean;
    readonly integer?: boolean;
    readonly float?: boolean;
    readonly fraction?: boolean;
    readonly minimum?: number;
    readonly maximum?: number;
    readonly enum?: number[];
} & CommonPattern;

export type BigIntPattern = {

    readonly type: 'bigint';
    readonly minimum?: bigint;
    readonly maximum?: bigint;
    readonly enum?: bigint[];
} & CommonPattern;

export type BooleanPattern = {

    readonly type: 'boolean';
    readonly ensureTrue?: boolean;
    readonly ensureFalse?: boolean;
} & CommonPattern;

export type DatePattern = {

    readonly type: 'date';
    readonly allowString?: boolean;
    readonly before?: Date;
    readonly after?: Date;
} & CommonPattern;

export type FunctionPattern = {

    readonly type: 'function';
} & CommonPattern;

export type MapPattern = {

    readonly type: 'map';
    readonly map: Record<string, Pattern>;
    readonly strict?: boolean;
} & CommonPattern;

export type RecordPattern = {

    readonly type: 'record';
    readonly key: Pattern;
    readonly value: Pattern;
} & CommonPattern;

export type ListPattern = {

    readonly type: 'list';
    readonly element: Pattern;
    readonly minimumSize?: number;
    readonly maximumSize?: number;
} & CommonPattern;

export type TuplePattern = {

    readonly type: 'tuple';
    readonly list: Pattern[];
} & CommonPattern;

export type CustomPattern = {

    readonly type: 'custom';
    readonly validate: (value: any) => boolean;
} & CommonPattern;

export type OrPattern = {

    readonly type: 'or';
    readonly options: Pattern[];
} & CommonPattern;

export type AndPattern = {

    readonly type: 'and';
    readonly requirements: Pattern[];
} & CommonPattern;

export type ExactPattern = {

    readonly type: 'exact';
    readonly value: any;
} & CommonPattern;

export type EmptyPattern = {

    readonly type: 'empty';
    readonly allowUndefined?: boolean;
    readonly allowNull?: boolean;
} & CommonPattern;

export type AnyPattern = {

    readonly type: 'any';
    readonly banishUndefined?: boolean;
    readonly banishNull?: boolean;
} & CommonPattern;

export type Pattern =
    StringPattern
    | NumberPattern
    | BigIntPattern
    | BooleanPattern
    | DatePattern
    | FunctionPattern
    | MapPattern
    | RecordPattern
    | ListPattern
    | TuplePattern
    | CustomPattern
    | OrPattern
    | AndPattern
    | ExactPattern
    | EmptyPattern
    | AnyPattern;
