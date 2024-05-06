import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ServiceCard = ({ service }) => {

    const { title, img, price, _id } = service

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-8">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="text-[#FF3811] font-semibold">Price: ${price}</p>
                    <Link to={`/book-service/${_id}`}>
                        <button className="btn bg-red-400 text-white">Book Now</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;