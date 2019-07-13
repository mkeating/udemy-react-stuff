

const app = {
  'visibility': false
}

const appRoot = document.getElementById('app')

const toggleVisibility = () => {
  app.visibility = !app.visibility;
  console.log(app.visibility)
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>w/e</h1>

      <button onClick={toggleVisibility}> {app.visibility ? 'Hide' : 'Show'} </button>

      {app.visibility ? <p> Hi, here I am </p> : ''}

    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()
