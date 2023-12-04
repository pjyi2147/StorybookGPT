import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io"
import { RiFolderUploadFill } from "react-icons/ri"
import { useState } from 'react';
import Modal from "react-modal";
import { CirclePicker } from "react-color";

export default function AddCard() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [color, setColor] = useState("#f44336");

  const handleChangeComplete = (color) => {
    setColor(color);
  };
  
  return (
    <>
      <Modal
          isOpen={modalIsOpen}
          className="absolute w-max h-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none rounded-2xl bg-white p-5 flex flex-col gap-3"
          contentLabel="Add Book Modal"
        >
          <div className="flex flex-row justify-between">
            <div className="text-2xl self-end pr-40">Add a new book</div>
            <button onClick={closeModal}><IoIosClose className="hover:scale-110 text-4xl" /></button>
          </div>
          <form className="flex flex-col mt-1">
            <CirclePicker className="pb-2 px-2" width="395px" 
              color={color} 
              colors={["#f44336", "#ff9800", "#ffeb3b", "#8bc34a", "#2196f3", "#3f51b5", "#9c27b0", "#795548", "#607d8b"]} 
              onChange={handleChangeComplete}
              />
            <div className="my-1">Upload a file</div>
            <div className="flex flex-row justify-between pb-3">
              <label><RiFolderUploadFill className="hover:text-zinc-500 cursor-pointer text-3xl" /><input className="hidden" type="file" accept=".txt" required/></label>
              <div className="bg-zinc-100 w-full ml-2 rounded-lg border-0 px-2 py-0.5"></div>
            </div>
            <label>Enter title</label>
            <input type="text" id="bookTitle" className="my-1 text-sm bg-zinc-100 rounded-lg border-0" required/>
            <button type="submit" className="hover:brightness-75 w-max self-end mt-2 px-2 py-1 rounded-lg font-semibold text-white bg-lime-400">Upload</button>
          </form>
      </Modal>
      <div className="hover:brightness-75 h-48 m-10 cursor-pointer" onClick={openModal}>
        <div className="bg-white rounded-3xl py-24 w-36 h-20 shadow-md">
          <div className="px-10 py-6 mt-6 bg-white"></div>
        </div>
        <FaPlus className="relative bottom-32 left-10 pl-1 text-6xl text-gray-400" />
      </div>
    </>
  );
}
