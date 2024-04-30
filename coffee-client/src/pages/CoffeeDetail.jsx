import React from 'react'
import { useLoaderData } from 'react-router-dom'


const CoffeeDetail = () => {
    const loadCoffeeDetails = useLoaderData()
    const {photo, name,chef, price} = loadCoffeeDetails
  return (
    <div>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={photo}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-2 font-bold tracking-tight text-gray-900">
            Name : {name}
          </p>
          <p className="mb-3 font-bold text-gray-700 ">Chef : {chef}</p>
          <p className="mb-3 font-bold text-gray-700 ">Price : {price}</p>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetail