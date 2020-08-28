/**
 * @author WMXPY
 * @namespace Pattern
 * @description Schema
 */

import { availablePatternType } from "./declare";
import { Pattern } from "./pattern";

export const validatePatternSchema = (pattern: Pattern): boolean => {

    if (!availablePatternType.includes(pattern.type)) {
        return false;
    }

    switch (pattern.type) {

        case 'map': {

            const keys: string[] = Object.keys(pattern.map);
            for (const key of keys) {
                const schema: Pattern = pattern.map[key];
                if (!validatePatternSchema(schema)) {
                    return false;
                }
            }
            break;
        }
        case 'list': {

            if (!validatePatternSchema(pattern.element)) {
                return false;
            }
            break;
        }
        case 'record': {

            if (!validatePatternSchema(pattern.key)) {
                return false;
            }
            if (!validatePatternSchema(pattern.value)) {
                return false;
            }
            break;
        }
        case 'tuple': {

            for (const schema of pattern.list) {
                if (!validatePatternSchema(schema)) {
                    return false;
                }
            }
            break;
        }
    }

    return true;
};
