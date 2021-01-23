import React, { Component } from 'react'

class FilterString extends Component{
    constructor() {
        super()

        this.state = {
            unFilteredArray: ['Welcome to the ThunderDome', 'Why am I here?', 'Please help me!', 'I no longer want to exist!'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange = (val) => {
        this.setState({ userInput: val })
    }

    filterString = (input) => {
        let string = this.state.unFilteredArray
        let filteredStrings = []

        for (let i = 0; i < string.length; i++) {
            if (string[i].includes(input)) {
                filteredStrings.push(string[i])
            }
        }

        this.setState({filteredArray: filteredStrings})
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Filter String </h4>
                <span className='puzzleText'> Strings: { JSON.stringify(this.state.unFilteredArray)} </span>
                <input className='inputLine' onChange={ (e) => this.handleChange( e.target.value ) } />
                <button className ='confirmationButton' onCLick={ () => this.filterString(this.state.userInput)} > Filter </button>
                <span className='resultsBox filterStringRB'> Filtered: {JSON.stringify(this.state.filteredArray)} </span>
            </div>
        )
    }
}

export default FilterString