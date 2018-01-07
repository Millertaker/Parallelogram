import canvas from './main/canvas';

(function(){
  var el = document.getElementById('canvas-holder');
  var holder = el.closest('.canvas-wrapper'); 
  canvas(el, holder);
})();

