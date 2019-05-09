import React, { Component } from 'react'
import countries from '../../countries.json'
import ListContainer from '../ListContainer/ListContainer';
import DetailContainer from '../DetailContainer/DetailContainer';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ListContainer countries={countries}/>
          <DetailContainer countries={countries} />
        </div>
      </div>
    );
  };
};

export default HomePage;
