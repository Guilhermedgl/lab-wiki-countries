import React from 'react'
import './capital.css'

const Capital = ({capital}) => {
  return (
    <tr>
      <td className='capital-width'>Capital</td>
      <td>{capital}</td>
    </tr>
  );
};

export default Capital;
