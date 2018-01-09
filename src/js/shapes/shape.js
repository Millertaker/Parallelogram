const Shape = function(){
  var lineColor = null;

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
     this.lineColor = color;
      gl.strokeStyle = color;
    }
    else
      console.log('Message: the color came with an invalid value');
  };


  return {
    lineColor: lineColor, 
    setLineColor: setLineColor
  }
}

export default Shape;