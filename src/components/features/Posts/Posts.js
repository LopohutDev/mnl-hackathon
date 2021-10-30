import React, { useEffect } from "react";
import ExpandingCard from "./components/ExpandingCard";
import { useDispatch, useSelector } from "react-redux";
import { authSelect, getPosts } from "../authSlice";
import { IoCreateOutline } from "react-icons/io5";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const Posts = () => {
  const { allPosts } = useSelector(authSelect);
  const { url } = useRouteMatch();
  return (
    <>
      <div className="max-w-screen-2xl  w-full mx-auto">
        {allPosts !== undefined &&
          allPosts.map((posts) => (
            <>
              {posts.map((post, index) => (
                <ExpandingCard
                  title={post.title}
                  description={post.description}
                  upvotes={post.upvotes}
                  user={post.user}
                  comments={post.comments}
                  key={index}
                />
              ))}
            </>
          ))}
      </div>
      <Link
        to={`${url}/createPost`}
        className="fixed right-20 bottom-20 bg-lightblue-500 text-5xl text-gray-50 p-5 rounded-full"
      >
        <IoCreateOutline />
      </Link>
    </>
  );
};

export default Posts;
