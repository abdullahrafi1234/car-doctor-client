import { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result.user);
        
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className=" ">
            <div className=" flex flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left lg:w-1/2">

                    <img className='p-8' src={login} alt="" />
                </div>
                <div className="card shrink-0 lg:w-1/2  border p-8 lg:m-12">
                    <h1 className="text-4xl font-semibold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white bg-[#FF3811]">Sign In</button>
                        </div>

                        <div className='text-center'>
                            <p>or Sign In with</p>
                            <div className='flex justify-center gap-4 p-4'>
                                <button><FcGoogle className="text-3xl"></FcGoogle></button>

                                <button><FaFacebook className="text-3xl text-blue-700 "></FaFacebook></button>

                                <button><FaGithub className="text-3xl "></FaGithub></button>

                            </div>
                        </div>

                        <p className='text-center'>New to Car Doctors? <Link to={'/register'}><span className='text-[#FF3811] font-bold'>Sign Up</span></Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;