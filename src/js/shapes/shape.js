const Shape = function(){
  var lineColor;

  var validateHexa = function(inputString){
    var re = /[0-9A-Fa-f]{6}/g;
    if(re.test(inputString)) {
      return true
    } else {
      return false;
    }
  };

  var setLineColor = function(color, gl){
    if(validateHexa(color)){
      gl.strokeStyle = color;
    }
    else
      console.log('the color came empty');
  };


  return {
    lineColor: null, 
    setLineColor: setLineColor
  }
}

export default Shape;