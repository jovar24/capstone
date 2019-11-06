import React from 'react'
import Weather from "../pages/weather"
import Form from '../pages/form';
import "bootstrap/dist/css/bootstrap.min.css"


const API_key = "34f806ae69507a768bd2ad437df648e2"

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            Farenheit: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
            error: false,
        }


        this.weathericon = {
            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi--sleet",
            Rain: "wi-storm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog"
        }
    }

    calFaren = (temp) => {
        let cell = Math.floor((temp - 273.15) * 9 / 5 + 32)
        return cell
    }

    getWeatherIcon = (icons, rangeID) => {
        switch (true) {
            case rangeID >= 200 && rangeID <= 232:
                this.setState({ icon: this.weathericon.Thunderstorm })
                break;
            case rangeID >= 300 && rangeID <= 321:
                this.setState({ icon: this.weathericon.Drizzle })
                break;
            case rangeID >= 500 && rangeID <= 531:
                this.setState({ icon: this.weathericon.Rain })
                break;
            case rangeID >= 600 && rangeID <= 622:
                this.setState({ icon: this.weathericon.Snow })
                break;
            case rangeID >= 701 && rangeID <= 781:
                this.setState({ icon: this.weathericon.Atmosphere })
                break;
            case rangeID === 800:
                this.setState({ icon: this.weathericon.Clear })
                break;
            case rangeID >= 801 && rangeID <= 804:
                this.setState({ icon: this.weathericon.Clouds })
                break;
            default:
                this.setState({ icon: this.weathericon.Clouds })
        }
    }


    getWeather = async (event) => {

        event.preventDefault()

        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;


        if (city && country) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_key}`)

            const response = await api_call.json()

            console.log(response)

            this.setState({
                city: `${response.name},${response.sys.country}`,
                Farenheit: this.calFaren(response.main.temp),
                temp_max: this.calFaren(response.main.temp_max),
                temp_min: this.calFaren(response.main.temp_min),
                description: response.weather[0].description,
                error: false,

            })
            this.getWeatherIcon(this.weathericon, response.weather[0].id)

        } else {
            this.setState({ error: true })

        }

    }
    render() {
        return (
            <div className="HomeContainer" >
                <Form loadWeather={this.getWeather} error={this.state.error} />
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    tempFarenheit={this.state.Farenheit}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    description={this.state.description}
                    weathericon={this.state.icon}
                />
            </div>
        )
    }
}


export default Home