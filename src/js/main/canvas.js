import throttle from '../helpers/throttle';
import circle from '../shapes/circle';
import parallelogram from '../shapes/Parallelogram';


const Canvas = function(el, holder){
  var gl = el.getContext("2d");
  var circles = [];
  var circlesRadius = 11;
  var enableDragAndDrop = false;
  var isDragging = false;
  var resetBtn;
  var draggedCircle;
  
  const onResize = function(){
    el.width = holder.offsetWidth;
    gl = el.getContext("2d");
    circles = [];
    enableDragAndDrop = false;
  };

  const onClick = function(e){
    if(!isDragging){
      drawCircles(e);

      if (circles.length === 3)
        drawParallelogram();  
    }
    
    
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

  const onMouseDown = function(e){
    e.preventDefault();

    if(enableDragAndDrop){
      isDragging = isCircleClicked(e.offsetX, e.offsetY);;
    }
  }

  const isCircleClicked = function(xcoor, ycoor){
    for(var c in circles){
      if(pointInCircle(xcoor, ycoor, circles[c][0], circles[c][1], circlesRadius)){
        draggedCircle = c;

        return true;
      }
    }
  }

  const pointInCircle = function(x, y, cx, cy, radius) {
    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distancesquared <= radius * radius;
  }

  const onMouseUp = function(e){
    e.preventDefault();    

    if(enableDragAndDrop){
      isDragging = false;
    }
  }

  const onMouseMove = function(e){
    e.preventDefault();    

    if(isDragging){
      circles[draggedCircle] = [e.offsetX, e.offsetY];
      reDraw();
      
    }
  }

  const resetCanvas = function(e){
    e.preventDefault();

    circles = [];
    enableDragAndDrop = false;

    gl.clearRect(0, 0, el.width, el.height);
  }

  const drawCircles = function(e){

    if(circles.length < 3){
      circle([e.offsetX, e.offsetY], circlesRadius, gl, '#ff0000').draw();
      circles.push([e.offsetX, e.offsetY]);  
    } else {
      enableDragAndDrop = true;
    }

  };

  const reDraw = function(){
    gl.clearRect(0, 0, el.width, el.height);
    for(var i in circles){
      circle([circles[i][0], circles[i][1]], circlesRadius, gl, '#ff0000').draw();
    }
    drawParallelogram();
  }

  const initElement = function(){
    resetBtn = document.querySelector('a.reset');
    el.height = 800;
    el.width = holder.offsetWidth;
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', onMouseUp);
    resetBtn.addEventListener('click', resetCanvas);
    window.addEventListener('resize', throttle(onResize, 100));
    el.addEventListener('click', onClick);
  };

  initElement();

  return {
    
  }
}

export default Canvas;


