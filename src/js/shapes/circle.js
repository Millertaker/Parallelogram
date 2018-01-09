import Shape from './shape';

const Circle = function(_coordinates, _radius, gl, color){
  var coordinates = _coordinates;
  var radius = _radius;

  const draw = function(){
    gl.beginPath();
    gl.arc(_coordinates[0],_coordinates[1],_radius,0,2*Math.PI);
    this.setLineColor(color, gl);
    gl.stroke();
  }

  const drawBasedOnArea = function(area){
    gl.beginPath();
    this.radius = Math.round( Math.sqrt ( area / Math.PI ));

    gl.arc(_coordinates[0],_coordinates[1], this.radius ,0,2*Math.PI);
    this.setLineColor(color, gl);
    gl.stroke();
  }

  var factory = Object.create(Shape());
  factory.draw = draw;
  factory.drawBasedOnArea = drawBasedOnArea;
  factory.coordinates = coordinates;
  factory.radius = radius;

  return factory;
}

export default Circle;