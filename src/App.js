import React, { PureComponent } from 'react'
import map from 'lodash/map'
import styled, { injectGlobal }  from 'styled-components'

const examples = require.context('!raw-loader!./components', false, /\.js$/)

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 40%;
  grid-template-areas: "nav pre component";
`

const Navigation = styled.ul`
  grid-area: nav;
  height: 100vh;
  overflow: scroll;
`

const Source = styled.pre`
  grid-area: pre;
  height: 100vh;
  overflow: scroll;
  margin: 0;
`

const Preview = styled.div`
  grid-area: component;
  height: 100vh;
  overflow: scroll;
`

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

class App extends PureComponent {
  state = {
    module: null,
    source: ''
  }

  componentDidMount() {
    const current = window.location.pathname

    if (current.length > 1) {
      this.switchFile(`.${current}`)
    }
  }

  switchFile = (path) => {
    window.history.pushState({}, path, path)
    this.setState({ source: examples(path) })
    import(`./components/${path.substring(2)}`).then(module => this.setState({ module: module.default }))
  }

  render() {
    const { source, module: Component } = this.state

    const links = map(examples.keys(), path => <li onClick={this.switchFile.bind(this, path)} key={path}>{path}</li>)

    return <Container>
      <Navigation>{links}</Navigation>
      <Source>{source}</Source>
      <Preview>{Component && <Component />}</Preview>
    </Container>
  }
}

export default App
