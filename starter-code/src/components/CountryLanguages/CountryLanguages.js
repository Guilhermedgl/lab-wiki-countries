import React from 'react';

const CountryLanguage = ({country}) => {
  return (
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
  );
};

export default CountryLanguage;