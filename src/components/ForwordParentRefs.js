import React, { Component } from 'react'
import ForwordingRef from './ForwordingRef';

class ForwordParentRefs extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
      }
      clickHnadler = () =>{
          this.inputRef.current.focus()
      }
    render() {
        return (
            <div>
               <ForwordingRef ref={this.inputRef} />
               <button onClick={this.clickHnadler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwordParentRefs
