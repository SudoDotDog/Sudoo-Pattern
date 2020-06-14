/**
 * @author WMXPY
 * @namespace Pattern
 * @description Pattern
 */

import { AndBasePattern, AnyBasePattern, BigIntBasePattern, BooleanBasePattern, CustomBasePattern, DateBasePattern, EmptyBasePattern, ExactBasePattern, ExactListBasePattern, FunctionBasePattern, ListBasePattern, MapBasePattern, NumberBasePattern, OrBasePattern, RecordBasePattern, StringBasePattern } from "./base";

export type StringPattern = {

    readonly regexp?: RegExp;
    readonly minimumLength?: number;
    readonly maximumLength?: number;
} & StringBasePattern;

export type NumberPattern = {

    readonly allowNaN?: boolean;
    readonly allowInfinity?: boolean;
    readonly minimum?: number;
    readonly maximum?: number;
} & NumberBasePattern;

export type BigIntPattern = {

    readonly minimum?: bigint;
    readonly maximum?: bigint;
} & BigIntBasePattern;

export type BooleanPattern = {

    readonly ensureTrue?: boolean;
    readonly ensureFalse?: boolean;
} & BooleanBasePattern;

export type DatePattern = {

    readonly allowString?: boolean;
    readonly before?: Date;
    readonly after?: Date;
} & DateBasePattern;

export type FunctionPattern = {

} & FunctionBasePattern;

export type MapPattern = {

    readonly strict?: boolean;
} & MapBasePattern;

export type RecordPattern = {

} & RecordBasePattern;

export type ListPattern = {

    readonly minimumSize?: number;
    readonly maximumSize?: number;
} & ListBasePattern;

export type ExactListPattern = {

} & ExactListBasePattern;

export type CustomPattern = {

    readonly validate?: (value: any) => boolean;
} & CustomBasePattern;

export type OrPattern = {

} & OrBasePattern;

export type AndPattern = {

} & AndBasePattern;

export type ExactPattern = {

} & ExactBasePattern;

export type EmptyPattern = {

    readonly allowUndefined?: boolean;
    readonly allowNull?: boolean;
} & EmptyBasePattern;

export type AnyPattern = {

} & AnyBasePattern;

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
    | ExactListPattern
    | CustomPattern
    | OrPattern
    | AndPattern
    | ExactPattern
    | EmptyPattern
    | AnyPattern;
