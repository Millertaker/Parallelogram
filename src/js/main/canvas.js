import throttle from '../helpers/throttle';

const Canvas = function(el, holder){
  var gl = el.getContext("2d");
  
  const onResize = function(){
    el.width = holder.offsetWidth;
  };

  const onClick = function(e){
    console.log(e.offsetX, e.offsetY);
  }


  const initElement = function(){
    
    el.height = 800;
    el.width = holder.offsetWidth;
    window.addEventListener('resize', throttle(onResize, 100));
    el.addEventListener('click', onClick);

    gl.moveTo(0,0);
    gl.lineTo(200,100);
    gl.stroke();
  };

  initElement();

  return {
    
  }
}

export default Canvas;


