import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from '../CountryDetail/CountryDetail';

const DetailContainer = ({countries}) => {
  return (
    <div className="col-7">
      <Switch>
        {countries.map((country) => {
          return <Route
            path={`/${country.cca3}`}
            render={() => <CountryDetails countryCode={country.cca3} />}
          />
        })}
      </Switch>
    </div>
  );
};

export default DetailContainer;
