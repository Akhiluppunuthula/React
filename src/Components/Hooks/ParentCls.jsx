import React, { Component } from 'react'
import ChildFn from './ChildFn'


export class ParentCls extends Component {
  render() {
    const hello = "hi"
    return (
        <div>
            <ChildFn text={hello} />
        </div>
    )
  }
}

export default ParentCls

