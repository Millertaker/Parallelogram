
const Form = function(config){
  let element, method, ajaxUrl, ajaxEnabled;
  let errorBaseMessage = "Form Component error: ";
  let id = config.document.DataGenerator.getNewGUID();

  const setupEventAjaxSubmit = function(cb){
    if(ajaxEnabled === "true"){
      element.onsubmit = function(e){
        e.preventDefault();

        sendData()
          .then((response) => {
            cb(e, response);
          })
          .catch((response) => {
            console.log(response);
          });
      };
    } else {
      console.log(errorBaseMessage, 'the form element should be setted as ajax fork')
    }
  };

  const sendData = function(){
    return new Promise ((resolve, reject) => {
      try{
        let request = new XMLHttpRequest();

        request.open(method, ajaxUrl);
        request.send();

        request.onload = (e) => {
          if (request.status >= 200 && request.status < 300) {
            resolve(request.response);
          } else {
            reject({
              status: request.status,
              statusText: response.statusText
            });
          }
        }
      } catch (error){
        reject({status: error.message});
      }
    });

  };

  const initElement = function(selector){
    config.element = config.document.querySelector(`.${config.selector}`);

    config.element = element = config.element;
    config.ajaxUrl = ajaxUrl = config.ajaxUrl = element.getAttribute("ajax-url");
    config.method = method = config.method = element.getAttribute("method");
    config.ajaxEnabled = ajaxEnabled = config.ajaxEnabled = element.getAttribute("ajax-enabled");
  };

  initElement(config.selector, config.document);

  return {
    config,
    element,
    setupEventAjaxSubmit
  }
}

export default Form;


