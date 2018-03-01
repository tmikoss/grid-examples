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
  align-self: ${props => props.align};
`

class Example extends PureComponent {
  state = { align: 'stretch' }

  render() {
    const { align } = this.state
    return <Container>
      <Header>header</Header>
      <Footer>footer</Footer>
      <Sidebar align={align}>
        <div>align-self:</div>
        <Buttons value={align} options={['stretch', 'start', 'end', 'center']} onChange={align => this.setState({ align })} />
      </Sidebar>
      <Content>content</Content>
    </Container>
  }
}

export default Example
