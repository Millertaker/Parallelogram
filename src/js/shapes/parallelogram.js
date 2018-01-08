import Shape from './shape';

const Parallelogram = function(_pointA, _pointB, _pointC, gl){
  var pointA = _pointA;
  var pointB = _pointB;
  var pointC = _pointC;
  var pointD; 

  const calculatePointD = function(){
    var xCoor;
    var yCoor;
    var _AB;  

    //pointD = C + BA
    _AB = [ pointB[0] - pointA[0],  pointB[1] - pointA[1]];
    console.log(_AB);
  };
  
  const draw = function(){
    calculatePointD();
  };

  var factory = Object.create(Shape());  
  factory.draw = draw;
  
  return factory;
}

export default Parallelogram;