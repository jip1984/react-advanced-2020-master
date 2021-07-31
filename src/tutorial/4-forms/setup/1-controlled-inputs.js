import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [peopel, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      console.log('submit the form')
    }
  }

  const handleInput = (e) => {
    setFirstName(e.target.value)
  }

  return <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='firstName'>Name :</label>
          <input type="text" id='firstName' name='firstName' value={firstName} onChange={handleInput} />
          <div className="form-control">
            <label htmlFor='email'>Email :</label>
            <input type="text" id='email' name='email' value={email} onChange={handleInput} />
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>Add Person</button>
      </form>
    </article>
  </>;
};

export default ControlledInputs;
