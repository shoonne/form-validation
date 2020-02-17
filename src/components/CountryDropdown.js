import React, { Component } from 'react';
import { connect } from 'react-redux';
import {onCountrySelect, setCountryError} from '../actions';

class CountryDropdown extends Component {

  // Change handler for selectbox
  handleCountrySelect = e => {
    this.props.onCountrySelect(e.target.value);
    localStorage.setItem('country', e.target.value);

    // Removes the error after you have selected a country
    if(e.target.value !== 'Select' || e.target.value !== ''){
      this.props.setCountryError('');
    }
  }

  render() {
    const countryData = this.props.data.countryData.data;
    return (
      <div className="selectdiv">
          <select className="select"   onChange={this.handleCountrySelect}>
          <option value="Select">Select country</option>
          
          {/* Check if data has been fetched */}
          {countryData ? 
            countryData.map((country, i) => {
              return <option  key={i} value={country.name}>{country.name}</option>
            }) : null}
          
          </select>
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
      data: state 
    }
  }

export default connect(mapStateToProps, {onCountrySelect, setCountryError})(CountryDropdown)
