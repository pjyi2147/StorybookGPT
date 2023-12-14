import TextSide from "../components/TextSide";
import ImageSide from "../components/ImageSide";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

function Book() {
  let { id, page, maxpage } = useParams();

  const title = JSON.parse(localStorage.getItem('bookList')).find(book => book.bookId === id).title||"Title not found";

  let textAPIUrl = `/api/${id}/${page}/text`;

  const [text, setText] = useState("");
  // retrieve text from api
  useEffect(() =>{
    axios.get(textAPIUrl)
    .then((response) => {
      console.log(response);
      setText(response.data.content);
    }, (error) => {
      console.log(error);
    });
  }, [textAPIUrl]);

  return (
    <>
      <div className="bg-amber-100 h-screen w-screen items-center overflow-hidden flex justify-between">
        <TextSide title={title} text={text} id={id} currPage={page} maxPage={maxpage} />
        <ImageSide id={id} currPage={page} maxPage={maxpage} />
      </div>
    </>
  );
}

export default Book;
