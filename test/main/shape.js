import common from '../common';
const options = common.options;
const assert = common.assert;
import chai from 'chai';
import {JSDOM} from 'jsdom';
import canvasMock from '../mocks/canvas';
import canvasMockContext from '../mocks/canvasContext';

import shape from '../../src/js/shapes/shape'

describe('Shape object test', () => {  
  it('Should exists as empty object', () => {
    var myShape = shape();

    assert.equal(typeof myShape, 'object', 'the object exists');
    assert.equal(myShape.lineColor,  null, 'a empty shape doesnt has a line corlor');
  });

   it('The shape color line should be #FFFFFF', () => {
    const dom = new JSDOM(`<!DOCTYPE html><body>${canvasMock}</body>`);
    var el = dom.window.document.getElementById('canvas-holder');
    canvasMockContext(dom);
    var gl = el.getContext("2d");

    var myShape = shape();
    shape().setLineColor('#FFFFFF', gl);

    assert.equal(myShape.lineColor,  '#FFFFFF', 'the line color is #FFFFFF');
  });

   it('The shape color line should be null if the setLineColor is not a well formated hexa', () => {
    const dom = new JSDOM(`<!DOCTYPE html><body>${canvasMock}</body>`);
    var el = dom.window.document.getElementById('canvas-holder');
    canvasMockContext(dom);
    var gl = el.getContext("2d");

    var myShape = shape();
    shape().setLineColor('myColor', gl);

    assert.equal(myShape.lineColor,  null, 'the input color doesnt has the correct hexa format');
  });

});

