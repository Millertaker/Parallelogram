import common from '../common';
const options = common.options;
const assert = common.assert;
import chai from 'chai';
import {JSDOM} from 'jsdom';
import canvasMock from '../mocks/canvas';
import canvasMockContext from '../mocks/canvasContext';

import parallelogram from '../../src/js/shapes/parallelogram'

describe('Parallelogram object test', () => {  
  const dom = new JSDOM(`<!DOCTYPE html><body>${canvasMock}</body>`);
  var el = dom.window.document.getElementById('canvas-holder');
  canvasMockContext(dom);
  var gl = el.getContext("2d");

  it('parallelogram should exists as empty object', () => {
    var myParallelogram = parallelogram([0,0],[10,10], [45,45], '#FFFFFF', gl);

    assert.equal(typeof myParallelogram, 'object', 'the object exists');
    assert.equal(myParallelogram.lineColor,  null, 'a empty parallelogram doesnt has a line corlor');
  });

  it('parallelogram should exists as empty object', () => {
    var myParallelogram = parallelogram([0,0],[10,10], [45,45], '#FFFFFF', gl);

    assert.equal(typeof myParallelogram, 'object', 'the object exists');
    assert.equal(myParallelogram.lineColor,  null, 'a empty parallelogram doesnt has a line corlor');
  });
  
});
