/**
 * @author WMXPY
 * @namespace Pattern
 * @description Verify
 */

import { AndBasePattern, AnyBasePattern, BigIntBasePattern, BooleanBasePattern, CustomBasePattern, DateBasePattern, EmptyBasePattern, ExactBasePattern, ExactListBasePattern, FunctionBasePattern, ListBasePattern, MapBasePattern, NumberBasePattern, OrBasePattern, RecordBasePattern, StringBasePattern } from "./base";

export type StringVerifyPattern = {

    readonly regexp?: RegExp;
    readonly minimumLength?: number;
    readonly maximumLength?: number;
} & StringBasePattern;

export type NumberVerifyPattern = {

    readonly allowNaN?: boolean;
    readonly allowInfinity?: boolean;
    readonly minimum?: number;
    readonly maximum?: number;
} & NumberBasePattern;

export type BigIntVerifyPattern = {

    readonly minimum?: bigint;
    readonly maximum?: bigint;
} & BigIntBasePattern;

export type BooleanVerifyPattern = {

    readonly ensureTrue?: boolean;
    readonly ensureFalse?: boolean;
} & BooleanBasePattern;

export type DateVerifyPattern = {

    readonly allowString?: boolean;
    readonly before?: Date;
    readonly after?: Date;
} & DateBasePattern;

export type FunctionVerifyPattern = {

} & FunctionBasePattern;

export type MapVerifyPattern = {

    readonly strict?: boolean;
} & MapBasePattern;

export type RecordVerifyPattern = {

} & RecordBasePattern;

export type ListVerifyPattern = {

    readonly minimumSize?: number;
    readonly maximumSize?: number;
} & ListBasePattern;

export type ExactListVerifyPattern = {

} & ExactListBasePattern;

export type CustomVerifyPattern = {

    readonly validate?: (value: any) => boolean;
} & CustomBasePattern;

export type OrVerifyPattern = {

    readonly options: VerifyPattern[];
} & OrBasePattern;

export type AndVerifyPattern = {

    readonly requirements: VerifyPattern[];
} & AndBasePattern;

export type ExactVerifyPattern = {

    readonly value: any;
} & ExactBasePattern;

export type EmptyVerifyPattern = {

    readonly allowUndefined?: boolean;
    readonly allowNull?: boolean;
} & EmptyBasePattern;

export type AnyVerifyPattern = {

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
