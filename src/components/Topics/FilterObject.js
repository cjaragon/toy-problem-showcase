import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            gamers: [
                {
                    name: 'Jumbo Jim',
                    faveGame: 'Frogger',
                    age: 45
                },
                {
                    name: 'Sarah Shu',
                    faveGame: 'Super Mario 64',
                    age: 36
                },
                {
                    name: 'Jack Daniels',
                    faveGame: 'Tomb Raider',
                    age: 26
                }
            ],
            filteredGamers: [],
            userInput: ''
        }
    }

    handleChange = (val) => {
        this.setState({ userInput: val })
    }

    filterGamers = (prop) => {
        let gamers = this.state.gamers
        let filteredGamers = []

        for (let i = 0; i < gamers.length; i++) {
            if (gamers[i].hasOwnProperty(prop)) {
                filteredGamers.push(gamers[i])
            }
        }

        this.setState({ filteredGamers: filteredGamers })

    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object </h4>
                <span className='puzzleText'> Gamers: {JSON.stringify(this.state.gamers, null, 10)} </span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onCLick={() => this.filterGamers(this.state.userInput)} > Filter </button>
                <span className='resultsBox filterObjectRB'> Filtered Gamers: {JSON.stringify(this.state.filteredGamers, null, 10)} </span>
            </div>
        )
    }
}

export default FilterObject