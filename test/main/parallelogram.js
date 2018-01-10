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

  it('parallelogram should 4 coordinates', () => {
    var myParallelogram = parallelogram( [ 705 , 352 ] , [ 792 , 218 ],  [ 947 , 224 ] , '#FFFFFF', gl);
    var pointD = myParallelogram.draw();

    assert.equal(myParallelogram.pointA[0], 705, 'PointA x exists');
    assert.equal(myParallelogram.pointA[1], 352, 'PointA y exists');

    assert.equal(myParallelogram.pointB[0], 792, 'PointB x exists');
    assert.equal(myParallelogram.pointB[1], 218, 'PointB y exists');

    assert.equal(myParallelogram.pointC[0], 947, 'PointC x exists');
    assert.equal(myParallelogram.pointC[1], 224, 'PointC y exists');

    assert.equal(pointD[0], 860, 'PointD x exists');
    assert.equal(pointD[1], 358, 'PointD y exists');
    
  });

  it('parallelogram should have area', () => {
    var myParallelogram = parallelogram( [ 705 , 352 ] , [ 792 , 218 ],  [ 947 , 224 ] , '#FFFFFF', gl);
    var pointD = myParallelogram.draw();
    myParallelogram.pointD = pointD;
    var area = myParallelogram.calculateArea();
  
    assert.equal(Math.round(area), 21292, 'The parallelogram area exists');  
  });
  
});
