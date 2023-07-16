import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Details = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext)
    const handleOrder = (product) => {
        if (!user?.email) return
        const { name, price, image } = product;
        const orderedProduct = { name, price, image, email: user?.email }
        fetch("https://clothing-store-server-j3j4chx3n-nahidchy.vercel.app/orders", {
            method: "POST",
            headers:
            {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("Order successfully done 😊")
                }
            })
    }

    return (
        <div className='mx-auto w-full lg:w-1/2 mt-8 pb-20 px-5'>
            <img className='lg:w-2/3 w-full object-cover h-96 lg:h-[550px] mx-auto rounded' src={product.image} alt=''></img>
            <p className='text-white mt-5 '>{product.description}</p>
            <div className='flex items-center justify-between lg:gap-24 mt-5'>
                <div className='lg:flex items-center justify-start gap-4'><p className='text-xl text-orange-200'><span className='font-bold lg:text-2xl text-orange-100'>Category</span> :  {product.name}</p>
                <p className='text-xl text-orange-200 mt-5 lg:mt-0'><span className='font-bold lg:text-2xl text-orange-100'>Price</span> :  {product.price}</p></div>
                <Link><button onClick={() => handleOrder(product)} className='border border-gray-500 p-2 lg:p-3 bg-[#551fff] rounded-lg text-white font-semibold'>Order</button></Link>
            </div>
        </div>
    );
};

export default Details;