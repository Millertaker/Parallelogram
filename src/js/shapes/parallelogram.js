import Shape from './shape';

const Parallelogram = function(_pointA, _pointB, _pointC, color, gl){
  var pointA = _pointA;
  var pointB = _pointB;
  var pointC = _pointC;
  var pointD; 
  var centerPoint;
  var area;

  const calculatePointD = function(){
    var _AB;  

    //pointD = C + BA
    _AB = [ pointA[0] - pointB[0],  pointA[1] - pointB[1]];
    
    pointD = [pointC[0] + _AB[0], pointC[1] + _AB[1]];
    
  };

  const calculateCenter = function(){

    if(pointD){
      //M = A + 1/2 (AC)

      var _midAC = [ 1/2 * (pointC[0] - pointA[0]), 1/2 * (pointC[1] - pointA[1]) ];
      centerPoint = [ Math.round(pointA[0] + _midAC[0]),  Math.round(pointA[1] + _midAC[1]) ];

      return centerPoint;
    } else {
      console.log('pointD is required');
      return null;
    }
  }

  const calculateArea = function(){
    if(pointD){
      //since we dont have h 
      //the parallelogram is can be devided in two triengles and calculate the area of each triangle 
      //the area will be calculated based in the semiperimeter formula https://en.wikipedia.org/wiki/Semiperimeter 
      
      //triangle distances A B C
      var _AB = calculateDistanceBetweenPoints(pointA[0], pointA[1], pointB[0], pointB[1]);
      var _BC = calculateDistanceBetweenPoints(pointB[0], pointB[1], pointC[0], pointC[1]);
      var _AC = calculateDistanceBetweenPoints(pointA[0], pointA[1], pointC[0], pointC[1]);

      var s = (_AB + _BC + _AC) / 2;
      area =  Math.sqrt( s * (s - _AB) * (s - _BC) * (s - _AC));
     
      return area * 2;
    } else {
      console.log('pointD is required');
      return null;
    }
  }

  const calculateDistanceBetweenPoints = function(XO, YO, X1, Y1){
    var distance = Math.sqrt( Math.pow(X1 - XO, 2) +  Math.pow(Y1 - YO, 2) );
    return distance;
  }

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
  factory.calculateCenter = calculateCenter;
  factory.calculateArea = calculateArea;
  
  return factory;
}

export default Parallelogram;