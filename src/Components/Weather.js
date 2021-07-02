import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>

                <h1 >{this.props.desc}</h1>
                <h2 >{this.props.date}</h2>
            </div>
        )
    }
}

export default Weather
