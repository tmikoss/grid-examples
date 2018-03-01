import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
`

export const Header = styled.div`
  grid-area: header;
  background: #81D4FA;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
  background: #FFF59D;
`

export const Content = styled.div`
  grid-area: content;
  background: #A5D6A7;
`

export const Footer = styled.div`
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
