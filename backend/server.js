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
    let findData = () => {
        let city = weather.find((city, idx) => {
            return (city.city_name.toLowerCase() === searchQuery.toLowerCase() && city.lat===Number(lat)&&city.lon===Number(lon))

        })
        console.log(city.lat)
        console.log(city.lon)


        return city.data.map(item => {
            return new ForeCast(item)
        }
        )

    };     console.log(ForeCast)

    
    res.json(findData());
    // res.json(findData())

});

class ForeCast {
    constructor(weatherDate) {
        this.date = weatherDate.valid_date
        this.description = weatherDate.weather.description
    }
}
app.listen(PORT, () => console.log("3000")) // kick start the express server to work
