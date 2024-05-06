import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const Product = ({product}) => {
    const {title, img, price} = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h3 className="flex gap-1">
                        <FaStar className="text-[#FF912C]"></FaStar>
                        <FaStar className="text-[#FF912C]"></FaStar>
                        <FaStar className="text-[#FF912C]"></FaStar>
                        <FaStar className="text-[#FF912C]"></FaStar>
                        <FaStar className="text-[#FF912C]"></FaStar>
                    </h3>
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#FF3811] font-bold">${price}</p>
                  
                </div>
            </div>
    )
}

Product.propTypes = {
    product:PropTypes.object,
}


export default Product;