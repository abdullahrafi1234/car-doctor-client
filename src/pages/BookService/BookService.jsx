import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {

    const { user } = useContext(AuthContext)

    const services = useLoaderData()
    // console.log(services)
    const {title, price , _id, img} = services

    const handleBookService = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price            
        }

        console.log(order)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('order confirmed')
            }
        })
        
    }

    return (
        <div className="items-center ">
            <h3 className="text-3xl text-center">Check Out</h3>
            <div className="card shrink-0   border p-8 lg:m-12  ">


                <form onSubmit={handleBookService} className="card-body">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="date" name='date' placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="text" name='amount' placeholder="Due Amount" defaultValue={'$ ' + price} className="input input-bordered" required />
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

export default BookService;