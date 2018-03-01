import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons'
import { Header, Sidebar, Content, Footer } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  justify-content: ${props => props.justify};
  background: lightgrey;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
`

class Example extends PureComponent {
  state = { justify: 'stretch' }

  render() {
    const { justify } = this.state
    return <Container justify={justify}>
      <Header>
        <div>justify-content:</div>
        <Buttons value={justify} options={['stretch', 'start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']} onChange={justify => this.setState({ justify })} />
      </Header>
      <Footer>footer</Footer>
      <Sidebar>sidebar</Sidebar>
      <Content>content</Content>
    </Container>
  }
}

export default Example
