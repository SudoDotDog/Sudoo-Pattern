/**
 * @author WMXPY
 * @namespace Pattern
 * @description Base
 */

import { CommonPattern } from "./common";

export type StringBasePattern = {

    readonly type: 'string';
    readonly regexp?: RegExp;
    readonly minimumLength?: number;
    readonly maximumLength?: number;
    readonly enum?: string[];
} & CommonPattern;

export type NumberBasePattern = {

    readonly type: 'number';
    readonly allowNaN?: boolean;
    readonly allowInfinity?: boolean;
    readonly integer?: boolean;
    readonly float?: boolean;
    readonly minimum?: number;
    readonly maximum?: number;
    readonly enum?: number[];
} & CommonPattern;

export type BigIntBasePattern = {

    readonly type: 'bigint';
    readonly minimum?: bigint;
    readonly maximum?: bigint;
    readonly enum?: Array<bigint>;
} & CommonPattern;

export type BooleanBasePattern = {

    readonly type: 'boolean';
    readonly ensureTrue?: boolean;
    readonly ensureFalse?: boolean;
} & CommonPattern;

export type DateBasePattern = {

    readonly type: 'date';
    readonly allowString?: boolean;
    readonly before?: Date;
    readonly after?: Date;
} & CommonPattern;

export type FunctionBasePattern = {

    readonly type: 'function',
} & CommonPattern;

export type MapBasePattern = {

    readonly type: 'map';
    readonly map: Record<string, BasePattern>;
    readonly strict?: boolean;
} & CommonPattern;

export type RecordBasePattern = {

    readonly type: 'record';
    readonly key: BasePattern;
    readonly value: BasePattern;
} & CommonPattern;

export type ListBasePattern = {

    readonly type: 'list';
    readonly element: BasePattern;
    readonly minimumSize?: number;
    readonly maximumSize?: number;
} & CommonPattern;

export type ExactListBasePattern = {

    readonly type: 'exact-list';
    readonly list: BasePattern[];
} & CommonPattern;

export type CustomBasePattern = {

    readonly type: 'custom';
    readonly validate: (value: any) => boolean;
} & CommonPattern;

export type OrBasePattern = {

    readonly type: 'or';
    readonly options: BasePattern[];
} & CommonPattern;

export type AndBasePattern = {

    readonly type: 'and';
    readonly requirements: BasePattern[];
} & CommonPattern;

export type ExactBasePattern = {

    readonly type: 'exact';
    readonly value: any;
} & CommonPattern;

export type EmptyBasePattern = {

    readonly type: 'empty';
    readonly allowUndefined?: boolean;
    readonly allowNull?: boolean;
} & CommonPattern;

export type AnyBasePattern = {

    readonly type: 'any';
} & CommonPattern;

export type BasePattern =
    StringBasePattern
    | NumberBasePattern
    | BigIntBasePattern
    | BooleanBasePattern
    | DateBasePattern
    | FunctionBasePattern
    | MapBasePattern
    | RecordBasePattern
    | ListBasePattern
    | ExactListBasePattern
    | CustomBasePattern
    | OrBasePattern
    | AndBasePattern
    | ExactBasePattern
    | EmptyBasePattern
    | AnyBasePattern;
