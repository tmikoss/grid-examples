import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header, Footer, Sidebar, Content } from './01-layout'

const Container = styled.div`
  display: grid;
  grid-row-gap: ${props => `${props.row * 10}px`};
  grid-column-gap: ${props => `${props.column * 10}px`};
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  background: red;
`

class Example extends PureComponent {
  state = { row: 0, column: 0 }

  render() {
    const { row, column } = this.state

    return <Container row={row} column={column}>
      <Header>
        <input type='range' min='0' max='10'
          value={row}
          onChange={event => this.setState({ row: parseInt(event.target.value, 10) })} />
      </Header>
      <Sidebar>row={row} column={column}</Sidebar>
      <Content />
      <Footer>
        <input type='range' min='0' max='10'
          value={column}
          onChange={event => this.setState({ column: parseInt(event.target.value, 10) })} />
      </Footer>
    </Container>
  }
}

export default Example
