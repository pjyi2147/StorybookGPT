import { IoExit } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";

function TextSide() {
  const navigate = useNavigate();

  const chapter = "Chapter";
  const title = "Title";
  let text =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. \n The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. \n The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. \n";
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
          <RxHamburgerMenu
            className="text-5xl mt-3 text-gray-400 cursor-pointer"
            onClick={() => console.log("click")}
          />
        </div>
      </div>
    </>
  );
}

export default TextSide;
