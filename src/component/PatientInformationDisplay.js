import { fontWeight } from '@mui/system';
import React from 'react';
import Graph from './Graph';

function PatientInformationDisplay(props){

  const {data : {name , email, age}} = props
  console.log(props);

  return (  
  <>
<div className="form-group row" style={{width:1000, margin:20, padding:56}}>
<h2>Patient Details</h2>
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label" style={{fontWeight:700}}>Name</label>
      <div className="col-sm-10">
        {name}
      </div>
      <div className="form-group row">
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label" style={{fontWeight:700}}>Email</label>
      <div className="col-sm-10">
        {email}
      </div>
      </div>
      {/* <div className="form-group row">
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Address</label>
      <div className="col-sm-10">
        {address}
      </div>
      </div> */}
      <div className="form-group row">
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label" style={{fontWeight:700}}>Age</label>
      <div className="col-sm-10">
        {age}
      </div>
      </div>

      </div>
      <Graph name={name}/>

      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" /> */}
</>
     
  );
  
}
 
export default PatientInformationDisplay;
