window.onkeydown = function(e){
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
    e.preventDefault();
    app.services.runProject();
  }
};

window.onload = function() {
  var placeholder = document.body.querySelector('#placeholder');
  if (placeholder) {
    placeholder.remove();
  }
};

window.onresize = app.util.resize.throttler;

window.onpopstate = function(event) {
  if (event.state) {
    app.services.changeModule(event.state.module, event.state.part).then(app.services.runProject);
  } else {
    var external = external = app.util.getParam('external');
    app.selectList.children[0].selected = true;
    if (external) {
      app.services.loadModule(external);
    } else {
      app.services.updateCategory();
      app.services.showWelcomeMessage();
    }
  }
};
