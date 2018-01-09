import throttle from '../helpers/throttle';
import circle from '../shapes/circle';
import parallelogram from '../shapes/Parallelogram';


const Canvas = function(el, holder){
  var gl = el.getContext("2d");
  var circles = [];
  var enableDragAndDrop = false;
  var resetBtn;
  
  const onResize = function(){
    el.width = holder.offsetWidth;
    gl = el.getContext("2d");
    circles = [];
    enableDragAndDrop = false;
  };

  const onClick = function(e){
    drawCircles(e);

    if (circles.length === 3)
      drawParallelogram();
    
  }

  const drawParallelogram = function(){
    var myParallelogram = parallelogram(circles[0],circles[1], circles[2], '#0033cc', gl);
    var lastPoint = myParallelogram.draw();

    circle(lastPoint, 1, gl, '#ff0000').draw();

    myParallelogram.drawLines();
    var centerPoint = myParallelogram.calculateCenter();
    var paralelogramArea = myParallelogram.calculateArea();

    circle(centerPoint, null, gl, '#ffcc00').drawBasedOnArea(paralelogramArea);

  }

  const resetCanvas = function(e){
    e.preventDefault();

    gl = el.getContext("2d");
    circles = [];
    enableDragAndDrop = false;
  }

  const drawCircles = function(e){

    if(circles.length < 3){
      circle([e.offsetX, e.offsetY], 11, gl, '#ff0000').draw();
      circles.push([e.offsetX, e.offsetY]);  
    } else {
      enableDragAndDrop = true;
    }


  };

  const initElement = function(){
    resetBtn = document.querySelector('a.reset');
    el.height = 800;
    el.width = holder.offsetWidth;
    resetBtn.addEventListener('click', resetCanvas);
    window.addEventListener('resize', throttle(onResize, 100));
    el.addEventListener('click', onClick);
  };

  initElement();

  return {
    
  }
}

export default Canvas;


