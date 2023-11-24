import { useState } from "react";
import AddCard from "../components/AddCard";
import ConfirmationModal from "../components/ConfirmationModal";
import NewCard from "../components/NewCard";
import { FaTrash } from "react-icons/fa";

function Gallery() {

  const [showDelete, setShowDelete] = useState(false)

  function handleOpenDelete() {
    setShowDelete(true);
  }

  const handleCloseDelete = () => {
    setShowDelete(false)
  }

  return (
    <>
      <div className="bg-amber-100 min-h-screen w-full space-y-10 py-10 items-center justify-center">
        <div className="flex flex-row flex-wrap place-content-between align-middle">
          <div className="self-start font-extralight text-6xl ml-10">
            Bookshelf
          </div>
          <button className="rounded-lg hover:brightness-75 bg-red-400 text-white font-medium text-xl mr-40 px-3" onClick={handleOpenDelete}>
            <div className="flex flex-row place-content-center">
              <FaTrash className="mr-3 mt-1" /> Delete a book
            </div>
          </button>
        </div>

        <div className="flex flex-row flex-wrap">
          <AddCard />
          <NewCard
            color={"bg-orange-200"}
            title={"Harry Potter and the Philosopher’s Stone"}
          />
          <NewCard
            color={"bg-pink-200"}
            title={"A Hitchhiker’s Guide to the Galaxy"}
          />
          <NewCard color={"bg-blue-200"} title="Nineteen eighty-four" />
          <NewCard
            color={"bg-orange-200"}
            title={"Harry Potter and the Philosopher’s Stone"}
          />
          <NewCard
            color={"bg-pink-200"}
            title={"A Hitchhiker’s Guide to the Galaxy"}
          />
          <NewCard color={"bg-blue-200"} title={"Nineteen eighty-four"} />
        </div>
      </div>

      <ConfirmationModal
        show={showDelete}
        onClose={handleCloseDelete}
        text={"Do you wish to delete this book?"}
        method={() => console.log('Deleted')}
      />
    </>
  );
}

export default Gallery;
