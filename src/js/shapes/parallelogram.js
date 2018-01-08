import Shape from './shape';

const Parallelogram = function(_pointA, _pointB, _pointC, color, gl){
  var pointA = _pointA;
  var pointB = _pointB;
  var pointC = _pointC;
  var pointD; 

  const calculatePointD = function(){
    var _AB;  

    //pointD = C + BA
    _AB = [ pointA[0] - pointB[0],  pointA[1] - pointB[1]];
    
    pointD = [pointC[0] + _AB[0], pointC[1] + _AB[1]];
    
  };

  const drawLines = function(){
    this.setLineColor(color, gl);

    gl.moveTo(pointA[0],pointA[1]);
    gl.lineTo(pointB[0],pointB[1]);
    gl.stroke();

    gl.moveTo(pointB[0],pointB[1]);
    gl.lineTo(pointC[0],pointC[1]);
    gl.stroke();

    gl.moveTo(pointC[0],pointC[1]);
    gl.lineTo(pointD[0],pointD[1]);
    gl.stroke();

    gl.moveTo(pointD[0],pointD[1]);
    gl.lineTo(pointA[0],pointA[1]);
    gl.stroke();
  }
  
  const draw = function(){
    calculatePointD();

    return pointD;
  };

  var factory = Object.create(Shape());  
  factory.draw = draw;
  factory.drawLines = drawLines;
  
  return factory;
}

export default Parallelogram;