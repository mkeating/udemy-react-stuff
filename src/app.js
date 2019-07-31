console.log('app.js is running')

class App extends React.Component {
    render() {

    const options = ['one', 'two', 'three'];
    return (
      <div>
        <Header />
        <Action />
        <Options options={options}/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <p> Header!</p>
      </div>

    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        Action!
      </div>
    )
  }
}

// options
class Options extends React.Component {
  render() {
    return (
      <div>
        Options!
        {this.props.options.map((option) => <Option key={option} text={option} />)}

      </div>
    )
  }
}

class Option extends React.Component {
  render(){
    return(
      <div>
        {this.props.text}
      </div>
    )
  }
}

// addoption

class AddOption extends React.Component {
  render() {
    return (
      <div>
        Add Option!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
