import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Navbar from "../../commons/Navbar";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const PostsPage = () => {
  const { path } = useRouteMatch();
  return (
    <div className="bg-gray-100 w-screen h-screen overflow-y-auto relative">
      <Navbar />
      <Switch>
        <Route path={`${path}/createPost`} component={CreatePost} />
        <Route path={`${path}/`} component={Posts} />
      </Switch>
    </div>
  );
};

export default PostsPage;
