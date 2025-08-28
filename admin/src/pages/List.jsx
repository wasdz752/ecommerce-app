import axios from 'axios'
import React from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'

const List = () => {
  const [list, setList] = useState([])
  const fetchList = async()=>{
    try{
      const response = await axios.get(backendUrl + '/api/products/list')
      if(response.data.success){
        setList(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }
    }
    catch (error){
      console.error(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchList()
  }, [])

  console.log("Fetched Products:", list) 

  const removeProduct = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Authentication token not found');
        return;
      }
  
      const response = await axios.post(
        backendUrl + '/api/products/remove',
        { id },
        { headers: { token } }  // ✅ Pass token properly
      );


  
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };
  
  

  return (
    <section className='flex flex-col gap-5 py-7 pb-12 px-[6vw] flex-1'>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        {/*List Table Title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border-1 border-[var(--darkBorderColor)] bg-gray-100 text-sm text-[var(--secondaryTextColor)]'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product List */}
        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border-1 border-[var(--darkBorderColor)] text-sm' key={index}>
              <img className='w-12' src={item.image?.[0] || 'default-image-url'} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=> removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default List;