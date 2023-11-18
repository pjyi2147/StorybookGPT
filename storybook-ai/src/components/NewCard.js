import React from "react";

export default function NewCard({ color, title }) {
  const newStyle = color + " rounded-3xl py-24 w-36 h-20 shadow-md";
  return (
    <>
      <div className="m-10">
        <div className="hover:brightness-75 h-48">
          <div className={newStyle}>
            <div className="px-10 py-6 mt-6 bg-white"></div>
          </div>
          <svg
            className="relative bottom-48 left-24 fill-amber-200"
            width="25"
            height="80"
          >
            <rect width="25" height="60" />
            <polygon points="0,60 12,80 25,60" />
          </svg>
        </div>
        <div className="font-medium font relative top-2 text-center w-36 break_normal">
                  {title}
        </div>
      </div>
    </>
  );
}