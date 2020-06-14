/**
 * @author WMXPY
 * @namespace Pattern
 * @description Base
 */

import { CommonPattern } from "./common";

export type StringBasePattern = {

    readonly type: 'string';
    readonly enum?: string[];
} & CommonPattern;

export type NumberBasePattern = {

    readonly type: 'number';
    readonly integer?: boolean;
    readonly float?: boolean;
    readonly enum?: number[];
} & CommonPattern;

export type BigIntBasePattern = {

    readonly type: 'bigint';
    readonly enum?: Array<bigint>;
} & CommonPattern;

export type BooleanBasePattern = {

    readonly type: 'boolean';
} & CommonPattern;

export type DateBasePattern = {

    readonly type: 'date';
} & CommonPattern;

export type FunctionBasePattern = {

    readonly type: 'function',
} & CommonPattern;

export type MapBasePattern = {

    readonly type: 'map';
    readonly map: Record<string, BasePattern>;
} & CommonPattern;

export type RecordBasePattern = {

    readonly type: 'record';
    readonly key: BasePattern;
    readonly value: BasePattern;
} & CommonPattern;

export type ListBasePattern = {

    readonly type: 'list';
    readonly element: BasePattern;
} & CommonPattern;

export type ExactListBasePattern = {

    readonly type: 'exact-list';
    readonly list: BasePattern[];
} & CommonPattern;

export type CustomBasePattern = {

    readonly type: 'custom';
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
