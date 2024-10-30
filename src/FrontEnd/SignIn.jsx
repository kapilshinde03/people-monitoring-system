import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './signin.css';

function SignIn() {
    return (
        <div className="signin-container d-flex justify-content-center align-items-center vh-100">
            <div className="signin-card p-4 rounded">
                <h2 className="text-center mb-4 mx-auto w-75 px-4 py-3">Sign In</h2>
                <div class="wave-container">
                    <div class="wave wave1"></div>
                    <div class="wave wave2"></div>
                    <div class="wave wave3"></div>
                </div>
                <div className="avatar my-3 text-center">
                    <i className="bi bi-person-circle text-white "></i>
                </div>
                <form>
                    <div className="form-group mb-3 mx-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="form-group mb-2 mx-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between form-group mb-2 mx-4">
                        <div className='remember'>
                            <input type="checkbox" className='mx-2' id='remember' />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className='forgot'>
                            <a href="#">Forgot Your Password?</a>
                        </div>

                    </div>
                    <div className="form-group my-4 mx-3">
                        <button type="submit" className="btn btn-primary w-100">
                            Sign In
                        </button>
                    </div>

                </form>
            </div>
        </div>



    );
}

export default SignIn;
