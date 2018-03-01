import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header, Sidebar, Content, Footer } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 2fr 100px;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
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
