import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <div className="mt-12 text-center space-y-3">
            <h2 className="text-[#FF3811] font-bold">Popular Products</h2>
            <h3 className="text-4xl font-bold text-center">Browse Our Products</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    products.map (product => <Product key={product._id} product={product}></Product> )
                }
            </div>
        </div>
    );
};

export default Products;