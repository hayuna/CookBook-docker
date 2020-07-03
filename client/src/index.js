import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import DishesList from './components/DishesList'
import DishDetails from './components/DishDetails'
import NotFound from './components/utils/NotFound'
import { Container } from './style'
import AddNewDish from './components/AddNewDish';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/' component={DishesList} />
          <Route exact path='/dishes' component={DishesList} />
          <Route exact path='/dishes/:dishId' component={DishDetails} />
          <Route exact path='/new' component={AddNewDish} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
