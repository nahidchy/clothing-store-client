import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link,  useLocation, useNavigate, } from 'react-router-dom';
const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    login(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true })

      })
      .catch(err => console.error(err))
  }
  return (
    <div className="hero min-h-[100vh]">
      <div className=" lg:max-w-[450px] w-5/6 lg:px-5 flex items-center justify-center ">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="Lg:text-4xl text-2xl font-bold mb-3 text-center">Login now!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' required placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center font-bold mb-3'>New in this account <Link className='underline text-blue-600' to='/signup'>sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;