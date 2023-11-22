import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io"
import { useState } from 'react';
import Modal from "react-modal";

export default function AddCard() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <>
      <Modal
          isOpen={modalIsOpen}
          className="absolute w-max h-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none rounded-2xl bg-white p-5 flex flex-col gap-3"
          contentLabel="Add Book Modal"
        >
          <div className="flex flex-row justify-between">
            <div className="text-2xl self-end pr-40">Add a new book</div>
            <button onClick={closeModal}><IoIosClose className="text-4xl" /></button>
          </div>
          <div>Upload a file</div>
          <form className="flex flex-col">
            <label>Enter title</label>
            <input type="text" id="bookTitle" className="my-1 text-sm bg-zinc-100 rounded-lg border-0" required/>
            <button type="submit" className="w-max self-end mt-2 px-2 py-1 rounded-lg font-semibold text-white bg-lime-400">Upload</button>
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
