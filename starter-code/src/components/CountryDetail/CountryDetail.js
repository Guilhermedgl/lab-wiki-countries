import React, { Component } from 'react'
import countries from '../../countries.json'
import TitleAndFlag from '../TitleAndFlag/TitleAndFlag.js';
import Capital from '../Capital/Capital';
import CountryArea from '../CountryArea/CountryArea.js';
import CountryBorders from '../CountryBorders/CountryBorders.js';
import CountryLanguage from '../CountryLanguages/CountryLanguages.js';

class CountryDetails extends Component {
  render() {
    let country = countries.find(country => country.cca3 === this.props.countryCode);
    if (country === undefined) {
      return ('')
    } else {
      return (
        <div>
          <TitleAndFlag flag={country.flag} name={country.name.common}/>
          <table className="table">
            <thead></thead>
            <tbody>
              <Capital capital={country.capital} />
              <CountryArea area={country.area}/>
              <CountryBorders country={country} countries={countries}/>
              <CountryLanguage country={country}/>
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default CountryDetails;
