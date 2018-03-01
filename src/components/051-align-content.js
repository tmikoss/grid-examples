import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons'
import { Header, Sidebar, Content, Footer } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  align-content: ${props => props.align};
  background: lightgrey;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
`

class Example extends PureComponent {
  state = { align: 'stretch' }

  render() {
    const { align } = this.state
    return <Container align={align}>
      <Header>
        <div>align-content:</div>
        <Buttons value={align} options={['stretch', 'start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']} onChange={align => this.setState({ align })} />
      </Header>
      <Footer>footer</Footer>
      <Sidebar>sidebar</Sidebar>
      <Content>content</Content>
    </Container>
  }
}

export default Example
