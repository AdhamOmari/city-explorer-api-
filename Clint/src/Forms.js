import React, { Component } from 'react'
import { Form, Button, Image } from 'react-bootstrap'
import Apifiled from './Apifiled';
import axios from 'axios'
import Weather from './Components/Weather';
export class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            latitude: "",
            longitude: "",
            display: false,
            erorrs: "",
            alert: false,
            masseg: "",
            weatherData: [],
            alerte:false,
            massege:''
        }

    }
    ghngeHandlerSubmit = (e) => {
        console.log(e.target.value)
        this.setState({
            displayName: e.target.value

        });
        console.log(e.target.value)

    }

    submitData = async (e) => {
        e.preventDefault();

        try {
            console.log(process.env.REACT_APP_BACKEND_URL)
            console.log(this.state.latitude)
            let axiosResponse = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.c29ec7745248a3f12771c0a5c3f3fd9e&q=${this.state.displayName}&format=json`)
            console.log(axiosResponse)
            this.setState({
                longitude: axiosResponse.data[0].lon,
                latitude: axiosResponse.data[0].lat,
                display: true,
                alert: false,

            })
            console.log(this.state.displayName)



        }

        catch (masseg) {
            this.setState({
                masseg: 'enter valid',
                alert: true,



            })
            // if (this.state.displayName === "Amman" || this.state.displayName === "Seattle" || this.state.displayName === "Paris") {
            //     return this.setState({
            //         alerte: true,
            //         massege: 'please enter valid city name'
            //     })
            // }
        }
        try {
            let axiosWeatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&searchQuery=${this.state.displayName}`)
            this.setState({
                weatherData: axiosWeatherData.data,
                alerte: false,
            })
        }
        catch (massege) {
            this.setState({

                alerte: true,
                massege: 'please enter valid city name',
                display: false
            })
        }

    }

        render() {
            return (
                <>
                    <Apifiled alert={this.state.alert} masseg={this.state.masseg} alerte={this.state.alerte}
                        massege={this.state.massege} />
                    <Form onSubmit={this.submitData}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> City Name </Form.Label>
                            <Form.Control type="text" placeholder="City Name" onChange={(e) => { this.ghngeHandlerSubmit(e) }} size={'sm'}
                            />

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Explore!
                        </Button>
                    </Form>
                    {this.state.display &&
                        <div>
                            <p>
                                {this.state.displayName}
                                {this.state.latitude}
                                {this.state.longitude}


                            </p>
                            <Image alt="" src={`https://maps.locationiq.com/v3/staticmap?key=pk.c29ec7745248a3f12771c0a5c3f3fd9e&center=${this.state.latitude},${this.state.longitude}&zoom=10`} rounded />

                            <span>
                            </span>

                        </div>

                    }
                    {this.state.weatherData.map(weatherData => {
                        return <Weather key="{item}" desc={weatherData.description}
                            date={weatherData.date} />
                    })
                    }
                </>
            )
        }
    }

    export default Forms

