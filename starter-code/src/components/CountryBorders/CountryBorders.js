import React from 'react';
import { Link } from 'react-router-dom';
import './countryBorders.css';

const CountryBorders = ({country, countries}) => {
  return (
    <tr>
      <td>Borders</td>
      <td>
        <ul>
          {country.borders.map((border) => {
            let borderName = countries.find(country => country.cca3 === border);
            return <li className="countryBorders-li">
              <Link to={border}>{borderName.flag} {borderName.name.common}</Link>
            </li>
          })}
        </ul>
      </td>
    </tr>
  );
};

export default CountryBorders;