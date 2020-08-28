/**
 * @author WMXPY
 * @namespace Pattern
 * @description Schema
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { createBigIntPattern, createListPattern, createMapPattern, createNumberPattern, createRecordPattern, createStringPattern, createTuplePattern, Pattern, validatePatternSchema } from '../../src';

describe('Given [Schema] Helper Functions', (): void => {

    const chance: Chance.Chance = new Chance('pattern-schema');

    it('should be able to validate none pattern', (): void => {

        expect(validatePatternSchema(chance.string() as any)).to.be.false;
    });

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

    it('should be able to validate map pattern', (): void => {

        const key: string = chance.string();
        const pattern: Pattern = createMapPattern({
            [key]: createStringPattern(),
        });

        expect(validatePatternSchema(pattern)).to.be.true;
    });

    it('should be able to validate list pattern', (): void => {

        const pattern: Pattern = createListPattern(createStringPattern());

        expect(validatePatternSchema(pattern)).to.be.true;
    });

    it('should be able to validate record pattern', (): void => {

        const pattern: Pattern = createRecordPattern(
            createStringPattern(),
            createStringPattern(),
        );

        expect(validatePatternSchema(pattern)).to.be.true;
    });

    it('should be able to validate tuple pattern', (): void => {

        const pattern: Pattern = createTuplePattern([
            createStringPattern(),
            createStringPattern(),
        ]);

        expect(validatePatternSchema(pattern)).to.be.true;
    });
});
