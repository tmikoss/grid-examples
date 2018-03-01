import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons'
import { Header, Sidebar, Content, Footer } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  align-items: ${props => props.align};
  justify-items: ${props => props.justify};
  background: lightgrey;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
`

class Example extends PureComponent {
  state = { align: 'stretch', justify: 'stretch' }

  render() {
    const { align, justify } = this.state
    return <Container align={align} justify={justify}>
      <Header>
        <div>align-items:</div>
        <Buttons value={align} options={['stretch', 'start', 'end', 'center']} onChange={align => this.setState({ align })} />
      </Header>
      <Footer>
        <div>justify-items:</div>
        <Buttons value={justify} options={['stretch', 'start', 'end', 'center']} onChange={justify => this.setState({ justify })} />
      </Footer>
      <Sidebar>sidebar</Sidebar>
      <Content>content</Content>
    </Container>
  }
}

export default Example
