import React, { Component } from 'react';
import Home from './components/Home'
import Comments from './components/Comments'
import Fetch from './components/Fetch'
import Posts from './components/Posts'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home  </Link>
          <Link to="/comments">Comments  </Link>
          <Link to="/posts">Posts  </Link>
          <Link to="/fetch">Fetch  </Link>


          <Switch>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/fetch">
              <Fetch />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
