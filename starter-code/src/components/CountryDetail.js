import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

class CountryDetails extends Component {

  render() {
    let country = countries.find(country => country.cca3 === this.props.countryCode);
    if (country === undefined) {
      return ('')
    } else {
      return (
        <div>
          <h1>{country.flag} {country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area} km
                    <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border) => {
                      let borderName = countries
                      .find(country => country.cca3 === border);
                      return <li style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}><Link to={border} >
                      {borderName.name.common}</Link>
                        </li>
                    })}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>
                  <ul>
                    {Object.values(country.languages).map((language) => {
                      return <li>{language}</li>
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default CountryDetails;
