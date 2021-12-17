import "./App.css";
import TodoList from "./components/TodoList";
import "./style/Christmas.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UndoneList from "./components/UndoneList";
import DoneList from "./components/doneList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { INIT_TODO_ITEMS } from "./constant/constant";
import { getTodos } from "./apis/todos";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos().then((response) => {
      dispatch({ type: INIT_TODO_ITEMS, payload: response.data });
    });
  });
  return (
    <Router>
      <nav>
        <Link className="link" to="/">
          Home
        </Link>

        <Link className="link" to="/undone">
          Undone Items
        </Link>

        <Link className="link" to="/done">
          Done Items
        </Link>
      </nav>

      <div className="App">
        <Switch>
          <Route exact path="/">
            <TodoList />
          </Route>
          <Route exact path="/undone">
            <UndoneList />
          </Route>
          <Route exact path="/done">
            <DoneList />
          </Route>
        </Switch>
      </div>

      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
    </Router>
  );
}

export default App;
