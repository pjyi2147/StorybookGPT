import { useState, useEffect } from "react";
import AddCard from "../components/AddCard";
import NewCard from "../components/NewCard";

const sampleBooks = [
  { bookId:"0", color: "#fed7aa", title: "Harry Potter and the Philosopher’s Stone" },
  { bookId:"1", color: "#fbcfe8", title: "A Hitchhiker’s Guide to the Galaxy" },
  { bookId:"2", color: "#bfdbfe", title: "Nineteen eighty-four" },
]

function Gallery() {
  document.body.style = 'background: rgb(254 243 199);' // fixes showing white bg when overscrolling

  // Retrieve book list from local storage, default to sample books
  var storedBookList = JSON.parse(localStorage.getItem('bookList'))||sampleBooks;
  const [bookList, setBookList] = useState(storedBookList);
  
  // Update localStorage whenever bookList changes
  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }, [bookList]);

  const addBook = (newBook) => {
    setBookList([...bookList, newBook]);
  }

  const delBook = (bookUUID) => {
    // Filter out the book with the specified bookUUID
    const updatedBookList = bookList.filter(book => book.bookId !== bookUUID);
    
    // Update the state with the new book list
    setBookList(updatedBookList);
  }

  const bookCardList = bookList.map(book =>
    <NewCard key={book.bookId} bookId={book.bookId} color={book.color} title={book.title} onDelete={delBook} />
  )

  return (
    <>
      <div className="bg-amber-100 min-h-screen w-full space-y-10 py-10 items-center justify-center">
        <div className="flex flex-row flex-wrap place-content-between align-middle">
          <div className="self-start font-extralight text-6xl ml-10">
            Bookshelf
          </div>
          <button className="text-sm mr-10 bg-white h-min rounded p-1 hover:brightness-75" type="button" onClick={() => {localStorage.clear(); window.location.reload();}}>Reset bookList</button>
        </div>

        <div className="flex flex-row flex-wrap">
          <AddCard onAddBook={addBook} />
          {bookCardList}
        </div>
      </div>
    </>
  );
}

export default Gallery;
