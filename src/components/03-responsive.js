import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header, Sidebar, Content, Footer } from './01-layout'

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
