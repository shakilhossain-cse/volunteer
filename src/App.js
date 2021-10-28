import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Event from "./components/Event/Event";
import AuthProvider from "./context/AuthProvider";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivetRoute from "./Route/PrivetRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Layout>
          <PrivetRoute path="/events">
            <Event />
          </PrivetRoute>
            <Route path="/" component={Home} exact />
          </Layout>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
