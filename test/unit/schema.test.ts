/**
 * @author WMXPY
 * @namespace Pattern
 * @description Schema
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { createBigIntPattern, createNumberPattern, createStringPattern, Pattern, validatePatternSchema } from '../../src';

describe('Given [Schema] Helper Functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('pattern-schema');

    it('should be able to validate string pattern', (): void => {

        const pattern: Pattern = createStringPattern();

        expect(validatePatternSchema(pattern)).to.be.true;
    });

    it('should be able to validate number pattern', (): void => {

        const pattern: Pattern = createNumberPattern();

        expect(validatePatternSchema(pattern)).to.be.true;
    });

    it('should be able to validate bigint pattern', (): void => {

        const pattern: Pattern = createBigIntPattern();

        expect(validatePatternSchema(pattern)).to.be.true;
    });
});
