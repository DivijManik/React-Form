import { useState } from 'react';
import './App.css';

function App() {

  // Set Name
  const [name, setName] = useState("");
  // Set Age
  const [age, setAge] = useState();
  // Set File
  const [file, setFile] = useState("");

  // Function called on submit button
  function OnSubmitClicked() {

    if (name === "" || name == null) {
      alert("Name cannot be empty")
    }
    else if (name.length < 3) {
      alert("Name should contain atleast 3 letters")
    }
    else if (age === "" || age == null) {
      alert("Age cannot be empty")
    }
    else if (age > 125 || age < 1) {
      alert("Age out of bounds")
    }
    else {

      // If all the details are filled User will see an alert "Submitted"
      alert("Submitted");

      // You can send your form details to backend here
      console.log(name + " " + age + " " + file);

      // InputFields will be emptied
      setName("");
      setAge("");
      setFile("");
    }
  }

  // HTML
  return (
    <div className="App">
      <h1>HealthCare</h1>

      {/* Form Parent */}
      <form className='LoginParent' id='LoginForm'>
        <h3 style={{ textDecoration: "underline" }}>FORM</h3>

        {/* Name InputField */}
        <a className='Title'>Name: </a>
        <input className='NameInput' placeholder='John Doe' value={name} onChange={(e) => { setName(e.target.value) }}></input>
        <br />

        {/* Age InputField */}
        <a className='Title'>Age: </a>
        <input className='AgeInput' placeholder='37' type='number' min={1} max={125} maxLength={3} value={age} onChange={(e) => { setAge(e.target.value) }}></input>
        <br />

        {/* File InputField */}
        <a className='Title'>File: </a>
        <input className='FileInput' type='file' size={1} value={file} onChange={(e) => { setFile(e.target.value) }}></input>
        {file === "" ? <p>No File Selected</p> : <p>{file.split('\\').pop()}</p>}
        < br />

        {/* Submit Button */}
        <button className='submitBtn' onClick={() => OnSubmitClicked()}>Submit</button>
      </form>
    </div>
  );
}

export default App;
