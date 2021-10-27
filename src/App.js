import { Route, Switch } from "react-router";

function App() {
  return (
    <Switch>
      <Route to="/" render={() => <div>test</div>} />
    </Switch>
  );
}

export default App;
