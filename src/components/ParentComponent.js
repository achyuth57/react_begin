import React, { Component } from 'react'
import RegularComponent from './RegularComponent';
import PureComp from './PureComponent';
import MemoComponent from './MemoComponent';

class ParentComponent extends Component {
    constructor(){
        super()
        this.state = {
            name:'Achyuth'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Achyuth Kumar'
            })
        }, 2000)
    }
    render() {
        console.log('=========Parent Component Render=========');
        return (
            <div>
                Parent Component
                {/* <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
