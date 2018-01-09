import common from '../common';
const options = common.options;
const assert = common.assert;
import chai from 'chai';
import {JSDOM} from 'jsdom';
import canvasMock from '../mocks/canvas';
import canvasMockContext from '../mocks/canvasContext';

import circle from '../../src/js/shapes/circle'

describe('Circle object test', () => {  
  const dom = new JSDOM(`<!DOCTYPE html><body>${canvasMock}</body>`);
  var el = dom.window.document.getElementById('canvas-holder');
  canvasMockContext(dom);
  var gl = el.getContext("2d");

  it('Circle should exists as empty object', () => {
    var myCircle = circle([0,0],10, null, '#FFFFFF');

    assert.equal(typeof myCircle, 'object', 'the object exists');
    assert.equal(myCircle.lineColor,  null, 'a empty circle doesnt has a line corlor');
  });

  it('Circle should have a defined coordinates', () => {
    var myCircle = circle([0,0],10, gl, '#FFFFFF');

    assert.equal(myCircle.coordinates[0], 0, 'Circle has a defined X coordinates');
    assert.equal(myCircle.coordinates[1], 0, 'Circle has a defined Y coordinates');
  });
});
