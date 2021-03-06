import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar content content"
    "footer  footer  footer";
`
export const Block = styled.div`
  text-align: center;
`

export const Header = Block.extend`
  grid-area: header;
  background: #81D4FA;
`

export const Sidebar = Block.extend`
  grid-area: sidebar;
  background: #FFF59D;
`

export const Content = Block.extend`
  grid-area: content;
  background: #A5D6A7;
`

export const Footer = Block.extend`
  grid-area: footer;
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
