import React, { useEffect, useState } from 'react';
import ClothesProducts from '../ClothesProducts/ClothesProducts';
import Loading from '../loading/Loading';

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    fetch('https://clothing-store-server-j3j4chx3n-nahidchy.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setProducts(data)
        setSearchData(data)
      })

  }, [])
  useEffect(()=>{
    // if(!searchText) setProducts(products)
    const searchedData = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
    console.log(searchedData)
    if(searchText !== ""){
      setSearchData(searchedData)
    }
    if(searchText===''){
      setSearchData(products)
    }
  },[searchText])

  
  if (loading) {
    return <Loading />
  }
  return (
    <div className='mt-5 container'>
      <div className='flex items-center justify-center gap-5'>
        <input placeholder='search products here' onChange={(e) => setSearchText(e.target.value)} type='text' className='border border-gray-500 w-full lg:w-1/3 p-2 lg:p-3 rounded-lg'/>
        <button className='border border-gray-500 p-2 lg:p-3 bg-[#551fff] rounded-lg text-white font-semibold'>Search</button>
      </div>
     {searchData.length? <div className='grid lg:grid-cols-3 items-center justify-center gap-x-10 gap-y-16 mt-10'>
        {
          searchData.map((product, id) => <ClothesProducts key={id} product={product}></ClothesProducts>)
        }
      </div>
    :
    <div className='min-h-[600px]  flex justify-center items-center '>
  <h1 className='text-2xl text-white'>
  No items Found
  </h1>
    </div>  
    }
    </div>
  );
};

export default Clothes;