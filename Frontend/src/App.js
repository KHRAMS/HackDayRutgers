import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import ReactDOM from 'react-dom';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class App extends Component {

  post = (input) => {
    const test = axios.put("http://localhost:5000/test", {input: input}).then((response) =>
    {
const data =response.data['output']['stuff'];
    //    alert(response.data['output']['stuff']);
const element = <div className="App">
  <header className="App-header">
    <img className="photo" src="https://ak6.picdn.net/shutterstock/videos/25050416/thumb/1.jpg" />
    <h1 className="App-title">Hirelytics</h1>
  </header>
  <h1 className="OutputTitle">Based on your resume you may earn ${data}</h1>
  <BarChart className="graph" width={600} height={300} data={this.data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis dataKey=""/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="Your Data" fill="#8884d8"/>
                    <Bar dataKey="Average" fill="#82ca9d"/>
                </BarChart>
</div> ;
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    }).catch(error => {
      alert(error);
    });
    return test
  };

  save = () => {
    const input = document.getElementById("input").value;
    // document.write(input);
    this.post(input);
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="photo" src="https://ak6.picdn.net/shutterstock/videos/25050416/thumb/1.jpg" />
          <h1 className="App-title">Hirelytics</h1>
        </header>
        <label className ="InputTitle">Enter Resume: </label>
         <textarea  className = "input"id ="input" name="input" rows="10" cols="30">
        </textarea>

        {/*<input type="file" className = "input" id = "input" />*/}
        <br />

      <button className = "submit" type = "submit" onClick={this.save}> Submit </button>
    </div>
    );
  }
}

export default App;
