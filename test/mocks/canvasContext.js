const canvasContext = function(dom){
  dom.window.HTMLCanvasElement.prototype.getContext = () => {
    return {
      beginPath: function(){return null},
      arc: function(){return null},
      stroke: function(){return null}
    };
  };
}

export default canvasContext;