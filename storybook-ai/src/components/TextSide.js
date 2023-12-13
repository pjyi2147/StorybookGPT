import { IoExit } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";

function TextSide({chapter, title, text, currPage, maxPage}) {
  const navigate = useNavigate();

  let paragraphs = text.split("\n").map((element) => {
    return element;
  });

  return (
    <>
      <div className="bg-white w-1/2 h-screen">
        <div className="text-2xl mb-2 font-serif pt-10 px-12"> {title} </div>
        <div className="text-xl h-5/6 overflow-auto font-serif  px-12">
          {paragraphs.map((element) => {
            return <p className="mb-6"> {element} </p>;
          })}
        </div>
        <div className="fixed bg-white z-10 bottom-0 w-1/2 p-3 flex flex-row items-center justify-between">
          <IoExit
            className="text-5xl text-gray-400 cursor-pointer hover:brightness-75"
            onClick={() => navigate("/")}
          />

          <div className="text-xl">
            {currPage} / {maxPage}
          </div>
          <RxHamburgerMenu
            className="text-5xl text-gray-400 cursor-pointer"
            onClick={() => console.log("click")}
          />
        </div>
        <IoIosArrowBack className="absolute inset-y-0 left-0 h-full text-gray-400 text-4xl cursor-pointer hover:bg-slate-100" />
      </div>
    </>
  );
}

export default TextSide;
