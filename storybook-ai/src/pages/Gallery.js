import AddCard from "../components/AddCard";
import NewCard from "../components/NewCard";

const sampleBooks = [
  { color: "bg-orange-200", title: "Harry Potter and the Philosopher’s Stone" },
  { color: "bg-pink-200", title: "A Hitchhiker’s Guide to the Galaxy" },
  { color: "bg-blue-200", title: "Nineteen eighty-four" },
]

function Gallery() {
  document.body.style = 'background: rgb(254 243 199);' // fixes showing white bg when overscrolling

  const bookList = sampleBooks.map(book =>
    <NewCard color={book.color} title={book.title} />
  )

  return (
    <>
      <div className="bg-amber-100 min-h-screen w-full space-y-10 py-10 items-center justify-center">
        <div className="flex flex-row flex-wrap place-content-between align-middle">
          <div className="self-start font-extralight text-6xl ml-10">
            Bookshelf
          </div>
        </div>

        <div className="flex flex-row flex-wrap">
          <AddCard />
          {bookList}
        </div>
      </div>
    </>
  );
}

export default Gallery;
