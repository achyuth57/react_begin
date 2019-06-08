import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setRef = element =>{
            this.cbRef = element;
        }

    }
    componentDidMount() {
        if(this.cbRef) this.cbRef.focus()
        //this.inputRef.current.focus()
    }
    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                <input ref={this.setRef} type='text' />
                <input ref={this.inputRef} type='text' />
                <button onClick={this.clickHandler}>
                    Click
               </button>
            </div>
        )
    }
}

export default Refs
