/**
 * @author WMXPY
 * @namespace Pattern
 * @description Create
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { createMapPattern, Pattern } from '../../src';

describe('Given [Create] Helper Functions', (): void => {

    const chance: Chance.Chance = new Chance('pattern-create');

    it('should be able to create map pattern', (): void => {

        const key: string = chance.string();
        const pattern: Pattern = createMapPattern({
            [key]: {
                type: 'any',
            },
        });

        expect(pattern).to.be.deep.equal({
            type: 'map',
            map: {
                [key]: {
                    type: 'any',
                },
            },
        });
    });
});
