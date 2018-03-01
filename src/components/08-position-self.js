import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons'
import { Header, Block, Sidebar, Footer } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  background: lightgrey;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
`

export const Content = Block.extend`
  grid-area: content;
  background: #A5D6A7;
  align-self: ${props => props.align};
  justify-self: ${props => props.justify};
`

class Example extends PureComponent {
  state = { align: 'stretch', justify: 'stretch' }

  render() {
    const { align, justify } = this.state
    return <Container>
      <Header>header</Header>
      <Footer>footer</Footer>
      <Sidebar>content</Sidebar>
      <Content align={align} justify={justify}>
        <div>align-self:</div>
        <Buttons value={align} options={['stretch', 'start', 'end', 'center']} onChange={align => this.setState({ align })} />
        <div>justify-self:</div>
        <Buttons value={justify} options={['stretch', 'start', 'end', 'center']} onChange={justify => this.setState({ justify })} />
      </Content>
    </Container>
  }
}

export default Example
