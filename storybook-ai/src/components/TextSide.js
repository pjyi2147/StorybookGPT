import { IoExit } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";

function TextSide({chapter, title, text}) {
  const navigate = useNavigate();

  let paragraphs = text.split("\n").map((element) => {
    return element;
  });

  return (
    <>
      <div className="bg-white w-1/2 h-screen py-10 px-12">
        <div className="text-2xl mb-2 font-serif"> {chapter} </div>
        <div className="text-2xl mb-2 font-serif"> {title} </div>
        <div className="text-xl h-5/6 overflow-auto font-serif">
          {paragraphs.map((element) => {
            return <p className="mb-6"> {element} </p>;
          })}
        </div>
        <div className="flex flex-row place-content-between">
          <IoExit
            className="text-5xl mt-3 text-gray-400 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <div className="mt-5 text-xl">
            1 / 254
          </div>
          <RxHamburgerMenu
            className="text-5xl mt-3 text-gray-400 cursor-pointer"
            onClick={() => console.log("click")}
          />
        </div>
        <div>
          <IoIosArrowBack className="relative bottom-96 right-11 text-gray-400 text-4xl cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default TextSide;
