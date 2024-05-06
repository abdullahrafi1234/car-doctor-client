import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])
    // console.log(services);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)
            })
    }, [])

    return (
        <div>
            <div className="text-center space-y-4 mt-12">
                <h3 className="text-xl text-[#FF3811] font-bold"> Service</h3>
                <h3 className="text-4xl font-bold">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className="text-center my-8 text-[#FF3811]">
                    <button className=" btn btn-outline
                     text-[#FF3811] border-[#FF3811]">More Services</button>
                </div>
            </div>
        </div>
    );
};

export default Services;