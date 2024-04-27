import React from 'react'
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
    <div className="flex flex-row justify-between items-center">
    </div>
    <div className="flex flex-col mt-4 text-xl font-medium">
      <span className="text-gray-800">Menu</span>
      <div className="flex flex-row mt-2">
        <Link to="/addmember">
        <span className="text-base font-normal">Add a New Member</span>
        <span className="ml-auto text-gray-500"></span>
        </Link>
      </div>
      <div className="flex flex-row mt-2">
        <Link to="/Circle">
        <span className="text-base font-normal">My Current Circle</span>
        <span className="ml-auto text-gray-500"></span>
        </Link>
      </div>
      <div className="flex flex-row mt-2">
        <Link to="/Pro">
        <span className="text-base font-normal">My Profile</span>
        <span className="ml-auto text-gray-500"></span>
        </Link>
      </div>
      <div className="flex flex-row mt-2">
        <Link to="/">
        <span className="text-base font-normal">My Circles</span>
        <span className="ml-auto text-gray-500"></span>
        </Link>
      </div>
      <div className="flex flex-row mt-2 text-red-500">
      <Link to="/">
        <span className="text-base font-normal">Delete all data</span>
        <span className="ml-auto text-gray-500"></span>
        </Link>
      </div>
    </div>
    <div className="flex flex-row mt-4 text-gray-500 text-xs">
      <span>Ma</span>
      <div className="flex flex-row  ml-auto">
        <span>Safety</span>
        <span className="ml-2">Place</span>
      </div>
    </div>
  </div>
  
  )
}

export default Menu;