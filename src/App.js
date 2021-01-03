import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home'
import { AddBook } from './components/addBook';
import { ViewBook } from './components/viewBook';
import { UpdateBook} from './components/updateBook';

// Front page and routing
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Bootstrap Navbar */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Library</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/viewBook">View Books</Nav.Link>
              <Nav.Link href="/addBook">Add Book</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path='/home' component={Home} exact /> 
            <Route path='/viewBook' component={ViewBook} exact />
            <Route path='/addBook' component={AddBook} exact />
            <Route path='/updateBook/:id' component={UpdateBook} exact/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
