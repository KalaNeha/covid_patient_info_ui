import React from 'react';
import Graph from './Graph';

function PatientInformationDisplay(props){

  const {data : {name , email, age}} = props
  console.log(props);

  return (  
  <>
<div className="form-group row">

      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        {name}
      </div>
      <div className="form-group row">
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
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
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Age</label>
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
