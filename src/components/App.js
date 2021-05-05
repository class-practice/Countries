import { Component } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RouteParams from './RouteParams'
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';
import NavBar from './NavBar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'


const App = () => {

      return (
        <>
        <Container>
        <div className="App">
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
        
          <Row>
            <Col>
              <CountriesList />
            </Col>
            
          </Row>
        </div>
        <Switch>
        <Route path="/country-details/:cca3" render={props => <CountryDetails {...props} /> } />
        </Switch>
        </Container>
        </>
      );
  }


export default App;
