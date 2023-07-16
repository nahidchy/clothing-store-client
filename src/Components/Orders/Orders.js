import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../loading/Loading';

const Orders = () => {
  const {user} = useContext(AuthContext)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
    useEffect(()=>{
      fetch(`https://clothing-store-server-j3j4chx3n-nahidchy.vercel.app/orders?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        setLoading(false)
        setOrders(data)
      })
    },[user])
if(loading){
  return <Loading/>
}
    const handleDelete=(order)=>{
     const agree = window.confirm(`Are sure want to delete this ${order.name}`);
     if(agree){
      fetch(`https://clothing-store-server-j3j4chx3n-nahidchy.vercel.app/orders/${order._id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          alert('user deleted successfully')
          const remainingOrders=orders.filter(ordr=>ordr._id !==order._id);
          setOrders(remainingOrders)
        }
      })
     }
    }
    return (
        <div className='container'>
            <div className="overflow-x-auto">
             <table className="table table-zebra text-white">
             <thead>
                 <tr className='text-white'>
                   <th></th>
                   <th>Image</th>
                   <th>Name</th>
                   <th>Price</th>
                   <th>email</th>
                   <th>Action</th>
                 </tr>
               </thead>
        {
             orders.map((order, i)=>
               <tbody>
                 <tr className=''>
                   <th>{i+1}</th>
                   <td><img className='lg:w-1/3 lg:h-36 h-20 w-96 object-cover rounded-md' src={order.image} alt=''></img></td>
                   <td>{order.name}</td>
                   <td>{order.price}</td>
                   <td>{order.email}</td>
                   <td>
                    <div className=''>
                    <button onClick={()=>handleDelete(order)} className='text-red-700 border-red-500 border p-3 rounded font-semibold '>Delete</button>
                    </div>
                    </td>
                 </tr>
               </tbody>
             
           )
        }
        </table>
        </div>
        </div>
    );
};

export default Orders;