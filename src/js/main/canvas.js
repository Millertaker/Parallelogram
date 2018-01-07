
const Canvas = function(el, holder){
  var gl = el.getContext("webgl");

  const initElement = function(){
    
    el.height = 800;
    el.width = holder.offsetWidth;
    
  };

  
  initElement();

  return {
    
  }
}

export default Canvas;


