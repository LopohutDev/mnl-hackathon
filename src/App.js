import { Route, Switch } from "react-router";
import PrivateRoute from "./components/commons/PrivateRoute";
import Login from "./components/features/Auth/Login";
import Register from "./components/features/Auth/Register";
import PostsPage from "./components/features/Posts/PostsPage";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <div>
      <Switch>
        <PrivateRoute path="/posts">
          <PostsPage />
        </PrivateRoute>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
