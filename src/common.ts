/**
 * @author WMXPY
 * @namespace Pattern
 * @description Common
 */

export type CommonPattern = {

    readonly role?: string;
    readonly optional?: boolean;
    readonly nullable?: boolean;
    readonly generate?: () => any;
    readonly invalidMessage?: (value?: any) => string;
};
