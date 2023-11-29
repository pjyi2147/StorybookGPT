import React from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ConfirmationModal from "./ConfirmationModal";
import { useNavigate } from 'react-router-dom'

export default function NewCard({ color, title }) {

  const navigate = useNavigate()

  const newStyle = color + " rounded-3xl py-24 w-36 h-20 shadow-md";

  const [showDelete, setShowDelete] = useState(false)

  function handleOpenDelete() {
    setShowDelete(true);
  }

  const handleCloseDelete = () => {
    setShowDelete(false)
  }

  return (
    <>
      <div className="m-10">
        <div
          className="hover:brightness-75 h-48 cursor-pointer"
          onClick={() => navigate('/book')}
        >
          <div className={newStyle}>
            <div className="px-10 py-6 mt-6 bg-white"></div>
          </div>
          <svg
            className="relative bottom-48 left-24 fill-amber-200"
            width="25"
            height="80"
          >
            <rect width="25" height="60" />
            <polygon points="0,60 12,80 25,60" />
          </svg>
        </div>
        <div
          className="font-medium font relative top-2 text-center w-36 break_normal cursor-pointer line-clamp-2"
          onClick={() => navigate('/book')}
        >
          {title}
        </div>
        <FaTrash className="relative top-4 left-16 ml-1 text-xl text-gray-400 cursor-pointer hover:brightness-75" onClick={handleOpenDelete}/>
      </div>

      <ConfirmationModal
        show={showDelete}
        onClose={handleCloseDelete}
        text={"Do you want to delete this book?"}
        method={() => console.log('Deleted')}
      />
    </>
  );
}
