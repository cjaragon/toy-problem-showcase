import React, { Component } from 'react'

class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange = val =>{
        return this.setState({userInput: val})
    }

    palindate = (val) => {
        let forwards = val
        let backwards = val
        backwards = backwards.split('')
        backwards = backwards.reverse()
        backwards = backwards.join('')

        if (forwards === backwards) {
            this.setState({ palindrome: `True` })
        }else {
            this.setState({ palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Palindrome </h4>
                <input className='inputLine' 
                onChange={e => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' 
                onClick={ () => this.palindate(this.state.userInput) }> Palindate </button>
                <span className='resultsBox' > 
                Palindromed: { this.state.palindrome } </span>
            </div>
        )
    }
}

export default Palindrome