import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Layout>
            <Route path="/" component={Home} exact/>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
