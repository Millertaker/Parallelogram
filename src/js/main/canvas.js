import throttle from '../helpers/throttle';

const Canvas = function(el, holder){
  var gl = el.getContext("webgl");
  const onResize = function(){
    el.width = holder.offsetWidth;
    console.log(el.width)
  };

  const initElement = function(){
    
    el.height = 800;
    el.width = holder.offsetWidth;
    window.addEventListener('resize', throttle(onResize, 100))
  };

  initElement();

  return {
    
  }
}

export default Canvas;


