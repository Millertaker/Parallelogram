import common from '../common';
const options = common.options;
const assert = common.assert;
import chai from 'chai';
import {JSDOM} from 'jsdom';
import * as htmlMocks from '../mocks/html';

import Input from '../../src/js/forms/input';
import DataGenerator from '../../src/js/globals/common';

describe('Input component test', () => {
  it('Should exists as object', () => {

    let inputDOMMarkup = htmlMocks.textInput;
    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);

    dom.window.document.DataGenerator = DataGenerator.getInstance();
    let input = Input({selector: 'text-input-component-js', document: dom.window.document});

    assert.equal(typeof input,  'object', 'the returned value is a Object');
  });

});

