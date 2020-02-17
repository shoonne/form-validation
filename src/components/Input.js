import React  from 'react';
 
const Input = (props) => {
    return (
        <div>
          <label htmlFor="inputLabel">{props.inputLabel}</label> 
            <input 
            value={props.inputValue} 
            type={props.type}  
            onChange={props.onChange} 
            required // UNCOMMENT THIS TO SEE MY ERROR MESSAGES
            maxLength={props.maxLength}
            noValidate         
              />
          <p className="errorMessage">{props.inputError}</p>
        </div>
    );
  }

export default Input;

