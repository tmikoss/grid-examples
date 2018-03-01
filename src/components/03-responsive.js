import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";

  @media (max-width: 1000px) {
      grid-template-areas:
        "header content sidebar"
        "header footer sidebar";
  }
`

const Header = styled.div`
  grid-area: header;
  background: #81D4FA;
`

const Sidebar = styled.div`
  grid-area: sidebar;
  background: #FFF59D;
`

const Content = styled.div`
  grid-area: content;
  background: #A5D6A7;
`

const Footer = styled.div`
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