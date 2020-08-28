/**
 * @author WMXPY
 * @namespace Pattern
 * @description Schema
 */

import { availablePatternType } from "./declare";
import { Pattern } from "./pattern";

export const verifyPatternSchema = (pattern: Pattern): boolean => {

    if (!availablePatternType.includes(pattern.type)) {
        return false;
    }

    return true;
};
