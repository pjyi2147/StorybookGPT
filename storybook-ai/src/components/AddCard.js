import React from "react";
import { FaPlus } from "react-icons/fa";
import { useState } from 'react'

export default function AddCard() {

    const [show, onShow] = useState(false)
    const handleSetShow = () => {
        console.log("click", show)
        onShow(true)
    }

  return (
    <>
      <div className="hover:brightness-75 h-48 m-10 cursor-pointer" onClick={handleSetShow}>
        <div className="bg-white rounded-3xl py-24 w-36 h-20 shadow-md">
          <div className="px-10 py-6 mt-6 bg-white"></div>
        </div>
        <FaPlus className="relative bottom-32 left-10 pl-1 text-6xl text-gray-400" />
      </div>
    </>
  );
}
