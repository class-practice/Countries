import { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './CountriesList.css'
import countriesFromAPI from './../countries.json'
import { Link } from 'react-router-dom'
import RouteParams from './RouteParams'

class CountriesList extends Component {

  constructor() {
    super()
    this.state = {
      countries: countriesFromAPI
    }
  }

render() {
            return (
                <>
                <ListGroup>
                    
                    {
                     this.state.countries.map((elm) => <ListGroup.Item key={elm.cca3}><img src={elm.flag} /><Link to={`/country-details/${elm.cca3}`}>{elm.name.common}</Link> </ListGroup.Item>)
                    }
                   
                </ListGroup>
                </>
            )
        }
}
export default CountriesList