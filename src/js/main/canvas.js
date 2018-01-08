import throttle from '../helpers/throttle';
import circle from '../shapes/circle';
import parallelogram from '../shapes/Parallelogram';


const Canvas = function(el, holder){
  var gl = el.getContext("2d");
  var circles = [];
  var enableDragAndDrop = false;
  
  const onResize = function(){
    el.width = holder.offsetWidth;
  };

  const onClick = function(e){
    drawCircles(e);

    if (circles.length === 3)
      drawParallelogram();
    
  }

  const drawParallelogram = function(){
    parallelogram(circles[0],circles[1], circles[2]).draw();
  }

  const drawCircles = function(e){

    if(circles.length < 3){
      var cicle = circle([e.offsetX, e.offsetY], 11, gl, '#e6e600').draw();
      circles.push(circles);  
    } else {
      enableDragAndDrop = true;
    }


  };

  const initElement = function(){
    el.height = 800;
    el.width = holder.offsetWidth;
    window.addEventListener('resize', throttle(onResize, 100));
    el.addEventListener('click', onClick);
  };

  initElement();

  return {
    
  }
}

export default Canvas;


