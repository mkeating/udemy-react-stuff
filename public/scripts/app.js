'use strict';

console.log('app.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Some app.',
  options: []
};

var appRoot = document.getElementById('app');

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();

  var option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
  }

  renderApp();
};

/*
let count = 0;
const addOne = () => {
  count++
  renderApp()
}

const takeOne = () => {
  count--
  renderApp()
}

const reset = () => {
  count = 0
  renderApp()
}

*/

var clearList = function clearList() {

  app.options = [];
  renderApp();
};

var makeDecision = function makeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  console.log(randomNum);
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
      'p',
      null,
      'Here are your options'
    ) : React.createElement(
      'p',
      null,
      ' No options found '
    ),
    React.createElement(
      'button',
      { onClick: makeDecision },
      'What should I do? '
    ),
    React.createElement(
      'button',
      { onClick: clearList },
      ' Remove All '
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        ' Add Option '
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
