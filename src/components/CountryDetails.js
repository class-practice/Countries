import { Component } from 'react'
import './CountryDetails.css'
import countriesFromAPI from './../countries.json'
import Col from 'react-bootstrap/Col'



class CountryDetails extends Component {

    constructor () {
        super()
        this.state ={
            name: ' ',
            capital: ' ',
            area: ' ',
            borders: []
        }
    }

    componentDidMount() {
        this.findCountry()
    }

    findCountry() {
        const selectedCountryRef = this.props.match.params.cca3
        const selectedCountry = [...countriesFromAPI].find(elm => elm.cca3 === selectedCountryRef)
        this.setState({name: selectedCountry.name.common, capital: selectedCountry.capital, area: selectedCountry.area, borders: selectedCountry.borders})
    }

    render() {
            return (
                <>
                <Col>
                    <h1>{this.state.name}</h1>
                    <h3>Capital:</h3> <p>{this.state.capital}</p>
                    <h3>Area:</h3> <p>{this.state.area}m2</p>
                    <h3>Borders:</h3> <p>{this.state.borders}</p>
                </Col>
                </>
       )
    }
    
}
export default CountryDetails