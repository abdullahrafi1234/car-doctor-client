import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { createUser, } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        // create user
        createUser(email, password)
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
                    <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white bg-[#FF3811]">Sign Up</button>
                        </div>

                        <p className='text-center'>Already have an Account? <Link to={'/login'}><span className='text-[#FF3811] font-bold'>Login</span></Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;