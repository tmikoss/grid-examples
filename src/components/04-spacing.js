import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header, Footer, Sidebar, Content } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-row-gap: ${props => `${props.row}em`};
  grid-column-gap: ${props => `${props.column}em`};
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  background: lightgrey;
`

class Example extends PureComponent {
  state = { row: 0, column: 0 }

  render() {
    const { row, column } = this.state

    return <Container row={row} column={column}>
      <Header>
        <div>grid-row-gap: {row}</div>
        <input type='range' min='0' max='9'
          value={row}
          onChange={event => this.setState({ row: parseInt(event.target.value, 10) })} />
      </Header>
      <Sidebar>sidebar</Sidebar>
      <Content>content</Content>
      <Footer>
        <div>grid-column-gap: {column}</div>
        <input type='range' min='0' max='9'
          value={column}
          onChange={event => this.setState({ column: parseInt(event.target.value, 10) })} />
      </Footer>
    </Container>
  }
}

export default Example
