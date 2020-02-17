import React from 'react';
import {connect} from 'react-redux';
import {isValidPhoneNumber, isValidEmail, validateSSN} from '../validation/validation';
import {ssnErr, phoneErr, emailErr, countryErr} from '../validation/errorMessages';
import {
  onEmailInputChange, 
  onSSNChange, 
  onPhoneNumberChange, 
  setEmailError, 
  setPhoneError, 
  setSSNError, 
  setCountryError,
  fetchCountries} from '../actions';
  import Input from './Input';
  import '../css/App.css'
import CountryDropdown from './CountryDropdown';


class Form extends React.Component {
  componentDidMount() {
    // Load the data from local storage
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const ssn = localStorage.getItem('ssn');
    // Update the store 
    this.props.onPhoneNumberChange(phone);
    this.props.onEmailInputChange(email);
    this.props.onSSNChange(ssn);
    // Fetch countries
    this.props.fetchCountries();
  }

  // -- CHANGE HANDLERS --
  
  // Swedish SSN
  handleSSNChange = e => {
    this.props.onSSNChange(e.target.value);
    localStorage.setItem('ssn', e.target.value);

    if(validateSSN(e.target.value)){
      this.props.setSSNError('');
    } 
  }

  // Phone Number
  handlePhoneNumberChange = e => {
    this.props.onPhoneNumberChange(e.target.value)
    localStorage.setItem('phone', e.target.value);

    if(isValidPhoneNumber(e.target.value)){
      this.props.setPhoneError('')
    } 
  }

  // Email
  handleEmailChange = e => {
    this.props.onEmailInputChange(e.target.value);
    localStorage.setItem('email', e.target.value);
    if(isValidEmail(e.target.value)){
      this.props.setEmailError('');
    }
  }

  // -- SUBMIT --
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validateForm();
    if(isValid) {
      console.log('Success')

      // Clear the forms
      this.props.onEmailInputChange('');
      this.props.onPhoneNumberChange('');
      this.props.onSSNChange('');
      // Clear local storage 
      localStorage.clear();
    }  
  }


  // When user press submit button
  validateForm = () => {
    // Check if each fields are valid
    // If not, return false and set error. 
    const input = this.props.data.userInput;
    if(!validateSSN(input.socialSecurityNumber)){
      this.props.setSSNError(ssnErr);
      return false;
    }

    if(!isValidPhoneNumber(input.phoneNumber)){
      this.props.setPhoneError(phoneErr);
      return false;
    }

    if(!isValidEmail(input.email)){
      this.props.setEmailError(emailErr);
      return false;
    }

    if(input.country === 'Select' || input.country === '') {
      this.props.setCountryError(countryErr)
      return false;
    }
    return true;
  }

  render() {
    const inputData = this.props.data.userInput;
    return (
        <div>
          <img src="https://mb.cision.com/Public/15820/3007428/acf7f852e7fd3ef6_800x800ar.jpg" alt=""/>
          <h2>Register</h2>
            <form onSubmit={this.handleSubmit}>

            {/* SECURUTY NUMBER */}
            <Input 
            maxLength={13}
            type={'text'}
            inputLabel={"Social Security Number"} 
            inputValue={inputData.socialSecurityNumber ? inputData.socialSecurityNumber : ''}
            onChange={this.handleSSNChange}
            inputError={inputData.error.securityNumber}
            />

            {/* PHONE NUMBER */}
            <Input 
            maxLength={12}
            type={'text'}
            inputLabel={"Phone Number"} 
            inputValue={inputData.phoneNumber ? inputData.phoneNumber : ''}
            onChange={this.handlePhoneNumberChange}
            inputError={inputData.error.phone}
            />

            {/* EMAIL */}
            <Input 
            inputLabel={"Email"}
            type={'email'} // UNCOMMENT THIS TO SEE MY ERRORS
            inputValue={inputData.email ? inputData.email : ''}
            onChange={this.handleEmailChange}
            inputError={inputData.error.email}
            />
            
            {/* COUNTRY SELECT */}
            <label className="inputLabel" htmlFor="inputLabel">Select Country</label>
            <CountryDropdown/>
            <p className="errorMessage">{inputData.error.country}</p>

            <div className='submit'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    data: state 
  }
}

export default connect(mapStateToProps, 
  {  
  fetchCountries,
  onEmailInputChange, 
  onSSNChange, 
  onPhoneNumberChange,
  setEmailError,
  setPhoneError,
  setSSNError,
  setCountryError,
  })(Form);




