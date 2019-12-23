import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Card from './components/Card'
import Nav from './components/Nav'
import {Route} from 'react-router-dom'
import Postcard from './components/Postcard'
// import Snow from './components/Snow'
import styled from 'styled-components'




function App() {
  const [id, setId] = useState("");
  const [holiday, setHoliday] = useState("christmas");


  return (
    <div className={`App, ${holiday}`}>
      <Nav/>
      {/* <Route exact path="/"><Home setId={setId} id={id} holiday={holiday} setHoliday={setHoliday}/></Route> */}
      <Route exact path="/" render={(props) => (<Home {...props} setId={setId} id={id} holiday={holiday} setHoliday={setHoliday} />)}/>
      {/* <Route exact path="/card/:id"><Card holiday={holiday} setHoliday={setHoliday}/></Route> */}
      <Route exact path="/card/:id" render={(props) => (<Card {...props} holiday={holiday} setHoliday={setHoliday} />)}/>
        {/* <Postcard/> */}
        {/* <Snow/> */}


        {/* <Route render={(props) => (<MyComponent {...props} someProp={someData} someOtherProp={moreData} />)} /> */}
      

      
    </div>
  );
}

export default App;
