import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header, Sidebar, Content, Footer } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";

  &.flipped {
    grid-template-areas:
      "footer footer footer"
      "content content sidebar"
      "header header header";
  }
`

class Example extends PureComponent {
  flip = () => this.container.classList.toggle('flipped')

  render() {
    return <Container innerRef={node => this.container = node}>
      <Header>
        <button onClick={this.flip} type='button'>flip</button>
      </Header>
      <Footer>footer</Footer>
      <Sidebar>sidebar</Sidebar>
      <Content>content</Content>
    </Container>
  }
}

export default Example
