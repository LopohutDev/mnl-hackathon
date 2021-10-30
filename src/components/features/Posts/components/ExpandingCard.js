import React, { useState } from "react";

import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp, IoMdSend } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";

const ExpandingCard = ({ user, upvotes, title, description, comments }) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [votes, setVotes] = useState(upvotes);

  return (
    <div className=" mt-5 bg-white shadow-2xl rounded-lg p-5 z-10">
      <div className=" flex items-center text-2xl">
        <div className="text-2xl ">
          <AiFillCaretUp onClick={() => setVotes(votes + 1)} />
          <AiFillCaretDown onClick={() => setVotes(votes - 1)} />
        </div>
        <div className="text-lg ml-5 ">{votes}</div>
        <div className="ml-10">{user}</div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center"
      >
        <div className="px-10 py-5 w-5/6 ">
          <h1 className="text-4xl">{title}</h1>
          <p className="text-xl mt-2 mx-4">{description}</p>
        </div>
        <div className="text-5xl mr-10">
          {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
      {open && (
        <div className="mt-5 p-5 px-16">
          <div className="font-bold">Comment: </div>
          {comments.map((comment) => (
            <>
              <div className=" flex items-center mt-5">
                <div className="ml-10">{comment.user}</div>
              </div>
              <div className="flex justify-between items-center px-5">
                <div className="px-10 py-3 w-5/6 ">
                  <p className=" mt-1">{comment.comment}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
      <div className="flex justify-between  items-center w-full text-xl h-20">
        <input
          type="text"
          placeholder="type your comment here"
          onChange={(e) => setComment(e.target.value)}
          className="px-5 py-2 rounded-full border-2 focus:border-lightblue-500 focus:outline-none w-10/12"
        />
        <div>
          {comment.length > 0 ? (
            <IoMdSend className="text-4xl text-lightblue-500" />
          ) : (
            <IoSendOutline className="text-4xl text-lightblue-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandingCard;
