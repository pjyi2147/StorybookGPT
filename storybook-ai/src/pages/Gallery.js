import { useState, useEffect } from "react";
import AddCard from "../components/AddCard";
import NewCard from "../components/NewCard";
import axios from "axios";

const sampleBooks = [
  { bookId:"0", color: "#fed7aa", title: "Harry Potter and the Philosopher’s Stone", currPage:1, maxPage:250 },
  { bookId:"1", color: "#fbcfe8", title: "A Hitchhiker’s Guide to the Galaxy", currPage:1, maxPage:250 },
  { bookId:"2", color: "#bfdbfe", title: "Nineteen eighty-four", currPage:1, maxPage:250 },
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
    // console.log(newBook);

    const formData = new FormData();
    formData.append('textFile', newBook.file);

    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
        },
    })
    .then((response) => {
      // console.log(response);
      newBook.maxPage = response.data.maxPage;
      newBook.bookId = response.data.bookId.toString();
      console.log(newBook);
      setBookList([...bookList, newBook]);
    }, (error) => {
      console.log(error);
    });
  }

  const delBook = (bookUUID) => {
    // Filter out the book with the specified bookUUID
    const updatedBookList = bookList.filter(book => book.bookId !== bookUUID);

    // Update the state with the new book list
    setBookList(updatedBookList);
  }

  const bookCardList = bookList.map(book =>
    <NewCard key={book.bookId} bookId={book.bookId} color={book.color} title={book.title} currPage={book.currPage} maxPage={book.maxPage} onDelete={delBook} />
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
