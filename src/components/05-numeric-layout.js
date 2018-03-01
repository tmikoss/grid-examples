import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Block } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
`

const Header = Block.extend`
  grid-column: 1 / span 3;
  grid-row: 1 / 2;
  background: #81D4FA;
`

const Sidebar = Block.extend`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: #FFF59D;
`

const Content = Block.extend`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background: #A5D6A7;
`

const Footer = Block.extend`
  grid-column: 1 / span 3;
  grid-row: 3 / 4;
  background: #FFAB91;
`

class Example extends PureComponent {
  render() {
    return <Container>
      <Header>header</Header>
      <Footer>footer</Footer>
      <Sidebar>sidebar</Sidebar>
      <Content>content</Content>
    </Container>
  }
}

export default Example
