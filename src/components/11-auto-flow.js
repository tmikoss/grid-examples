import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Block } from './01-layout'
import Buttons from '../Buttons'
import map from 'lodash/map'

const Container = styled.div`
  display: grid;
  height: 100%;
  background: lightgrey;
  grid-template-columns: repeat(auto-fill, 50px) [row-end];
  grid-template-rows: 100px repeat(auto-fill, 50px);
  grid-auto-flow: ${props => props.flow};
`

const Header = Block.extend`
  grid-column-start: 1;
  grid-column-end: row-end;
  grid-row: 1 / 2;
  background: #81D4FA;
`

const Cell = Block.extend`
  background: #FFF59D;
  border: 1px black solid;
  grid-column-start: ${props => props.block === 'center' ? 5 : null};
  grid-row-start: ${props => props.block === 'center' ? 5 : null};
  grid-column-end: span ${props => props.block === 'small' ? 1 : 2};
  grid-row-end: span ${props => props.block === 'small' ? 1 : 2};
`

class Example extends PureComponent {
  state = { flow: 'row', blocks: [] }

  render() {
    const { flow, blocks } = this.state
    return <Container flow={flow}>
      <Header>
        <div>grid-auto-flow:</div>
        <Buttons value={flow} options={['row', 'column', 'row dense', 'column dense']} onChange={flow => this.setState({ flow })} />
        <div>
          add <Buttons options={['big', 'small', 'center']} onChange={block => this.setState({ blocks: [...blocks, block] })} />
        </div>
        <div>
          <button onClick={() => this.setState({ blocks: [] })}>reset</button>
        </div>
      </Header>
      {map(blocks, (block, idx) => <Cell block={block} key={idx}>{idx}</Cell>)}
    </Container>
  }
}

export default Example
