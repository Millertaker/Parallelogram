const canvasContext = function(dom){
  dom.window.HTMLCanvasElement.prototype.getContext = () => {
    return {};
  };
}

export default canvasContext;