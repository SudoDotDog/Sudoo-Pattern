/**
 * @author WMXPY
 * @namespace Pattern
 * @description Verify
 */

import { AndBasePattern, AnyBasePattern, BigIntBasePattern, BooleanBasePattern, CustomBasePattern, DateBasePattern, EmptyBasePattern, ExactBasePattern, ExactListBasePattern, FunctionBasePattern, ListBasePattern, MapBasePattern, NumberBasePattern, OrBasePattern, RecordBasePattern, StringBasePattern } from "./base";

export type StringVerifyPattern = {

    readonly type: 'string';
    readonly regexp?: RegExp;
    readonly minimumLength?: number;
    readonly maximumLength?: number;
    readonly enum?: string[];
} & StringBasePattern;

export type NumberVerifyPattern = {

    readonly type: 'number';
    readonly allowNaN?: boolean;
    readonly allowInfinity?: boolean;
    readonly integer?: boolean;
    readonly float?: boolean;
    readonly minimum?: number;
    readonly maximum?: number;
    readonly enum?: number[];
} & NumberBasePattern;

export type BigIntVerifyPattern = {

    readonly type: 'bigint';
    readonly minimum?: bigint;
    readonly maximum?: bigint;
    readonly enum?: Array<bigint>;
} & BigIntBasePattern;

export type BooleanVerifyPattern = {

    readonly type: 'boolean';
    readonly ensureTrue?: boolean;
    readonly ensureFalse?: boolean;
} & BooleanBasePattern;

export type DateVerifyPattern = {

    readonly type: 'date';
    readonly allowString?: boolean;
    readonly before?: Date;
    readonly after?: Date;
} & DateBasePattern;

export type FunctionVerifyPattern = {

    readonly type: 'function',
} & FunctionBasePattern;

export type MapVerifyPattern = {

    readonly type: 'map';
    readonly map: Record<string, VerifyPattern>;
    readonly strict?: boolean;
} & MapBasePattern;

export type RecordVerifyPattern = {

    readonly type: 'record';
    readonly key: VerifyPattern;
    readonly value: VerifyPattern;
} & RecordBasePattern;

export type ListVerifyPattern = {

    readonly type: 'list';
    readonly element: VerifyPattern;
    readonly minimumSize?: number;
    readonly maximumSize?: number;
} & ListBasePattern;

export type ExactListVerifyPattern = {

    readonly type: 'exact-list';
    readonly list: VerifyPattern[];
} & ExactListBasePattern;

export type CustomVerifyPattern = {

    readonly type: 'custom';
    readonly validate: (value: any) => boolean;
} & CustomBasePattern;

export type OrVerifyPattern = {

    readonly type: 'or';
    readonly options: VerifyPattern[];
} & OrBasePattern;

export type AndVerifyPattern = {

    readonly type: 'and';
    readonly requirements: VerifyPattern[];
} & AndBasePattern;

export type ExactVerifyPattern = {

    readonly type: 'exact';
    readonly value: any;
} & ExactBasePattern;

export type EmptyVerifyPattern = {

    readonly type: 'empty';
    readonly allowUndefined?: boolean;
    readonly allowNull?: boolean;
} & EmptyBasePattern;

export type AnyVerifyPattern = {

    readonly type: 'any';
} & AnyBasePattern;

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
