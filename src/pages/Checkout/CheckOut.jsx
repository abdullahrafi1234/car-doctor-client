import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div className="items-center ">
            <div className="card shrink-0   border p-8 lg:m-12  ">

                <form className="card-body">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                        <div className="form-control">
                            <label className="label">   
                            </label>
                            <input type="email" name='first' placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="email" name='last' placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="email" name='phone' placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="password" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="mt-6">
                        <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#FF3811]"><input type="submit" value="Order Confirm" /></button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;