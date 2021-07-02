const express = require('express');
const weather = require('./data/weather.json');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
app.use(cors());


app.get('/weather', (req, res) => {
    let lat = req.query.lat
    let lon = req.query.lon
    let searchQuery = req.query.searchQuery
    // console.log(lat)
    // console.log(lon)
    // console.log(searchQuery)
    // console.log(weather[0].data)

    let findData = () => {
        let dataLocal = weather.filter((city, idx) => {
            if (city.city_name.toLowerCase() === searchQuery.toLowerCase()) {
                // return (city.city_name.toLowerCase() === searchQuery.toLowerCase() && city.lat===Number(lat)&&city.lon===Number(lon))
                return true
            }else  {
        return console.log('"error": "Something went wrong."')
            }
        })
        // console.log(city.lat)
        // console.log(city.lon)

        // console.log(dataLocal)
        return dataLocal.map(item => {
            let newForcast = new ForeCast(item)
            console.log(newForcast)
            return newForcast

        }
        )

    };
    //   console.log(ForeCast)


    res.json(findData());
    // res.json(findData())

});

class ForeCast {
    constructor(weatherDate) {
        // console.log("hhhhhhhhhh",weatherDate)
        this.date = weatherDate.data[0].valid_date
        this.description = weatherDate.data[0].weather.description


    }
}
app.listen(PORT, () => console.log(PORT)) // kick start the express server to work
