import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  // To track the form data or to save our form data 
  //In react by using useState Hook we can save out form data in the form of object
  //here we'll simply try todo the things by using only one useState hook not by defininig diff diff 
  //useState hook

  const [formData, setFormData] = useState({ firstName: "", lastName: "", Email: "", Comments: "", check: true, radioInput: "", favCar: "" });
  function changeHandler(events) {
    const { name, type, value, checked } = events.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  function submitHandler(events) {
    events.preventDefault();
    console.log("My Form Data is", formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your FirstName" name="firstName" onChange={changeHandler} value={formData.firstName} />
        <input type="text" placeholder="Enter your LastName" name="lastName" onChange={changeHandler} value={formData.lastName} />
        <input type="text" placeholder="Enter your Email" name="Email" onChange={changeHandler} value={formData.Email} />
        <textarea placeholder='Comments' name="Comments" onChange={changeHandler} value={formData.Comments} />
        <input type='checkbox' name="check" onChange={changeHandler} checked={formData.check} />
        <label htmlFor='onlineModeRadio' />onlineModeRadio
        <input type="radio" name="radioInput" onChange={changeHandler} value="onlineMode" checked={formData.radioInput === "onlineMode"} />
        <label htmlFor='offlineModeRadio' />offlineModeRadio
        <input type="radio" name="radioInput" onChange={changeHandler} value="offlineMode" checked={formData.radioInput === "offlineMode"} />
        <select name="favCar" onChange={changeHandler} value={formData.favCar}>
          <option value="Scorpio">Scorpio</option>
          <option value="bmw">bmw</option>
          <option value="mercidis">mercidis</option>
          <option value="thar">thar</option>
          <option value="audi">audi</option>
        </select>
        {/* <input type='submit' value='Submit'/> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
