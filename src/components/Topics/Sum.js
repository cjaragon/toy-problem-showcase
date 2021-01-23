import React, { Component } from 'react'

class Sum extends Component {
    constructor(){
        super()

        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    handleOne = num => {
        return this.setState({ num1: parseInt(num) })
    }

    handleTwo = num => {
        return this.setState({ num2: parseInt(num) })
    }

    combine = (num1, num2) => {
        this.setState({sum: num1 + num2})
    }

    render(){
        return (
            <div className='puzzleBox sumPB'>
                <h4> Sum </h4>
                <input className='inputLine'
                onChange={ e => this.handleOne( e.target.value )}
                placeholder='First Number'/>
                <input className='inputLine'
                onChange={ e => this.handleTwo( e.target.value )}
                placeholder='Second Number'/>
                <button className='confirmationButton'
                onClick={ () => this.combine(this.state.num1, this.state.num2) }> ADD </button>
                <span className='resultsBox'> 
                solution: {this.state.sum} 
                </span>
            </div>
        )
    }
}

export default Sum