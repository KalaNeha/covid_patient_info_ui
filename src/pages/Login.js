import React from 'react';



function Login() {
  return (
 <>
  <div className="text-center"> Log in </div>
  	<form action="/admin" >
  <div className="mb-3 mx-5">
    <label htmlFor="exampleInputEmail1" className="form-label">
      User Name
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
  </div>
  <div className="mb-3 mx-5">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <button type="submit" className="btn btn-primary mx-5">
    Login
  </button>
</form>
    
</>
  );
}

export default Login;
