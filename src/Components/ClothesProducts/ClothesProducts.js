import React from 'react';
import { Link } from 'react-router-dom';

const ClothesProducts = ({product}) => {
    return (
        <div className='border border-gray-400 rounded-xl pb-5'>
            <img className='w-full h-80 object-cover rounded-t-xl' src={product.image} alt=''></img>
            <div>
                <p className='text-white mt-2 px-3'>{product.description.substring(0, 80)}....</p>
            </div>
            <div className='flex items-center justify-between  mt-3 px-3'>
            <p className='lg:text-xl text-orange-200'><span className='font-bold text-orange-100'>Category</span> :  {product.name}</p>
            <Link to={`${product.name}/${product._id}`}><button className='text-orange-100 bg-[#551fff] btn-sm rounded'>See Details</button></Link>
            </div>
        </div>
    );
};

export default ClothesProducts;