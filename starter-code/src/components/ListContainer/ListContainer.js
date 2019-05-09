import React from 'react'
import { Link } from 'react-router-dom'

const ListContainer = ({countries}) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
      {countries.map((country) => {
        return <Link to={country.cca3} className="list-group-item list-group-item-action">
            {country.flag} {country.name.common}
          </Link>
      })}
      </div>
    </div>
  );
};

export default ListContainer;