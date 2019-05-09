import React from 'react';

const CountryArea = ({area}) => {
  return (
    <tr>
      <td>Area</td>
      <td>{area} km<sup>2</sup></td>
    </tr>
  );
};

export default CountryArea;