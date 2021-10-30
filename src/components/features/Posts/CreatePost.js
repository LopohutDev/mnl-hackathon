import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authSelect, createPost } from "../authSlice";

const CreatePost = () => {
  const { users } = useSelector(authSelect);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-screen-2xl w-full mx-auto">
      <div className="bg-white rounded-2xl p-5">
        <h1 className="mt-10 text-4xl font-bold text tracking-wide">
          Create A Post
        </h1>
        <div className="mt-5">
          <label className="text-2xl">Title</label>
          <input
            onChange={(e) => setTitle(e.currentTarget.value)}
            placeholder="Title"
            className="rounded-full mt-3 w-full py-2 px-5 border-2 focus:outline-none focus:border-lightblue-500"
          />
        </div>
        <div className="mt-5">
          <label className="text-2xl">Description</label>
          <textarea
            onChange={(e) => setDescription(e.currentTarget.value)}
            style={{ height: "300px" }}
            placeholder="Description"
            className="resize-none w-full mt-3 rounded-2xl p-5 border-2 focus:outline-none focus:border-lightblue-500"
          ></textarea>
        </div>
        <div className="flex justify-end gap-10 mt-10">
          <button
            onClick={() => history.push("/posts")}
            className="bg- px-10 py-3 rounded-full hover:text-lightgreen-500 focus:text-lightgreen-500"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              dispatch(
                createPost({
                  user: users[0].name,
                  title,
                  description,
                  email: users[0].email,
                })
              );
              history.push("/posts");
            }}
            className="bg-lightblue-500 text-gray-50 px-10 py-3 rounded-full hover:bg-lightblue-400 focus:bg-lightblue-400"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
