import './App.css';
import { useState } from "react";
import { useEffect } from "react";



function App() {
  const [zip, setZip] = useState("00000");
  const apikey = "cd5bf7b02ee7a48dd4fc1436e5e9ce5d"
  const [location, setLocation] = useState([])

  const newZip = (input) => {
    setZip(input);
  }

  const generateAPI = async (input) => {
    console.log(input);
    await newZip(input);
    console.log(zip);
    fetch("http://api.openweathermap.org/geo/1.0/zip?zip=" + zip + ",US&appid=" + apikey)
    .then((res) => res.json())
    .then((data) => setLocation(data.results));
  }

  return (
    <div className="App">
      <form action="/url" method="get">
        Zip Code: <input type="text" name="zip" id="zip"></input><br/>
        
      </form>
      <button onClick={() => generateAPI(document.getElementById("zip").value)}>Submit</button>

      <p>Zip: {zip}</p>

      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lon}</p>
    </div>
  );
}

export default App;

//<input type="button" value="Submit" onClick={() => generateAPI(document.getElementById("zip").value)}></input>
