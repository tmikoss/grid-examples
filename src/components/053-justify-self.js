import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons'
import { Header, Block, Content, Footer } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  background: lightgrey;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
`

export const Sidebar = Block.extend`
  grid-area: sidebar;
  background: #FFF59D;
  justify-self: ${props => props.justify};
`

class Example extends PureComponent {
  state = { justify: 'stretch' }

  render() {
    const { justify } = this.state
    return <Container>
      <Header>header</Header>
      <Footer>footer</Footer>
      <Sidebar justify={justify}>
        <div>justify-self:</div>
        <Buttons value={justify} options={['stretch', 'start', 'end', 'center']} onChange={justify => this.setState({ justify })} />
      </Sidebar>
      <Content>content</Content>
    </Container>
  }
}

export default Example
