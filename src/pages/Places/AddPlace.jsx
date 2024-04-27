import React from 'react'

function AddPlace() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">


    {/* App bar */}
    <div className="flex items-center justify-between h-14 bg-white px-4 shadow-md">
        <div className="text-xl font-bold">Places</div>
    </div>

    {/* Content */}
    <div className="flex flex-col px-4 py-8 overflow-y-auto">
        <div className="text-xl font-bold mb-4">Get notified when someone leaves or enters places.</div>
        <div className="text-gray-600 mb-4">
        Add places to get notified when circle members enter or leave the place (2 free places).
        </div>
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md">
        Add place
        </button>
        <button className="btn text-blue-500 hover:text-blue-700 border border-blue-500 py-2 px-4 rounded shadow-md mt-2">
        Add a place
        </button>
    </div>

    {/* Tab bar */}
    <div className="flex justify-between bg-white px-4 py-4">
        <i className="fas fa-map text-gray-400"></i>
        <i className="fas fa-shield-alt text-gray-400"></i>
        <div className="text-blue-500">Places</div>
        <i className="fas fa-bars text-gray-400"></i>
    </div>
    </div>
  )}
  export default AddPlace