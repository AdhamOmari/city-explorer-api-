import React, { Component } from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'


export class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CityName: "",
            description: "",
            tempLow: "",
            tempHgi: "",
            date: "",
            display: false,
            erorrs: "",

        }

    }
    gitHandlerSubmit = (e) => {
        console.log(e.target.value);
        this.setState({
            CityName: e.target.value
        });


        console.log(e.target.value)
    }
    submitData = async (e) => {
        e.preventDefault();
        fetch('http://localhost:8000')
  .then(response => response.json())
  .then(axiosResponse => this.setState({
  
                CityName: axiosResponse.data[0].city_name,
                tempHgi: axiosResponse.data[0].lon,
                tempLow: axiosResponse.data[0].lat,
                date: axiosResponse.data[0].datetime,
                description: axiosResponse.data[0].description,

                display: true,
                alert: false


            })
            );
            console.log(this.axiosResponse)
    /        console.log(axiosResponse)

        // try {
        //     let axiosResponse = await axios.get(`http://localhost:8000`)
            // this.setState({
            //     CityName: axiosResponse.data[0].city_name,
            //     tempHgi: axiosResponse.data[0].lon,
            //     tempLow: axiosResponse.data[0].lat,
            //     date: axiosResponse.data[0].datetime,
            //     description: axiosResponse.data[0].description,

            //     display: true,
            //     alert: false


            // })
    //         console.log(this.axiosResponse)
    //         console.log(axiosResponse)

    //     }
    //     catch (masseg) {
    //         this.setState({
    //             masseg: 'enter valid',
    //             alert: true
    //         })
    //     }
     }
    render() {
        return (
            <div>
                <form onSubmit={this.submitData}>
                    <legend >add</legend>
                    <input name="" type="text" onChange={(e) => { this.gitHandlerSubmit(e) }}></input>
                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </form>
            </div>
        )
    }
}

export default Forecast
