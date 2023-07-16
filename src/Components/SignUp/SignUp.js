import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSubmit=(event)=>{
       event.preventDefault()
       const form=event.target;
       const firstName=form.firstName.value;
       const lastName=form.lastName.value;
       const email=form.email.value;
       const password=form.password.value;
       const confirmPassword=form.confirmPassword.value;
       
       if(password !== confirmPassword){
        alert('Did not match with confirm Password')
       }
       else{
        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user)
          form.reset();
         })
         .catch(err=>console.error(err))
       }
       console.log(firstName,lastName,email,password,confirmPassword)
      
    }
    return (
        <div className="hero min-h-[100vh] ">
        <div className=" lg:w-1/2 w-5/6 lg:p-5 flex items-center justify-center lg:mt-20 mt-5 pb-5">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
            <h1 className="lg:text-4xl text-2xl font-bold mb-3 text-center">Sign up now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" name='firstName' placeholder="First name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input type="text" name='lastName' placeholder="Last name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder="email" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className='text-center font-bold mb-3'>Already have an account <Link className='underline text-blue-600' to='/login'>login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;