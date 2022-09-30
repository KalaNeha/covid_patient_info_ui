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
<<<<<<< HEAD:src/pages/Login.js
=======
    
>>>>>>> dc8f7721ac0ecad62d40c77dd95a3c7c7071311d:src/component/Login.jsx
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
<<<<<<< HEAD:src/pages/Login.js
  <button type="submit" className="btn btn-primary mx-5">
    Login
=======
  
  <button type="submit" className="btn btn-primary mx-5">
    Log in
>>>>>>> dc8f7721ac0ecad62d40c77dd95a3c7c7071311d:src/component/Login.jsx
  </button>
</form>
    
</>
  );
}

export default Login;
