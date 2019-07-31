
const app = {
  title: 'Indecision App',
  subtitle: 'Some app.',
  options: []
}

const appRoot = document.getElementById('app')

const handleSubmit = (event) => {
  event.preventDefault()

  const option = event.target.elements.option.value

  if(option){
    app.options.push(option)
    event.target.elements.option.value = ''
  }
  renderApp();
}

const clearList = () => {
  app.options = []
  renderApp()

}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  console.log(randomNum)
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {(app.options.length > 0) ? <p>Here are your options</p> : <p> No options found </p>}

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do? </button>
      <button onClick={clearList}> Remove All </button>
      <p>{app.options.length}</p>
      <ol>
        {
          app.options.map((option) => {
            return (<li key={option}>{option}</li>)
          })
        }
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" name="option" />
        <button> Add Option </button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()
