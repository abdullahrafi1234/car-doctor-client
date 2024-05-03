

const ServiceCard = ({ service }) => {

    const { title, img, price } = service

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-8">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="text-[#FF3811] font-semibold">Price: ${price}</p>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCard;