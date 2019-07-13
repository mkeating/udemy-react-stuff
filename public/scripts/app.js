'use strict';

var app = {
  'visibility': false
};

var appRoot = document.getElementById('app');

var toggleVisibility = function toggleVisibility() {
  app.visibility = !app.visibility;
  console.log(app.visibility);
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'w/e'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      ' ',
      app.visibility ? 'Hide' : 'Show',
      ' '
    ),
    app.visibility ? React.createElement(
      'p',
      null,
      ' Hi, here I am '
    ) : ''
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
