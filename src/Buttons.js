import React, { PureComponent } from 'react'
import map from 'lodash/map'

class Buttons extends PureComponent {
  render() {
    const { value, options, onChange } = this.props

    return map(options, option => {
      return <button type='button' onClick={() => onChange(option)} key={option}>
        {option === value ? '*' : null} {option}
      </button>
    })
  }
}

export default Buttons
